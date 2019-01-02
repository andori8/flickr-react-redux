import React from 'react';
import Photo from '../components/Photo';

const PhotosContainer = ({photos}) => {
  const photoShow = photos.map(photo => {
    return <Photo key={photo.id} photo={photo} />
  })

  return (<div className="photo-gallery">{photoShow}</div>)
}

export default PhotosContainer;
