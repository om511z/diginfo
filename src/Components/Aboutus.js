import React from 'react'
import '../Assets/Css/AboutUs.css'
import Banner from '../Assets/Image/mainServicePageBg.jpg'
import {Navbar} from './Navbar'
import { Footer } from './Footer'
import { FooterContact } from './FooterContact'
const Aboutus = () => {
  return (
    <>
      <div className="about-start" >
      <Navbar/>
    </div>
    
     <div className="about-1" >
        <h2> ABOUT US </h2>
    </div>
  
   <section className="about" id="about" >
        <div className="max-width">
           
            <div className="about-content" >
                <div className="column left">
                    <img src={Banner} alt="" />
                </div>
                <div className="column right">
                    <div className="text">Your digital Partner</div>
                   <br></br>
                    <p>We are a group of IT professionals and entrepreneurs with a vision to make India digital. We provide end-to-end IT solutions to start-ups and established businesses. We believe in the power of technology and leverage it to solve real life problems.
                    </p>
                   
                </div>
            </div>
        </div>
    </section>

    <section className="about" id="about" >
        <div className="max-width">
           
            <div className="about-content1" >
                
                <div className="column right">
                    <div className="text">Start your Digital Transformation with us!</div>
                    <br></br>
                    <p >We at DigiTech believe that start-ups should be able to focus on what they do best without having to worry about IT. We provide customized solutions for start-ups and small businesses that are tailored to their needs.
                    </p>
                   
                </div>

                <div className="column left">
                    <img src={Banner} alt="" />
                </div>
            </div>
        </div>
    </section>


   

    <div className="about-1">
        <h2> Our Services </h2>
    </div>
    
    <div id="about-2">
    <div className="content-box-lg">
        <div className="container">
            <div className="row">
                <div className="col-md-4 ">
                   <div className="about-item text-center">
                  
                   
                    <h3 style={{color:'rgb(63, 67, 104)'}}>Web Development</h3>
                   
                    </div>
                </div>
                <div className="col-md-4">
                   <div className="about-item text-center">
                  
                    <h3 style={{color:'rgb(63, 67, 104)'}}>Android Development </h3>
                   
                    </div>
                </div>
                <div className="col-md-4">
                   <div className="about-item text-center">
                      
                    <h3 style={{color:'rgb(63, 67, 104)'}}>Digital Marketing</h3>
                   
                    </div>
                 </div>
                 <div className="col-md-4">
                   <div className="about-item text-center">
                
                    <h3 style={{color:'rgb(63, 67, 104)'}}>Content Writing </h3>
                   
                    </div>
                </div>
                <div className="col-md-4">
                   <div className="about-item text-center">
                   
                   
                    <h3 style={{color:'rgb(63, 67, 104)'}}>Brand Management </h3>
                   
                    </div>
                </div>
                <div className="col-md-4">
                   <div className="about-item text-center">
                 
                   
                    <h3 style={{color:'rgb(63, 67, 104)'}}>Website Maintenance </h3>
                   
                    </div>
                </div>
                <div className="col-md-4">
                   <div className="about-item text-center">
                   
                   
                    <h3 style={{color:'rgb(63, 67, 104)'}}>UI/UX Design </h3>
                   
                    </div>
                </div>
                <div className="col-md-4">
                   <div className="about-item text-center">
                   
                   
                    <h3 style={{color:'rgb(63, 67, 104)'}}>Logo Designing  </h3>
                   
                    </div>
                </div>
                <div className="col-md-4">
                   <div className="about-item text-center">
                  
                   
                    <h3 style={{color:'rgb(63, 67, 104)'}}>Social Media Handling </h3>
                   
                    </div>
                </div>
             </div>
           </div>
        </div>
     </div>  
     <br></br>
     <FooterContact/>
     <Footer/> 

    </>
  )
}

export default Aboutus