import React from 'react';

const Photo = ({photo}) => {
  return ( <div className="single-photo"><img src={photo.url_m} alt="photo" /></div>)
}

export default Photo;
