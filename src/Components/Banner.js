import React from 'react';
import '../Assets/Css/Banner.css';
import {makeStyles} from '@material-ui/core';
import BannerBg from '../Assets/Image/BannerBg.jpg';

const useStyle = makeStyles({
  container:{
    height:450,
    background: `url(${BannerBg})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'all 0.7s ease-in',
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)',
    backgroundAttachment:'fixed'
  }
});

function Banner() {

  const classes = useStyle();
  return (
    <>
      <div className={`${classes.container} d-flex align-items-center w-100 mx-auto justify-content-between px-5`}>
        <div style={{lineHeight:.9}}>
          <p style={{color:'white',fontFamily:'poppins',fontSize:130,textAlign:'center'}}>2019</p>
          <p style={{color:'white',fontFamily:'Comfortaa',fontSize:28,textAlign:'center'}}>Since We Started</p>
        </div>
        <div className='w-50'>
          <p style={{fontSize:22,color:'white',textAlign:'center',fontFamily:'Comfortaa',opacity:.8}}>Since the year 2019, we have worked our way up and collaborated with some of the industries big names to create a more accessible online world.</p>
        </div>
        <div style={{lineHeight:.9}}>
          <p style={{color:'white',fontFamily:'poppins',fontSize:130,textAlign:'center'}}>45</p>
          <p style={{color:'white',fontFamily:'Comfortaa',fontSize:28,width:300,textAlign:'center'}}>Since We Started</p>
        </div>
      </div>
    </>
  )
}

export { Banner };