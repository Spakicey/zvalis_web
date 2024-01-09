// DrawingCanvas.js
import React, { useState, useRef, useEffect } from 'react';
import img1 from '../static/CIMG0894.JPG';
import img2 from '../static/CIMG1165.JPG';
import img3 from '../static/fire.gif';
import img4 from '../static/fire2.gif';
import img5 from '../static/redline.gif';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [cursorImages, setCursorImages] = useState([img5, img2, img1]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const drawCursor = (x, y) => {
      const imagePath = cursorImages[currentImageIndex];

      const img = new Image();
      img.src = imagePath;
      canvas.style.cursor = img;
      context.drawImage(canvas.style.cursor, x - img.width / 2, y - img.height / 2, img.width, img.height);
    };

    const startDrawing = (e) => {
      const { offsetX, offsetY } = e;
      drawCursor(offsetX, offsetY);
      setIsDrawing(true);
      //canvas.style.cursor = 'none'; // Hide cursor on mousedown
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const { offsetX, offsetY } = e;
      drawCursor(offsetX, offsetY);
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      canvas.style.cursor = 'auto'; // Show cursor on mouseup

      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cursorImages.length);
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
  }, [isDrawing, cursorImages, currentImageIndex]);

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
