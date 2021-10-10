import React from 'react'
import './gallery.css';
import ImageGallery from 'react-image-gallery'



export const Gallery = ({images}) => {

  const imagesArr = () => images.map(i => ({thumbnail: i, original: i}))

  return (
    <ImageGallery items={imagesArr()} />
  )
}