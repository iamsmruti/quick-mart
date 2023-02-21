import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box } from "@mui/system";

import img1 from '../assets/caraousel/slider1.jpg'
import img2 from '../assets/caraousel/slider2.jpg'
import img3 from '../assets/caraousel/slider3.jpg'
import img4 from '../assets/caraousel/slider4.jpg'

const Caraousel = () => {
    var settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };

    return (
        <Box sx={{ width: '100%', background: 'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(9,9,121,0) 17%, rgba(255,255,255,1) 100%)', zIndex: 1, mb: -2 }}>
            <Slider {...settings}>
                <div>
                    <img style={{ width: '100%' }} src={img1} />
                </div>
                <div>
                    <img style={{ width: '100%' }} src={img2} />
                </div>
                <div>
                    <img style={{ width: '100%' }} src={img3} />
                </div>
                <div>
                    <img style={{ width: '100%' }} src={img4} />
                </div>
            </Slider>
        </Box>
    )
}

export default Caraousel
