export default function rootReducer(state = {
  photos: [], recentPhotos: [], loading: false
}, action) {
  switch (action.type) {
    case 'LOADING_PHOTOS':
      return {...state, loading: true}
    case 'FETCH_PHOTOS':
      return {...state, loading: false, trendingGifs: action.payload}
    default:
      return state;
  }
}
