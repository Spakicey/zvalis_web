// ImageAddService.js
import img1 from '../static/CIMG0894.JPG';
import img2 from '../static/CIMG1165.JPG';
import img3 from '../static/fire.gif';
import img4 from '../static/fire2.gif';

const images = [img3, img1, img2, img4];

let i = 0;

function placeImage (x, y) {
  const nextImage = images[i];

  const img = document.createElement('img');

  img.setAttribute('src', nextImage);
  img.style.left = x + 'px';
  img.style.top = y + 'px';

  document.getElementById('image-add').appendChild(img);

  i = i + 1;

  if (i >= images.length) {
    i = 0;
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.addEventListener('mousedown', function(event) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
    console.log('Click image added');
  })
})

document.addEventListener('DOMContentLoaded', function(event) {
  document.addEventListener('touchend', function(event) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
    console.log('Touch image added');
  })
})

export default placeImage;
