import React from 'react'
import Slider from 'react-slick'
import './bannerslider.css'
const BannerSlider = () => {
  const data=[
    {
        id:1,
        image:'https://www.worldatlas.com/r/w1200/upload/46/cb/e1/shutterstock-252338818.jpg',
        title:'Everything 100% Organic',
        description:'At Your Doorstep',
        button:'https://www.npmjs.com/package/react-slick'
    },
    {
        id:2,
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Culinary_fruits_front_view.jpg/500px-Culinary_fruits_front_view.jpg',
        title:'Fruits are Awesome',
        description:'At Your Doorstep',
        button:'https://www.npmjs.com/package/react-slick'
    }
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='bannerslider'>
        <Slider dotsClass='bannerslider' {...settings}>
        {
            data.map(item=>{
                return(
                    <div className='imagecont' key={item.id}>
                        <img src={item.image} alt='noimg'/>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button>Shop now</button>  
                    </div>
                )
            })
        }
        </Slider>
    </div>
  )
}

export default BannerSlider