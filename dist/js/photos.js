// Include Lightbox
import PhotoSwipeLightbox from '../node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js';

const photos_list = [
    '6940.jpg',
    '6941.jpg',
    '6942.jpg',
    '6943.jpg',
    '6944.jpg',
    '6945.jpg',
    '6946.jpg',
    '6948.jpg',
    '6950.jpg',
    '6952.jpg',
    '6953.jpg',
    '6954.jpg',
    '6956.jpg',
    '6958.jpg',
]

let gallery = document.getElementById('gallery');

for (let i = 0; i < photos_list.length; i++) {
  // create a new anchor element
  let a = document.createElement('a');
  a.href = `assets/images/gallery/IMG_${photos_list[i]}`;
  a.setAttribute('data-pswp-width', '1440');
  a.setAttribute('data-pswp-height', '1080');
  a.target = '_blank';

  let img = document.createElement('img');
  img.src = `assets/images/gallery/THUMB_${photos_list[i]}`;
  img.alt = "";

  a.appendChild(img);
  gallery.appendChild(a);
}

const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '#gallery',

  // Elements within gallery (slides)
  children: 'a',

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import('../node_modules/photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();
