import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core';
import '../Assets/Css/Testimonial.css';
import BlockQuote from '../Assets/Image/BlockQuote.png';
import RightBlockQuote from '../Assets/Image/RightBlockQuote.png';

const useStyle = makeStyles((theme) => ({
    dots: {
        bottom: 7,
        "& li.slick-active button::before": {
            color: "rebeccapurple",

            fontSize: theme.typography.pxToRem(20),
        },
        "& li": {
            "& button::before": {
                fontSize: theme.typography.pxToRem(10),
                color: "rebeccapurple"

            },
        }
    }
}))

function CommonCarousel(props) {
    const classes = useStyle();
    var settings = {
        dots: props.dots,
        infinite: true,
        speed: 1000,
        slidesToShow: props.slideToShow,
        slidesToScroll: 1,
        dotsClass: `slick-dots ${classes.dots}`,
        focusOnSelect: true,
        touchMove: true,
        swipe: true,
        arrows: props.arrow,
        autoplay: props.autoplay
    };

    return (
        <>
            <Slider {...settings}>
                {
                    props.data.map((item, index) => {
                        return (
                            <div className="pb-4 w-50 d-flex flex-column justify-content-center align-items-center mx-auto" key={index}>
                                <div className='badge'>
                                    <p className='text'>'Shubham !</p>
                                </div>
                                <div className="pt-5 pb-2">
                                    <div>
                                        <img src={BlockQuote} alt="BlockQuote" style={{ marginLeft: -16 }} />
                                    </div>
                                    <p className="text-center" style={{fontSize: 19, fontFamily: 'lemonada', lineHeight: 1.5 }}>
                                        {item.statement}
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <img src={RightBlockQuote} alt='RightBlockQuote' style={{ marginRight: -25, marginTop: -35 }} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    );
}

export { CommonCarousel };