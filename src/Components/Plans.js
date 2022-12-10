import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import PlansBg from '../Assets/Image/Plans.jpeg';
import RemoveIcon from '@mui/icons-material/Remove';
import VanillaTilt from 'vanilla-tilt';

const useStyle = makeStyles({
    container: {
        background: `url(${PlansBg})`,
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'all 0.7s ease-in',
        backgroundAttachment: 'fixed',
        height: '900px'
    },
    subsPlans: {
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)'
    }
});

function Plans() {
    const classes = useStyle();
    useEffect(() => {
        VanillaTilt.init(document.querySelector(".tiltStyle1"), {
            max: 25,
            speed: 400
        });
        VanillaTilt.init(document.querySelector(".tiltStyle2"), {
            max: 25,
            speed: 400
        });
        VanillaTilt.init(document.querySelector(".tiltStyle3"), {
            max: 25,
            speed: 400
        });
    }, [])
    
    return (
        <>
            <div className={`d-flex justify-content-center flex-column ${classes.container}`}>
                <div className='pt-5 d-flex flex-column align-items-center w-75 mx-auto'>
                    <p style={{color:"white",fontFamily:'poppins',fontWeight:600,fontSize:40}}>Flexible Plans</p>
                    <p style={{fontSize:22,textAlign:'center',color:'white',opacity:.8}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
                <div className='w-100 mx-auto d-flex align-items-center justify-content-center p-5'>
                    <div style={{ height: '600px', width: "400px", borderRadius: 20 }} className={`tiltStyle1 ${classes.subsPlans} mx-4 d-flex flex-column align-items-center pt-5`}>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>Basic</p>
                        <p className='d-flex'>
                            <span style={{color:'white',paddingTop:25,fontSize:30,paddingRight:7}}>$</span>
                            <span>
                                <span style={{ color: 'white', fontSize: 100, fontFamily: 'poppins' }}>99</span>
                                <span style={{color:'white',fontSize:22}}>/ month</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-center' style={{color:'white',fontSize:20,opacity:.7}}><RemoveIcon/>&nbsp;&nbsp;Plans&nbsp;&nbsp;<RemoveIcon/></p>
                        <p style={{color:'white',fontSize:21}}>Free E-mail Account</p>
                        <p style={{color:'white',fontSize:21}}>2 User Account</p>
                        <p style={{color:'white',fontSize:21}}>Download 30 image per month</p>
                        <p style={{color:'white',fontSize:21}}>Email Support</p>
                        <p style={{color:'white',fontSize:21}}>24/7 Customer Support</p>
                    </div>
                    <div style={{ height: '650px', width: "400px", borderRadius: 20 }} className={`tiltStyle2 ${classes.subsPlans} mx-4 d-flex flex-column align-items-center pt-5`}>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>Premium</p>
                        <p className='d-flex'>
                            <span style={{color:'white',paddingTop:25,fontSize:30,paddingRight:7}}>$</span>
                            <span>
                                <span style={{ color: 'white', fontSize: 100, fontFamily: 'poppins' }}>99</span>
                                <span style={{color:'white',fontSize:22}}>/ month</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-center' style={{color:'white',fontSize:20,opacity:.7}}><RemoveIcon/>&nbsp;&nbsp;Plans&nbsp;&nbsp;<RemoveIcon/></p>
                        <p style={{color:'white',fontSize:21}}>Free E-mail Account</p>
                        <p style={{color:'white',fontSize:21}}>2 User Account</p>
                        <p style={{color:'white',fontSize:21}}>Download 30 image per month</p>
                        <p style={{color:'white',fontSize:21}}>Email Support</p>
                        <p style={{color:'white',fontSize:21}}>24/7 Customer Support</p>
                    </div>
                    <div style={{ height: '600px', width: "400px", borderRadius: 20 }} className={`tiltStyle3 ${classes.subsPlans} mx-4 d-flex flex-column align-items-center pt-5`}>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>Business</p>
                        <p className='d-flex'>
                            <span style={{color:'white',paddingTop:25,fontSize:30,paddingRight:7}}>$</span>
                            <span>
                                <span style={{ color: 'white', fontSize: 100, fontFamily: 'poppins' }}>99</span>
                                <span style={{color:'white',fontSize:22}}>/ month</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-center' style={{color:'white',fontSize:20,opacity:.7}}><RemoveIcon/>&nbsp;&nbsp;Plans&nbsp;&nbsp;<RemoveIcon/></p>
                        <p style={{color:'white',fontSize:21}}>Free E-mail Account</p>
                        <p style={{color:'white',fontSize:21}}>2 User Account</p>
                        <p style={{color:'white',fontSize:21}}>Download 30 image per month</p>
                        <p style={{color:'white',fontSize:21}}>Email Support</p>
                        <p style={{color:'white',fontSize:21}}>24/7 Customer Support</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Plans };