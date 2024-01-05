// yokoland.js
import React, { useState, useRef, useEffect } from 'react';
import { parseGIF, decompressFrames } from 'gifuct-js';
import img0 from '../static/CIMG0894.JPG';
import img1 from '../static/based-redline.gif';
import img2 from '../static/ezgif.gif';
import img3 from '../static/CIMG1165.JPG';
import img4 from '../static/giphy.gif';
import img5 from '../static/redline.gif';

const Yokoland = () => {
  const canvasRef = useRef(null);
  // gif patch canvas
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  // full gif canvas
  const gifCanvas = document.createElement('canvas');
  const gifCtx = gifCanvas.getContext('2d');
  let gif;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const loadGIF = () => {
      let oReq = new XMLHttpRequest();
      oReq.open('GET', img1, true);
      oReq.responseType = 'arraybuffer';

      oReq.onload = () => {
        let arrayBuffer = oReq.response; // Note: not oReq.responseText
        if (arrayBuffer) {
          gif = parseGIF(arrayBuffer);
          let frames = decompressFrames(gif, true);
          // render the gif
          renderGIF(frames);
        }
      };
      oReq.send(null);
    };

    let playing = false;
    let loadedFrames;
    let frameIndex;

    const playpause = () => {
      playing =! playing
      if (playing) {
        renderFrame();
      }
    };

    const renderGIF = (frames) => {
      loadedFrames = frames;
      frameIndex = 0;

      canvas.width = frames[0].dims.width;
      canvas.height = frames[0].dims.height;

      gifCanvas.width = canvas.width;
      gifCanvas.height = canvas.height;

      if (!playing) {
        playpause();
      }
    };

    let frameImageData;

    const drawPatch = (frame) => {
      let dims = frame.dims;

      if (
        !frameImageData ||
        dims.width != frameImageData.width ||
        dims.height != frameImageData.height
      ) {
        tempCanvas.width = dims.width;
        tempCanvas.height = dims.height;
        frameImageData = tempCtx.createImageData(dims.width, dims.height);
      }

      // set the patch data as an override
      frameImageData.data.set(frame.patch);

      // draw the patch back over the canvas
      tempCtx.putImageData(frameImageData, 0, 0);

      //gifCtx.drawImage(tempCanvas, dims.left, dims.top)
      context.drawImage(tempCanvas, dims.left, dims.top);
    };

    let needsDisposal = false;

    const renderFrame = () => {
      // get the frame
      let frame = loadedFrames[frameIndex];

      let start = new Date().getTime();

      if (needsDisposal) {
        gifCtx.clearRect(0, 0, canvas.width, canvas.height);
        context.clearRect(0, 0, canvas.width, canvas.height);
        needsDisposal = false;
      }

      // draw the patch
      drawPatch(frame);

      // update the frame index
      frameIndex++;
      if (frameIndex >= loadedFrames.length) {
        frameIndex = 0;
      }

      if (frame.disposalType === 2) {
        needsDisposal = true;
      }

      let end = new Date().getTime();
      let diff = end - start;

      if (playing) {
        // delay the next gif frame
        setTimeout(function() {
          requestAnimationFrame(renderFrame)
          //renderFrame();
        }, Math.max(0, Math.floor(frame.delay - diff)))
      }
    };

    canvas.addEventListener('click', loadGIF);

    return () => {
      canvas.removeEventListener('click', loadGIF);
    };
  });

  return (
    <canvas
      ref={canvasRef}
      width={800} // set your desired canvas width
      height={600} // set your desired canvas height
      style={{ border: '1px solid #000', cursor: 'auto' }}
    >
    </canvas>
  );
};

export default Yokoland;
