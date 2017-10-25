import { FETCH_GALLERY_IMAGES } from '../actions';

export default function (state=[], action ) {
  switch (action.type) {
    case FETCH_GALLERY_IMAGES:
      return action.payload.data;
    
    default:
      return state;
  }
}