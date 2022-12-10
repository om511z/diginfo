import React from 'react'
import '../Assets/Css/Contact.css'
import { Footer } from './Footer'
import { FooterContact } from './FooterContact'
import { Navbar } from './Navbar'

const Contact = () => {
  return (
    <>

    <div class='contact-start'>
      <Navbar/>
    </div>
     <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact Us</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>We focus on your requirements and customise the solutions according to your needs. Book an appointment with our experts now!</p>
                    <div class="icons">
                        <div class="row">
                          <div class='icon1'>
                          <i class="fas fa-phone"></i>
                          </div>
                           
                            <div class="info">
                                <div class="head">Phone No</div>
                                <div class="sub-title">+91 8446505028</div>
                            </div>
                        </div>
                        <div class="row">
                      <div class='icon2'>
                      <i class="fas fa-envelope"></i>
                      </div>
                          
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title"> info@digitechinfoservices.com</div>
                            </div>
                        </div>
                        <div class="row">
                        <div class='icon3'>
                        <i class="fas fa-map-marker-alt"></i>
                     
                        </div>
                       
                           
                            <div class="info1">
                          
                                <div class="head">Address</div>
                                <div class="sub-title">Office 519, Gera's Imperium Rise opposite Wipro Hinjawadi pune, Maharashtra 411057 India</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form action="#">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" required/>
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" required/>
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <FooterContact/>
    <Footer/>

    </>
  )
}

export default Contact