import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import PlansBg from '../Assets/Image/Plans.jpeg';
import Service from '../Assets/Image/servicesBg.jpg'
import RemoveIcon from '@mui/icons-material/Remove';
import VanillaTilt from 'vanilla-tilt';
import '../Assets/Css/Industry.css'
import Tourism from '../Assets/Image/Tourism.png'
import Broker from '../Assets/Image/Broker.png'
import Sports from '../Assets/Image/Sports.png'
import SDE from '../Assets/Image/SDE.jpeg'
import Health from '../Assets/Image/Health.png'
import IT from '../Assets/Image/IT.png'
import Restaurant from '../Assets/Image/Restaurant.png'
import Housing from '../Assets/Image/Housing.png'
import Travel from '../Assets/Image/Travel.png'
import Ecommerce from '../Assets/Image/Ecommerce.png'
import Electric from '../Assets/Image/Electric.png'


const useStyle = makeStyles({
    container: {
        background: `url(${Service})`,
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'all 0.7s ease-in',
        backgroundAttachment: 'fixed',
        height: '1000px'
    },
    subsPlans: {
        background: 'linear-gradient(#fceabb,#f8b500)',
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)'
    }
});

function Industry() {
    const classes = useStyle();
    useEffect(() => {
        VanillaTilt.init(document.querySelector(".industryStyle1"), {
            max: 25,
            speed: 400
        });
        VanillaTilt.init(document.querySelector(".industryStyle2"), {
            max: 25,
            speed: 400
        });
        VanillaTilt.init(document.querySelector(".industryStyle3"), {
            max: 25,
            speed: 400
        });
    }, [])
    
    return (
        <>
            <div className={`d-flex justify-content-center flex-column ${classes.container}`}>
                <div className='pt-5 d-flex flex-column align-items-center w-75 mx-auto'>
                    <p style={{color:"orange",fontFamily:'poppins',fontWeight:600,fontSize:60}}>Industry we serve</p>
                    <p style={{fontSize:22,textAlign:'center',color:'black',opacity:.8}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
                <div className='w-100 mx-auto d-flex align-items-center justify-content-center p-5'>
                 
                    <div style={{ height: '650px', width: "350px", borderRadius: 20,color:"orange" }} className={`industryStyle1 ${classes.subsPlans} mx-4 d-flex flex-column align-items-center pt-5`}>
                                 <div className='img' style={{ width:'fit-content', height:'fit-content'}}>
                                    <img src={Tourism}  style={{objectFit:'cover',height:'130px',width:'135px'}} />
                                </div>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 ,cursor:'pointer', transition: 'all 0.3s ease'}}>Tourism</p>

                        <br></br>
                      
                        <div className='img' style={{ width:'fit-content', height:'fit-content'}}>
                                    <img src={Electric}  style={{objectFit:'cover',height:'130px',width:'135px'}} />
                                </div>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>Electric</p>

                        <br></br>

                        <div className='img' style={{ width:'fit-content', height:'fit-content'}}>
                                    <img src={Health}  style={{objectFit:'cover',height:'130px',width:'135px'}}  />
                                </div>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>Health</p>
                       
                       
                       
                       
                    </div>
                    <div style={{ height: '650px', width: "350px", borderRadius: 20 }} className={`industryStyle2 ${classes.subsPlans} mx-4 d-flex flex-column align-items-center pt-5`}>
                                 <div className='img' style={{ width:'fit-content', height:'fit-content' }}>
                                    <img src={Restaurant}  style={{objectFit:'cover',height:'130px',width:'135px'}} />
                                </div>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>Restaurant</p>

                        <br></br>

                        <div className='img' style={{ width:'fit-content', height:'fit-content' }}>
                                    <img src={IT}  style={{objectFit:'cover',height:'130px',width:'135px'}} />
                                </div>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>IT</p>

                        <br></br>

                        <div className='img' style={{ width:'fit-content', height:'fit-content' }}>
                                    <img src={Broker}  style={{objectFit:'cover',height:'130px',width:'135px'}} />
                                </div>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>Broker</p>
                      
                    </div>
                    <div style={{ height: '650px', width: "350px", borderRadius: 20 }} className={`industryStyle3 ${classes.subsPlans} mx-4 d-flex flex-column align-items-center pt-5`}>
                                 <div className='img' style={{ width:'fit-content', height:'fit-content' }}>
                                    <img src={Housing}  style={{objectFit:'cover',height:'130px',width:'180px'}} />
                                </div>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>Housing</p>
                        <br></br>

                        <div className='img' style={{ width:'fit-content', height:'fit-content' }}>
                                    <img src={Ecommerce}  style={{objectFit:'cover',height:'130px',width:'135px'}} />
                                </div>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>Ecommerce</p>

                        <br></br>

                        <div className='img' style={{ width:'fit-content', height:'fit-content' }}>
                                    <img src={Sports}  style={{objectFit:'cover',height:'130px',width:'135px'}} />
                                </div>
                        <p style={{ color: 'white', fontFamily: 'Comfortaa', fontSize: 20 }}>Sports</p>
                       
                    </div>
                    
                
                </div>
            </div>
        </>
    )
}

export { Industry };