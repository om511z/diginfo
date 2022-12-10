import React,{useState} from 'react';
import Logo from '../Assets/Image/Logo.png';
import { Button, makeStyles } from '@material-ui/core';
import '../Assets/Css/Navbar.css';
import {useNavigate,Link} from 'react-router-dom';


const useStyle = makeStyles({
    navItem: {
        color: 'white',
        opacity: .7,
        fontSize: 17,
        fontWeight: 600,
        cursor:'pointer'
       
    },
    priceBtn: {
        borderRadius: 50,
        backgroundImage: 'linear-gradient(to right, #009FFD 0%, #2A2A72 100%)',
        height: 50,
        width: 150,
        color: 'white',
        '&:hover': {
            background:'transparent',
            border:'2px solid rgba(39,70,150,255)'
        }
    }
})

function Navbar() {

   
    const classes = useStyle();
    const navigate = useNavigate();

    
    return (
        <div className='d-flex align-items-center justify-content-between px-2 pb-5 ' >
            <div className='d-flex align-items-center' onClick={()=>navigate('/')} style={{cursor:'pointer'}}>
                <img src={Logo} alt="Logo" width="165px" height="165px" />
                <p style={{ color: 'white', fontWeight: 500, fontFamily: 'poppins', fontSize: 22, paddingTop: 10, marginLeft: -30,lineHeight:1.3 }}>
                    DigiTech<br />
                    <span style={{ color: 'white', opacity: .5, fontSize: 19, fontWeight: 'lighter' }}>InfoServices</span>
                </p>
            </div>
            <div className='d-flex align-items-center justify-content-between w-50 px-5'>
                <a href='/' data-replace='Home' className={`navHoverStyle`} style={{cursor:'pointer'}}><span className={classes.navItem}>Home</span></a>
                <Link to='/about' data-replace='About' className={`navHoverStyle`} style={{cursor:'pointer'}}><span  className={classes.navItem}>About</span></Link>
                <a href='/services' data-replace='Services' className={`navHoverStyle`} style={{display:'flex',alignItems:'center',cursor:"pointer"}}>
                    <span style={{backgroundColor:"#36f54c",borderRadius:7,color:"white",padding:"3px 8px 3px 8px",fontSize:8,width:"100%"}}>NEW</span>
                    &nbsp;<span  className={classes.navItem}>Services</span>
                </a>
                <Link to='/contact' data-replace='Contact' className={`navHoverStyle`} style={{cursor:'pointer'}}><span  className={classes.navItem}>Contact</span></Link>
            </div>
            <div className='pr-5'>
                <Button variant='contained' style={{ outline: 'none' }} className={classes.priceBtn}>Pricing</Button>
            </div>
        </div>
    )
}

export { Navbar };