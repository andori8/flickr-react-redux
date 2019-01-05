import { combineReducers } from 'redux';
import clickedPhotoReducer from './clickedPhotoReducer';
import photosReducer from './photosReducer';
import recentPhotosReducer from './recentPhotosReducer';

export default combineReducers({
  clickedPhoto: clickedPhotoReducer,
  photos: photosReducer,
  recentPhotos: recentPhotosReducer
});
