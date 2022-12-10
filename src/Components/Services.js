import React from 'react';
import '../Assets/Css/Services.css';
import { makeStyles } from '@material-ui/core';
import servicesBg from '../Assets/Image/servicesBg.jpg';
import { LearnButton } from './LearnButton';
import {useNavigate} from 'react-router-dom';

const useStyle = makeStyles({
  container: {
    padding: "45px 0px 0px 0px",
    backgroundImage: `url(${servicesBg})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'all 0.7s ease-in',
    height: 660
  }
})

function Services() {
  const classes = useStyle();
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.container}>
        <div>
          <div className='d-flex flex-column align-items-center pb-4 w-75 mx-auto'>
            <p style={{ fontSize: 30, fontFamily: 'Comfortaa', cursor: 'pointer', borderBottom: '2px solid orange' }}>
              Services
            </p>
          </div>
        </div>
        <div className='d-flex px-5 pt-5 mx-3 mt-4 justify-content-between'>
          <div>
            <p style={{ fontSize: 70, fontFamily: 'Comfortaa' }} className='pr-5'>
              Let's take your <span style={{ color: 'orange' }}>Business</span> to Next Level With <span style={{ color: 'orange' }}>DigiTech.</span>
            </p>
            <div style={{marginTop:40}} onClick={()=>navigate('/services')}>
              <LearnButton />
            </div>
          </div>
          <div className='d-flex align-items-center'>
            <ul className='ul'>
              <li>Website Development</li>
              <li>Application Development</li>
              <li>Digital Marketing</li>
              <li>Content Writing</li>
              <li>Blockchain and Web3.0 Services.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export { Services };