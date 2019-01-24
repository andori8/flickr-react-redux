export default (state = {recentPhotos: [], loading: false}, action) => {
  switch (action.type) {
    case 'LOADING_PHOTOS':
      return {...state, loading: true}
    case 'FETCH_PHOTOS':
      return {...state, loading: false, recentPhotos: action.payload}
    default:
      return state;
  }
}
