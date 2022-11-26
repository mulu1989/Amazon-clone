
import React, { useState } from 'react'
import './ImageSlider.css'
import { SliderData } from './SliderData'
import ArrowBackIosNewIcon  from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function ImageSlider(slides) {
 const {current,setCurrent} = useState(0)
 const length = slides.length

const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide =() => {
  setCurrent(current === 0 ? length - 1 : current - 1)
}
 console.log(current)




 if(!Array.isArray(slides) || slides.length <= 0){
  //return null//
 }
 


  return (
    <div className='slider'>
      <ArrowBackIosNewIcon className='back_arrow' />
      <ArrowForwardIosIcon className='forward_arrow'  onClick={nextSlide} />
   {SliderData.map((slide, index) =>{
    return (
      <img src={slide.image} alt='amazon' className='image' />
    )
   })}


    </div>
  )
}

export default ImageSlider


