import React from 'react';
import Photo from '../components/Photo';

const Photos = ({photos}) => {
  const photoShow = photos.map(photo => {
    return <Photo key={photo.photo_id === undefined ? photo.id : photo.photo_id} photo={photo} />
  })

  return (<div className="photo-container">{photoShow}</div>)
}

export default Photos;
