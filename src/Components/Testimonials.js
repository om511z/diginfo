import { makeStyles } from '@material-ui/core';
import React from 'react';
import { CommonCarousel } from './CommonCarousel';
import testimonialBg from '../Assets/Image/testimonialBg.jpeg';



const useStyle = makeStyles({
  tileContainer: {
    padding: "45px 0px 0px 0px",
    backgroundImage: `url(${testimonialBg})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'all 0.7s ease-in'
  }
})

function Testimonials() {
  const classes = useStyle();
  const testimonialData = [
    {
      statement: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    }
    ,
    {
      statement: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
      statement: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
      statement: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
      statement: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    }
  ]

  return (
    <>
      <div className={`${classes.tileContainer}`}>
        <div className='d-flex flex-column align-items-center pb-5 mb-2'>
          <p style={{ fontWeight: 600, fontSize: 22 }}>TESTIMONIALS</p>
          <p style={{ fontWeight: 500, fontSize: 40,fontFamily: 'Comfortaa' }}>
            What They Say About Our Company ?
          </p>
          <p style={{ fontWeight: 300, fontSize: 18 }}>
            Eorem ipsum dolor sit ametaut odiut areaper seomnis isatus statewhen an unknown bleda.
          </p>
        </div>
        <div>
          <CommonCarousel data={testimonialData} radius={20} arrow={false} dots={true} slideToShow={1} autoplay={true} />
        </div>
      </div>
    </>
  )
}

export { Testimonials };