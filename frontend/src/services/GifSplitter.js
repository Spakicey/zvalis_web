import React, { useEffect, useState } from 'react';
import { GifReader } from 'omggif';

const GifFrameLoader = ({ gifUrl }) => {
  const [gifFrames, setGifFrames] = useState([]);

  useEffect(() => {
    const loadGifFrameList = async () => {
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

    loadGifFrameList();
  }, [gifUrl]);

  return (
    <div>
      {gifFrames.map((frame, index) => (
        <img
          key={index}
          src={frame}
          alt={`Frame ${index}`}
          style={{ border: '1px solid #000', margin: '5px' }}
        />
      ))}
    </div>
  );
};

export default GifFrameLoader;
