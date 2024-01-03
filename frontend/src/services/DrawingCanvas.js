// DrawingCanvas.js
import React, { useState, useRef, useEffect } from 'react';
import { GifReader } from 'omggif';
import img1 from '../static/CIMG0894.JPG';
import img2 from '../static/CIMG1165.JPG';
import img3 from '../static/fire.gif';
import img4 from '../static/fire2.gif';
import img5 from '../static/redline.gif';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [cursorImages, setCursorImages] = useState([
    img1,
    img3,
    img2,
    img4,
    img5,
    // Add more image paths as needed
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [gifFrames, setGifFrames] = useState([]);
  const [currentGifFrameIndex, setCurrentGifFrameIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const drawCursor = (x, y) => {
      const img = new Image();
      if (cursorImages[currentImageIndex].toLowerCase().endsWith('.gif')) {
        loadGifFrameList(cursorImages[currentImageIndex]);
        img.src = gifFrames[currentGifFrameIndex];
      }
      else {
        img.src = cursorImages[currentImageIndex];
      };
      img.onload = () => {
        const imgWidth = 300; // Set the width and height as needed
        const imgHeight = 200;
        context.drawImage(img, x - imgWidth / 2, y - imgHeight / 2, imgWidth, imgHeight);
      }
    };

    const startDrawing = (e) => {
      const { offsetX, offsetY } = e;
      drawCursor(offsetX, offsetY);
      setIsDrawing(true);
      canvas.style.cursor = 'none'; // Hide cursor on mousedown
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const { offsetX, offsetY } = e;
      drawCursor(offsetX, offsetY);
      setCurrentGifFrameIndex((prevIndex) => (prevIndex + 1) % gifFrames.length);
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      canvas.style.cursor = 'auto'; // Show cursor on mouseup
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cursorImages.length);
    };

    const loadGifFrameList = async (gifUrl) => {
      try {
        const response = await fetch(gifUrl);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const intArray = new Uint8Array(arrayBuffer);

        const reader = new GifReader(intArray);

        const frames = new Array(reader.numFrames()).fill(0).map((_, k) => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          const info = reader.frameInfo(k);
          canvas.width = info.width;
          canvas.height = info.height;

          const imageData = ctx.createImageData(info.width, info.height);
          reader.decodeAndBlitFrameRGBA(k, imageData.data);

          ctx.putImageData(imageData, 0, 0);

          return canvas.toDataURL(); // Convert canvas to base64 image
        });

        setGifFrames(frames);
      } catch (error) {
        console.error('Error loading GIF frames:', error);
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
    };
  }, [isDrawing, cursorImages, currentImageIndex, gifFrames, currentGifFrameIndex]);

  return (
    <canvas
      ref={canvasRef}
      width={800} // set your desired canvas width
      height={600} // set your desired canvas height
      style={{ border: '1px solid #000', cursor: 'auto' }}
    />
  );
};

export default DrawingCanvas;
