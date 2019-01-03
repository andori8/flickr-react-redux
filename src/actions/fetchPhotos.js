export function fetchPhotos() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PHOTOS' });
    return fetch('http://localhost:3001/api/v1/recent')
    .then(res => res.json())
    .then(photos => dispatch( {type: 'FETCH_PHOTOS', payload: photos.photos.photo }))
  }
}
