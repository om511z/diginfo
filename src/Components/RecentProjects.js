import React from 'react';
import '../Assets/Css/RecentProjects.css';
import { makeStyles } from '@material-ui/core';




const useStyle = makeStyles({
    project: {
        '&:hover': {
            background: "black",
            opacity: .7,
            transition: '0.6s 0.3s'
        }
    }
})


function RecentProjects() {
    const classes = useStyle();
    return (
        <>
            <div className='pb-5'>
                <div className={`d-flex flex-column align-items-center w-75 py-5 mx-auto`}>
                    <p style={{ fontSize: 30, fontFamily: 'Comfortaa', cursor: 'pointer' }}>
                        Our Projects
                    </p>
                    <p style={{ fontWeight: 500, fontSize: 35, fontFamily: 'Comfortaa', textAlign: 'center', opacity: .7 }}>
                        What We deliver Describes <span style={{ color: '#b4ba06' }}>Digitech</span> <br />Let's build some <span style={{ color: "#b4ba06" }}>Awesomness</span>&nbsp;
                        and make Ur Business With Us.
                    </p>
                </div>
                <div>
                    <ul className="grid">
                        <li className={classes.project}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/wvfrkayr0mg-christelle-bourgeois-776x1063.jpg" alt="" className='img' />
                            <span className="description">Dearest Diary</span>

                        </li>
                        <li className={classes.project}>

                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fbanijhrol4-annie-spratt-776x951.jpg" alt="" className='img' />

                            <span className="description">Window Sill?</span>
                        </li>
                        <li className={classes.project}>

                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/2rm8p0rkxiw-marius-masalar-776x582.jpg" alt="" className='img' />
                            <span className="description">Listen Me</span>

                        </li>
                        <li className={classes.project}>

                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/71nlan-2ya-andrew-neel-2-776x620.jpg" alt="" className='img' />
                            <span className="description">Travel Often</span>

                        </li>
                        <li className={classes.project}>

                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/hdyo6rr3kqk-scott-webb-1172x780.jpg" alt="" className='img' />
                            <span className="description">Another Plant?</span>

                        </li>
                        <li className={classes.project}>

                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fvazbu6zae-andrew-neel-776x517.jpg" alt="" className='img' />
                            <span className="description">On Wave</span>

                        </li>
                        <li className={classes.project}>

                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/typewriter-1-776x968.jpg" alt="" className='img' />
                            <span className="description">Great Gatsby</span>

                        </li>
                        <li className={classes.project}>

                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/xohlruw4k8-christelle-bourgeois-776x758.jpg" alt="" className='img' />
                            <span className="description">In Sun</span>

                        </li>
                        <li className={classes.project}>

                            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/2rm8p0rkxiw-marius-masalar-776x582.jpg' alt="" className='img' />
                            <p className="description btn text-center" style={{ fontSize: 38, width: 300, color: 'black', marginLeft: 100 }}>
                                Learn More ....
                            </p>

                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export { RecentProjects };