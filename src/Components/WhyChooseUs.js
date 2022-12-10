import React from 'react';
import { makeStyles } from '@material-ui/core';
import whyChooseUs from '../Assets/Image/whyChooseUs.svg';

const useStyle = makeStyles({
    container: {
        background: `url(${whyChooseUs})`,
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'all 0.7s ease-in',
        height: '830px'
    },
    whyUsOption1: {
        '&:hover': {
            background: 'linear-gradient(140deg, rgba(207, 171, 66) 0%,rgba(28, 28, 22) 50%, rgba(207, 171, 66) 100%)'
        }
    },
    whyUsOption2: {
        '&:hover': {
            background: 'linear-gradient(140deg, rgba(137, 19, 156) 0%,rgba(28, 28, 22) 50%, rgba(137, 19, 156) 100%)'
        }
    },
    whyUsOption3: {
        '&:hover': {
            background: 'linear-gradient(140deg, rgba(47, 196, 72) 0%,rgba(28, 28, 22) 50%, rgba(47, 196, 72) 100%)'
        }
    },
    whyUsOption4: {
        '&:hover': {
            background: 'linear-gradient(140deg, rgba(43, 156, 161) 0%,rgba(28, 28, 22) 50%, rgba(43, 156, 161) 100%)'
        }
    }
});

function WhyChooseUs() {
    const classes = useStyle();
    return (
        <>
            <div className={classes.container}>
                <div className='w-75 mx-auto py-5'>
                    <p style={{ textAlign: 'center', fontSize: 45, fontWeight: 700, fontFamily: 'poppins' }}>
                        Why Choose Us ?
                    </p>
                    <p style={{ textAlign: 'center', fontSize: 25, opacity: .7 }}>
                        We are a software development and consulting company that creates and transforms products and enterprises to drive growth.
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className='d-flex w-75 mx-auto' style={{ borderRadius: "25px" }}>
                    <div className={`${classes.whyUsOption1} py-4`} style={{
                        borderRadius: "25px 0px 0px 25px", cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 70px',
                        backgroundColor: "#2c2c31",
                        height: 330,
                        width: 400
                    }}>
                        <p style={{ color: "#f5e905", textAlign: 'center', fontFamily: 'poppins', fontWeight:400, fontSize: 30 }}>Content Depth</p>
                        <p style={{ color: "white", textAlign: 'center', fontFamily: 'poppins', fontSize: 21 }} className='px-4 pt-2 pb-5'>Bootcamp level training—on demand. Train on your own time for as little as $39 a month.</p>
                    </div>
                    <div className={`${classes.whyUsOption2} py-4`} style={{
                        cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 70px',
                        backgroundColor: "#2c2c31",
                        height: 330,
                        width: 400
                    }}>
                        <p style={{ color: "#8132a8", textAlign: 'center', fontFamily: 'poppins', fontWeight: 400, fontSize: 30 }}>Expert Instructors</p>
                        <p style={{ color: "white", textAlign: 'center', fontFamily: 'poppins', fontSize: 21 }} className='px-4 pt-2 pb-5'>Purpose built curriculum curated to the needs of teams and enterprises. Learn the skills that will drive innovation.</p>
                    </div>
                    <div className={`${classes.whyUsOption3} py-4`} style={{
                        cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 70px',
                        backgroundColor: "#2c2c31",
                        height: 330,
                        width: 400
                    }}>
                        <p style={{ color: "#1e9e42", textAlign: 'center', fontFamily: 'poppins', fontWeight: 400, fontSize: 30 }}>Hands-On</p>
                        <p style={{ color: "white", textAlign: 'center', fontFamily: 'poppins', fontSize: 21 }} className='px-4 pt-2 pb-5'>You can't innovate without doing. Each of our learning paths contain real world, hands-on lab scenarios so you can practice what you've learned.</p>
                    </div>
                    <div className={`${classes.whyUsOption4} py-4 whyUsOptionHover`} style={{
                        borderRadius: "0px 25px 25px 0px", cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 70px',
                        backgroundColor: "#2c2c31",
                        height: 330,
                        width: 400
                    }}>
                        <p style={{ color: "#137aba", textAlign: 'center', fontFamily: 'poppins', fontWeight: 400, fontSize: 30 }}>Career Oriented</p>
                        <p style={{ color: "white", textAlign: 'center', fontFamily: 'poppins', fontSize: 21 }} className='px-4 pt-2 pb-5'>Certifications and Training focus on roles—not technology—so you and your teams can scale to the roles necessary to drive your organization forward.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { WhyChooseUs };