// yokoland.js
import React, { useState, useRef, useEffect } from 'react';
import { parseGIF, decompressFrames } from 'gifuct-js';
import img0 from '../static/CIMG0894.JPG';
import img1 from '../static/based-redline.gif';
import img2 from '../static/ezgif.gif';
import img3 from '../static/CIMG1165.JPG';
import img4 from '../static/giphy.gif';
import img5 from '../static/redline.gif';
import img6 from '../static/fire2.gif';

const Yokoland = () => {
  const canvasRef = useRef(null);
  const framesRef = useRef(null);
  const delayRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  let gif;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const gifCanvas = document.createElement('canvas');
    const gifCtx = canvas.getContext('2d');

    let oReq = new XMLHttpRequest();
    oReq.open('GET', img5, true);
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

    const startDrawing = (e) => {
      const { offsetX, offsetY } = e;
      renderFrame(offsetX, offsetY);
      setIsDrawing(true);
      canvas.style.cursor = 'none'; // Hide cursor on mousedown
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const { offsetX, offsetY } = e;
      //const gifDelay = framesRef.current[0].delay*100;
      //console.log(gifDelay);
      //setTimeout(renderFrame(offsetX, offsetY), delayRef.current);
      renderFrame(offsetX, offsetY);
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      canvas.style.cursor = 'auto'; // Show cursor on mouseup
    };

    const drawPatch = (frame, x, y) => {
      let frameImageData;
      let dims = frame.dims;

      frameImageData = gifCtx.createImageData(dims.width, dims.height);
      frameImageData.data.set(frame.patch);

      const imgX = x - dims.width / 2;
      const imgY = y - dims.height / 2;

      gifCtx.putImageData(frameImageData, imgX, imgY);

      // Draw the gifCanvas onto the main canvas
      context.drawImage(gifCanvas, x - gifCanvas.width / 2, y - gifCanvas.height / 2);
    };

    let frameIndex = 0;

    const renderFrame = (x, y) => {
      let loadedFrames = framesRef.current;
      let start = new Date().getTime();

      // get the frame
      let frame = loadedFrames[frameIndex];

      context.clearRect(0, 0, canvas.width, canvas.height);

      // draw the patch
      drawPatch(frame, x, y);

      // update the frame index
      frameIndex++;
      if (frameIndex >= loadedFrames.length) {
        frameIndex = 0;
      }

      let end = new Date().getTime();
      let diff = end - start;
      let gifDelay = Math.max(0, Math.floor(frame.delay - diff));
      delayRef.current = gifDelay;
      console.log(delayRef.current);

      // delay the next gif frame
      {/*

      if (!isDrawing) {
        setTimeout(function() {
          renderFrame(x, y);
          //drawPatch(frame, x, y);
        }, gifDelay)
      }

    */}
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, [isDrawing]);

  return (
    <canvas
      ref={canvasRef}
      //className='gif-canvas'
      width={1200} // set your desired canvas width
      height={700} // set your desired canvas height
      style={{ border: '1px solid #000', cursor: 'auto' }}
    >
    </canvas>
  );
};

export default Yokoland;
