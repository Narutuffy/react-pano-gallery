import { combineReducers } from 'redux';
import GalleryImagesReducer from './GalleryImagesReducer';

const rootReducer = combineReducers({
	images: GalleryImagesReducer,
});

export default rootReducer;
