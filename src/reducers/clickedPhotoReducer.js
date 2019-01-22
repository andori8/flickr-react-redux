export default (state = {clickedPhoto: []}, action) => {
  switch (action.type) {
    case 'LOADING_CLICKED_PHOTO':
      return {...state, loading: true}
    case 'FETCH_CLICKED_PHOTO':
      return {...state, loading: false, clickedPhoto: action.payload}
    default:
      return state;
  }
}
