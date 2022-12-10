import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../Components/Navbar';
import mainServicePageBg from '../Assets/Image/mainServicePageBg.jpg';
import servicesItemsBg from '../Assets/Image/servicesBg.jpg';
import { Footer } from '../Components/Footer';
import WebDesign from '../Assets/Image/WebDesign.jpg';
import AppDesign from '../Assets/Image/AppDesign.jpeg';
import DigitalMarketing from '../Assets/Image/AppDesign.jpeg';
import AdCampaign from '../Assets/Image/AdCampaign.jpeg';
import ContentMarketing from '../Assets/Image/ContentMarketing.jpeg';
import Maintainance from '../Assets/Image/maintainance.jpeg';
import UIUX from '../Assets/Image/UIUX.jpeg';
import logoDesign from '../Assets/Image/logoDesign.jpeg';
import seo from '../Assets/Image/seo.jpeg';
import socialMediaHandle from '../Assets/Image/socialMediaHandle.jpeg';
import SDE from '../Assets/Image/SDE.jpeg';
import portfolio from '../Assets/Image/portfolio.jpeg';
import { ServicesCarousel } from '../Components/ServicesCarousel';

const useStyle = makeStyles({
  container: {
    background: `url(${mainServicePageBg})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'all 0.7s ease-in',
    height: 700,
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
    backgroundAttachment: 'fixed'
  },
  serviceContainer: {
    background: `url(${servicesItemsBg})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'all 0.7s ease-in',
    height: 900
  }
});

function Services() {
  const classes = useStyle();
  const servicesData = [
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354"
  ]
  return (
    <div style={{ backgroundColor: '#faf7f9' }}>
      <div className={classes.container}>
        <Navbar />
        <div className='w-50 mx-auto pt-5 mt-4'>
          <p style={{ color: 'white', fontFamily: 'rubik', textAlign: 'center', fontSize: 70, fontWeight: 700 }}>OUR <span style={{ color: 'crimson' }}>SERVICES</span></p>
          <p style={{ color: 'white', fontFamily: 'Comfortaa', textAlign: 'center', opacity: .8, fontSize: 22 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
        </div>
        <div className='d-flex w-75 mx-auto align-items-center justify-content-center' style={{ background: 'linear-gradient(0deg,#FFFFFF,#fcdef0)', marginTop: 80, borderRadius: 20, zIndex: 5, position: 'relative' }}>
          <div className='p-4' style={{ lineHeight: 1 }}>
            <p style={{ textAlign: 'center', fontSize: 50, fontWeight: 700, fontFamily: 'Comfortaa', color: '#d63384' }}>300+</p>
            <p style={{ textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 22, color: '#344767' }}>Coded Elements</p>
            <p style={{ textAlign: 'center', fontFamily: 'Comfortaa', color: '#495057', lineHeight: 1.6 }}>It is a long established fact that a reader will be.</p>
          </div>
          <div className='p-4' style={{ lineHeight: 1 }}>
            <p style={{ textAlign: 'center', fontSize: 50, fontWeight: 700, fontFamily: 'Comfortaa', color: '#cb0c9f' }}>100+</p>
            <p style={{ textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 22, color: '#344767' }}>Design Blocks</p>
            <p style={{ textAlign: 'center', fontFamily: 'Comfortaa', color: '#495057', lineHeight: 1.6 }}>It is a long established fact that a reader will be.</p>
          </div>
          <div className='p-4' style={{ lineHeight: 1 }}>
            <p style={{ textAlign: 'center', fontSize: 50, fontWeight: 700, fontFamily: 'Comfortaa', color: 'crimson' }}>39</p>
            <p style={{ textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 22, color: '#344767' }}>Pages</p>
            <p style={{ textAlign: 'center', fontFamily: 'Comfortaa', color: '#495057', lineHeight: 1.6 }}>It is a long established fact that a reader will be.</p>
          </div>
        </div>
      </div>
      <div className={`${classes.serviceContainer} d-flex align-items-center px-5`}>
        <div className='w-25'>
          <p style={{ color: "#d63384", fontFamily: 'Comfortaa', fontSize: 60 }}>
            Digitech's Services
          </p>
          <p style={{ fontSize: 19, opacity: .5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
        </div>
        <div className='w-75 p-5' style={{ marginTop: 100 }}>
          <div className='d-flex align-items-center justify-content-between py-3'>
            <div>
              <img src={WebDesign} alt="Websites" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
            <div>
              <img src={AppDesign} alt="Applications" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
            <div>
              <img src={SDE} alt="Softwares" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
            <div>
              <img src={logoDesign} alt="Logo" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between py-3'>
            <div>
              <img src={portfolio} alt="Portfolio" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
            <div>
              <img src={seo} alt="SEO" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
            <div>
              <img src={DigitalMarketing} alt="Digital Marketing" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
            <div>
              <img src={UIUX} alt="UI/UX" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-between py-3'>
            <div>
              <img src={ContentMarketing} alt="Content Writing" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
            <div>
              <img src={Maintainance} alt="Website Maintainance" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
            <div>
              <img src={AdCampaign} alt="Add Campaigns" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
            <div>
              <img src={socialMediaHandle} alt="Social Media Handle" style={{ height: 200, width: 200, borderRadius: 15 }} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p style={{ color: "#344767", fontSize: 45, textAlign: 'center', fontFamily: 'poppins' }}>DigiTech ShowCase</p>
        <ServicesCarousel data={servicesData} radius={20} arrow={false} dots={true} slideToShow={5} autoplay={true} />
      </div>
      <Footer />
    </div>
  )
}

export { Services };