export function fetchPhotos() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PHOTOS' });
    return fetch('https://flickstr-react-redux.herokuapp.com/api/v1/recent')
    .then(res => res.json())
    .then(photos => dispatch( {type: 'FETCH_PHOTOS', payload: photos.photos.photo }))
  }
}

export function fetchSearchedPhotos(q) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SEARCHED_PHOTOS' });
    if (q.length !== 0) {
    return fetch(`https://flickstr-react-redux.herokuapp.com/api/v1/search`, {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({query: q})
    })
    .then(res => res.json())
    .then(photos => dispatch( {type: 'FETCH_SEARCHED_PHOTOS', payload: photos.photos.photo}))
  }
  }
}

export function fetchClickedPhoto(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CLICKED_PHOTO' });
    return fetch(`https://flickstr-react-redux.herokuapp.com/api/v1/recent/${id}`)
      .then(res => res.json())
      .then(photo => dispatch({ type: 'FETCH_CLICKED_PHOTO', payload: photo.photo }))
  }
}
