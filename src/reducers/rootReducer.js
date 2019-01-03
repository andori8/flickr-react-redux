export default function rootReducer(state = {
  photos: [], recentPhotos: [], clickedPhoto: {}, loading: false
}, action) {
  switch (action.type) {
    case 'LOADING_PHOTOS':
      return {...state, loading: true}
    case 'FETCH_PHOTOS':
      return {...state, loading: false, recentPhotos: action.payload}
    case 'LOADING_SEARCHED_PHOTOS':
      return {...state, loading: true}
    case 'FETCH_SEARCHED_PHOTOS':
      return {...state, loading: false, photos: action.payload}
    case 'LOADING_CLICKED_PHOTO':
      return {...state, loading: true}
    case 'FETCH_CLICKED_PHOTO':
      return {...state, loading: false, clickedPhoto: action.payload}
    default:
      return state;
  }
}
