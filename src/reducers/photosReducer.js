export default (state = {photos: []}, action) => {
  switch (action.type) {
    case 'LOADING_SEARCHED_PHOTOS':
      return {...state, loading: true}
    case 'FETCH_SEARCHED_PHOTOS':
      return {...state, loading: false, photos: action.payload}
    default:
      return state;
  }
}
