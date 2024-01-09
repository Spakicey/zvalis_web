// yokoland.js
import React, { useState, useRef, useEffect } from 'react';
import { parseGIF, decompressFrames } from 'gifuct-js';
//import img1 from '../static/based-redline.gif';
//import img4 from '../static/giphy.gif';
//import img5 from '../static/redline.gif';
//import img7 from '../static/barbed-wire.gif';

const Yokoland = () => {
  const canvasRef = useRef(null);
  const framesRef = useRef(null);
  const mouseX = useRef(null);
  const mouseY = useRef(null);
  const playing = useRef(false);
  const [isDrawing, setIsDrawing] = useState(false);
  let gif;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const gifCanvas = document.createElement('canvas');
    const gifCtx = canvas.getContext('2d');
    let cursorStopTimeout;

    let oReq = new XMLHttpRequest();
    oReq.open('GET', img7, true);
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
      mouseX.current = offsetX;
      mouseY.current = offsetY;
      renderFrame(mouseX.current, mouseY.current);
      setIsDrawing(true);
      canvas.style.cursor = 'none';
      clearTimeout(cursorStopTimeout);
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const { offsetX, offsetY } = e;
      mouseX.current = offsetX;
      mouseY.current = offsetY;
      playPause();

      clearTimeout(cursorStopTimeout);
      cursorStopTimeout = setTimeout(() => {
        playPause();
        playing.current = false;
      }, 250);
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      playing.current = false;
      canvas.style.cursor = 'auto';
      clearTimeout(cursorStopTimeout);
    };

    const playPause = () => {
      if (!playing.current) {
        playing.current = true;
        renderFrame();
      }
    };

    const drawPatch = (frame) => {
      let frameImageData;
      let dims = frame.dims;
      let x = mouseX.current;
      let y = mouseY.current;

      frameImageData = gifCtx.createImageData(dims.width, dims.height);
      frameImageData.data.set(frame.patch);

      const imgX = x - dims.width / 2;
      const imgY = y - dims.height / 2;

      gifCtx.putImageData(frameImageData, imgX, imgY);

      // Draw the gifCanvas onto the main canvas
      context.drawImage(gifCanvas, x - gifCanvas.width / 2, y - gifCanvas.height / 2);
    };

    let frameIndex = 0;

    const renderFrame = () => {
      let loadedFrames = framesRef.current;
      let start = new Date().getTime();

      // get the frame
      let frame = loadedFrames[frameIndex];

      context.clearRect(0, 0, canvas.width, canvas.height);

      // draw the patch
      drawPatch(frame);

      // update the frame index
      frameIndex++;
      if (frameIndex >= loadedFrames.length) {
        frameIndex = 0;
      }

      let end = new Date().getTime();
      let diff = end - start;
      let gifDelay = Math.max(0, Math.floor(frame.delay - diff));

      if (playing.current) {
        setTimeout(function() {
          requestAnimationFrame(renderFrame);
          //renderFrame();
        }, gifDelay)
      }
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
      clearTimeout(cursorStopTimeout);
    };
  }, [isDrawing]);

  return (
    <canvas
      ref={canvasRef}
      //className='gif-canvas'
      width={1200}
      height={700}
      style={{ border: '1px solid #000', cursor: 'auto' }}
    >
    </canvas>
  );
};

export default Yokoland;
