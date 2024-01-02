// ImageAddService.js
import React, { useRef } from 'react';
import img1 from '../static/CIMG0894.JPG';
import img2 from '../static/CIMG1165.JPG';
import img3 from '../static/fire.gif';
import img4 from '../static/fire2.gif';

const images = [img3, img1, img2, img4];

let i = 0;

const ImagePlacer = () => {
  const containerRef = useRef(null);
  const placedImagesContainer = document.createElement('div');
  placedImagesContainer.className = 'placed-images-container';

  const placeImage = (pageX, pageY) => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const containerRect = container.getBoundingClientRect();

    const nextImage = images[i];

    container.appendChild(placedImagesContainer);

    const img = document.createElement('img');
    img.setAttribute('src', nextImage);
    img.className = 'placed-image';

    // Calculate the position of the image relative to the container
    const imgLeft = Math.max(0, pageX - containerRect.left);
    const imgTop = Math.max(0, pageY - containerRect.top);

    img.style.left = imgLeft + 'px';
    img.style.top = imgTop + 'px';

    placedImagesContainer.appendChild(img);

    i = i + 1;

    if (i >= images.length) {
      i = 0;
    }
  }

  const handleMouseDown = (event) => {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
  };

  const handleTouchEnd = (event) => {
    event.preventDefault();
    const touch = event.changedTouches[0];
    placeImage(touch.pageX, touch.pageY);
  };

  return (
    <div
      className='container'
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchEnd={handleTouchEnd}
      o
    />
  );
}

export default ImagePlacer;
