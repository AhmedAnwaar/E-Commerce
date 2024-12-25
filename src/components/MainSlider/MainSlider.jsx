import React from 'react'
import slider1 from "../../assets/images/slider-image-1-Dh9d2U6G.jpeg"
import slider2 from "../../assets/images/slider-image-2-Xt88XJy9.jpeg"
import slider3 from "../../assets/images/slider-image-3-BtMvVf4V.jpeg"

import Slider from 'react-slick'
export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1}

      
  return <>
<Slider {...settings}>

  <img className="xl:h-[450px] lg:h-[350px] md:h-[280px] h-[150px]" src={slider1} alt="slider_1" />
  <img className="xl:h-[450px] lg:h-[350px] md:h-[280px] h-[150px]" src={slider2} alt="slider_2" />
  <img className="xl:h-[450px] lg:h-[350px] md:h-[280px] h-[150px]" src={slider3} alt="slider_3" />


</Slider>

    </> 
 


}



  
