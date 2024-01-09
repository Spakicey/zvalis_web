// yokoland.js
// Based heavily on the gifuct.js github demo

// Current bug: 2 Gifs back-to-back if you play one quickly
// -- and unclick, the first frame of the next gif will draw

//TODO: Find a way for transparent gifs to not overwrite previous
// -- drawn images from the transparent layer
import React, { useState, useRef, useEffect } from 'react';
import { parseGIF, decompressFrames } from 'gifuct-js';
import img1 from '../static/CIMG0894.JPG';
import img2 from '../static/CIMG1165.JPG';
import img3 from '../static/based-redline.gif';
import img4 from '../static/giphy.gif';
import img5 from '../static/redline.gif';
import img6 from '../static/barbed-wire.gif';

const Yokoland = ({ containerDimensions }) => {
  const containerWidth = containerDimensions.width;
  const containerHeight = containerDimensions.height;
  const canvasRef = useRef(null);
  const framesRef = useRef(null);
  const mouseX = useRef(null);
  const mouseY = useRef(null);
  const playing = useRef(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [cursorImages, setCursorImages] = useState([img1, img3, img2, img4, img1, img6]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let gif;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const gifCanvas = document.createElement('canvas');
    const gifCtx = canvas.getContext('2d');
    let cursorStopTimeout;

    const drawStillImage = () => {
      const imagePath = cursorImages[currentImageIndex];

      const img = new Image();
      img.src = imagePath;
      const imgWidth = img.width/4;
      const imgHeight = img.height/4;
      context.drawImage(img, (mouseX.current - imgWidth / 2), (mouseY.current - imgHeight / 2), imgWidth, imgHeight);
    };

    if (cursorImages[currentImageIndex].toLowerCase().endsWith('.gif')) {
      let oReq = new XMLHttpRequest();
      oReq.open('GET', cursorImages[currentImageIndex], true);
      oReq.responseType = 'arraybuffer';

      oReq.onload = () => {
        let arrayBuffer = oReq.response; // Note: not oReq.responseText
        if (arrayBuffer) {
          gif = parseGIF(arrayBuffer);
          let frames = decompressFrames(gif, true);
          framesRef.current = frames;
        }
      };
      oReq.send(null);
    }

    const startDrawing = (e) => {
      const { offsetX, offsetY } = getCoordinates(e);
      mouseX.current = offsetX;
      mouseY.current = offsetY;
      if (cursorImages[currentImageIndex].toLowerCase().endsWith('.gif')) {
        renderFrame();
      }
      else {
        drawStillImage();
      }
      setIsDrawing(true);
      canvas.style.cursor = 'none';
      clearTimeout(cursorStopTimeout);
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const { offsetX, offsetY } = getCoordinates(e);
      mouseX.current = offsetX;
      mouseY.current = offsetY;
      if (cursorImages[currentImageIndex].toLowerCase().endsWith('.gif')) {
        playPause();

        clearTimeout(cursorStopTimeout);
        cursorStopTimeout = setTimeout(() => {
          playPause();
          playing.current = false;
        }, 250);
      }
      else {
        drawStillImage();
      }
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      playing.current = false;
      canvas.style.cursor = 'auto';
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cursorImages.length);
      clearTimeout(cursorStopTimeout);
    };

    const getCoordinates = (e) => {
      // Check if it's a touch event
      if (e.touches && e.touches.length) {
        return {
          offsetX: e.touches[0].clientX - canvas.getBoundingClientRect().left,
          offsetY: e.touches[0].clientY - canvas.getBoundingClientRect().top,
        };
      }

      // It's a mouse event
      return {
        offsetX: e.clientX - canvas.getBoundingClientRect().left,
        offsetY: e.clientY - canvas.getBoundingClientRect().top,
      };
    };

    const playPause = () => {
      if (!playing.current) {
        playing.current = true;
        renderFrame();
      }
    };

    const drawPatch = () => {
      let frameImageData;
      let dims = framesRef.current[frameIndex].dims;
      let x = mouseX.current;
      let y = mouseY.current;

      frameImageData = gifCtx.createImageData(dims.width, dims.height);
      frameImageData.data.set(framesRef.current[frameIndex].patch);

      const imgX = x - dims.width / 2;
      const imgY = y - dims.height / 2;

      gifCtx.putImageData(frameImageData, imgX, imgY);

      // Draw the gifCanvas onto the main canvas
      context.drawImage(gifCanvas, (x - gifCanvas.width / 2), (y - gifCanvas.height / 2));
    };

    let frameIndex = 0;

    const renderFrame = () => {
      let start = new Date().getTime();

      //context.clearRect(0, 0, canvas.width, canvas.height);

      // draw the patch
      drawPatch();

      // update the frame index
      frameIndex++;
      if (frameIndex >= framesRef.current.length) {
        frameIndex = 0;
      }

      let end = new Date().getTime();
      let diff = end - start;
      let gifDelay = Math.max(0, Math.floor(framesRef.current[frameIndex].delay - diff));

      if (playing.current) {
        setTimeout(function() {
          requestAnimationFrame(renderFrame);
          //renderFrame();
        }, gifDelay)
      }
    };

    const handleContextMenu = e => {
      e.preventDefault();
    };

    // touch event listeners
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    // mouse event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // disable right click event listener
    canvas.addEventListener('contextmenu', handleContextMenu);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);

       // Remove touch event listeners
       canvas.removeEventListener('touchstart', startDrawing);
       canvas.removeEventListener('touchmove', draw);
       canvas.removeEventListener('touchend', stopDrawing);

       canvas.removeEventListener('contextmenu', handleContextMenu);
      clearTimeout(cursorStopTimeout);
    };
  }, [isDrawing, cursorImages, currentImageIndex]);

  return (
    <canvas
      ref={canvasRef}
      width={containerWidth-1}
      height={containerHeight-1}
      style={{ border: '1px solid #9B111E', cursor: 'auto', overflow: 'hidden' }}
    />
  );
};

export default Yokoland;
