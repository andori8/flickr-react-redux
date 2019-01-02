import React from 'react';

const Photo = ({photo}) => {
  return ( <li><img src={photo.url_m} alt="photo" /></li>)
}

export default Photo;
