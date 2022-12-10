import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core';
import '../Assets/Css/ServiceCarousel.css';


const useStyle = makeStyles((theme) => ({
    dots: {
        bottom: 7,
        "& li.slick-active button::before": {
            color: "#344767",

            fontSize: theme.typography.pxToRem(20),
        },
        "& li": {
            "& button::before": {
                fontSize: theme.typography.pxToRem(10),
                color: "#344767"

            },
        }
    }
}))

function ServicesCarousel(props) {
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
                            <div key={index} className='px-2 pb-5' style={{borderRadius:15}}>
                                <figure class="snip0016" style={{borderRadius:15}}>
                                    <img src={item} alt="sample41" style={{borderRadius:15}} />
                                    <figcaption>
                                        <h2>I think <span>nighttime</span> is dark</h2>
                                        <p>So you can imagine your fears with less distraction.</p>
                                        <a href="/"></a>
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    );
}

export { ServicesCarousel };