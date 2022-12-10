import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import Logo from '../Assets/Image/Logo.png';
import {CaretRightOutlined} from '@ant-design/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import {useNavigate} from 'react-router-dom';


const useStyle = makeStyles({
    container: {
        backgroundColor: "#15191a",
        width: "100%",
        marginTop: 40,
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        paddingTop:80
    },
    innerContainer: {
        display: "flex",
        padding: 40
    },
    innerFooter: {
        width: "100%",
        bottom: 0,
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        backgroundColor: "#fffffb"
    },
    footerText: {
        '&:hover': {
            color: "crimson",
            cursor: 'pointer',
        },
        fontFamily: "poppins"
    },
    social: {
        display: "flex",
        color: "white",
        padding: "10px 0px 0px 0px",
        alignItems: "center",
    },
    socialIcon: {
        '&:hover': {
            color: "#ee344e",
            cursor: 'pointer',
        },
        fontSize: 40
    },
    patient: {
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "5px 5px 5px 0px",
        transition: "background-position 275ms ease",
        '&:hover': {
            cursor: 'pointer',
            fontSize: 20,
            color: "#e87287"
        },
    },
    forPatient: {
        paddingLeft: 50
    },
    contact: {
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: 5,
        fontWeight: 500
    }
});
const Footer = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    return (<>
        <footer>
            <Box className={classes.container}>
                <Grid container className={classes.innerContainer}>
                    <Grid item xs={4}>
                        <img src={Logo} alt="Logo" width="165px" height="165px" style={{marginTop:-40}} />
                        <Typography style={{ color: "white", fontSize: "0.9375rem",fontWeight: 'bolder',fontFamily:'Comfortaa',marginTop:-25 }}>
                            We give Flight to your Business.
                        </Typography>
                        <Box className='mt-4'>
                        <FacebookIcon className={classes.socialIcon} style={{ padding: 5, color: '#3b5998' }} variant="filled" />&nbsp;&nbsp;&nbsp;
                            <TwitterIcon style={{ padding: 5, color: '#00acee' }} className={classes.socialIcon} variant="outlined" />&nbsp;&nbsp;&nbsp;
                            <LinkedInIcon style={{ padding: 5, color: '#0A66C2' }} className={classes.socialIcon} variant="outlined" />&nbsp;&nbsp;&nbsp;
                            <InstagramIcon style={{ padding: 5, color: "crimson" }} className={classes.socialIcon} variant="outlined" />
                        </Box>
                    </Grid>
                    <Grid item xs={4} className={classes.forPatient}>
                        <Typography style={{ fontWeight: 500, color: "white", fontSize: 20, marginBottom: 15, textTransform: "capitalize", fontFamily: "Poppins,sans-serif" }}>Services We Offer</Typography>
                        <Typography className={classes.patient}><CaretRightOutlined />&nbsp;&nbsp;<Typography style={{ fontWeight: 500 }} onClick={()=>navigate('/services')}>Websites </Typography></Typography>
                        <Typography className={classes.patient}><CaretRightOutlined />&nbsp;&nbsp;<Typography style={{ fontWeight: 500 }} onClick={()=>navigate('/services')}>Applications</Typography></Typography>
                        <Typography className={classes.patient}><CaretRightOutlined />&nbsp;&nbsp;<Typography style={{ fontWeight: 500 }} onClick={()=>navigate('/services')}>Digital Marketing</Typography></Typography>
                        <Typography className={classes.patient}><CaretRightOutlined />&nbsp;&nbsp;<Typography style={{ fontWeight: 500 }} onClick={()=>navigate('/services')}>Content Writing</Typography></Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.forPatient}>
                        <Typography style={{ fontWeight: 500, color: "white", fontSize: 20, marginBottom: 15, textTransform: "capitalize", fontFamily: "Poppins,sans-serif" }}>Contact Us</Typography>
                        <Typography className={classes.contact}>
                            <LocationOnIcon style={{ padding: "10px 10px 10px 0px", fontSize: 43 }} />3556 Beech Street, San Francisco,California, CA 94108
                        </Typography>
                        <Typography className={classes.contact}><PhoneAndroidIcon style={{ padding: "10px 10px 10px 0px", fontSize: 40 }} />+1 315 369 5943</Typography>
                        <Typography className={classes.contact}><MailIcon style={{ padding: "10px 10px 10px 0px", fontSize: 40 }} /> DigiTech@example.com</Typography>
                    </Grid>
                </Grid>
                <Box className={classes.innerFooter}>
                    <Typography style={{ padding: "15px 0px 15px 15px" }}>
                        <Typography variant='span' className={classes.footerText}>© 2022 DigiTech. All rights reserved.</Typography>
                    </Typography>
                    <Typography style={{ padding: "15px 35px 15px 15px" }}>
                        <Typography variant='span' className={classes.footerText}>Terms and Conditions</Typography>&nbsp; | &nbsp;<Typography className={classes.footerText} variant='span'>Policy</Typography>
                    </Typography>
                </Box>
            </Box>
        </footer>
    </>);
};
export { Footer };