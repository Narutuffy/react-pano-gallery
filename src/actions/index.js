import axios from 'axios';

export const FETCH_GALLERY_IMAGES = 'fetch_gallery_images';

const ROOT_URL = 'https://demo0813639.mockable.io/getPanos';

export function fetchGalleryImages() {
  const request = axios.get(`${ROOT_URL}`);
  return {
    type: FETCH_GALLERY_IMAGES,
    payload: request
  };
}
