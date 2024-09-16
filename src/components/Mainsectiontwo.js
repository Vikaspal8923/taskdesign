import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://res.cloudinary.com/green-valley-grocery/image/upload/v1724410122/answer_img/yjjjtrrsdoh8blmfd4eu.png',
    caption: 'First Slide'
  },
  {
    url: 'https://res.cloudinary.com/green-valley-grocery/image/upload/v1724410215/answer_img/gfenbtodpvwj0ukzoduk.png',
    caption: 'Second Slide'
  },
  {
    url: 'https://res.cloudinary.com/green-valley-grocery/image/upload/v1724410105/answer_img/xmguzz40atz8red76je9.png',
    caption: 'Third Slide'
  },
  {
    url: 'https://res.cloudinary.com/green-valley-grocery/image/upload/v1724410215/answer_img/gfenbtodpvwj0ukzoduk.png',
    caption: 'four Slide'
  },
];

const Slideshow = () => {
  return (
    <div className=" -z-50  slide-container">
      <Fade >
        {fadeImages.map((fadeImage, index) => (
          <div  className='  m-4 rounded-lg' key={index}>
            <img className='  rounded-md'  style={{ width: '100%' }} src={fadeImage.url} />
           
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;