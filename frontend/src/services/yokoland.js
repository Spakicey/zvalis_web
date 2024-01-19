// yokoland.js
// Based heavily on the gifuct.js github demo

// Current bug: Gifs back-to-back: if you play one quickly
// -- and unclick, the first frame of the next gif will draw
// bug: Still images not being drawn on mousedown??

// TODO: Find a way for transparent gifs to not overwrite previous
// -- drawn images from the transparent layer
// TODO: Scale images to mobile

import { useState, useRef, useEffect } from 'react';
import { parseGIF, decompressFrames } from 'gifuct-js';
import { imagesArray } from '../data/images';

const Yokoland = ({ containerDimensions }) => {
  const containerWidth = containerDimensions.width;
  const containerHeight = containerDimensions.height;
  const canvasRef = useRef(null);
  const framesRef = useRef(null);
  const mouseX = useRef(null);
  const mouseY = useRef(null);
  const playing = useRef(false);
  const imgRef = useRef(null);
  const imgWidth = useRef(null);
  const imgHeight = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [cursorImages, setCursorImages] = useState(imagesArray);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let gif;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const gifCanvas = document.createElement('canvas');
    const gifCtx = canvas.getContext('2d');
    let cursorStopTimeout;

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
    else {
      const imagePath = cursorImages[currentImageIndex];

      const img = new Image();
      img.src = imagePath;
      imgRef.current = img;
      imgWidth.current = img.width/6;
      imgHeight.current = img.height/6;
    }

    const drawStillImage = () => {
      context.drawImage(imgRef.current, (mouseX.current - imgWidth.current / 2), (mouseY.current - imgHeight.current / 2), imgWidth.current, imgHeight.current);
    };

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
      canvas.style.cursor = 'pointer';
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

    // touch event listeners
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    // mouse event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);

      // Remove touch event listeners
      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
    clearTimeout(cursorStopTimeout);
    };
  }, [isDrawing, cursorImages, currentImageIndex]);

  return (
    <canvas
      className='draw-canvas'
      ref={canvasRef}
      width={containerWidth-1}
      height={containerHeight-1}
      style={{ cursor: 'pointer', overflow: 'hidden' }}
    />
  );
};

export default Yokoland;
