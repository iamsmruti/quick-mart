import React, { useEffect, useState } from "react";
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

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        console.log(windowDimensions)

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box sx={{ width: '100vw', background: 'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(9,9,121,0) 17%, rgba(255,255,255,1) 100%)', zIndex: 1, overflow: 'hidden' }}>
            <Slider {...settings}>
                {windowDimensions.width > 425 ? <Box>
                    <img style={{ width: '100%', objectFit: 'cover' }} src={img1} />
                </Box> : <Box sx={{width: '100%', overflow: 'hidden'}}>
                    <img style={{ height: '400px', objectFit: 'cover', width: '1000px', objectPosition: '-250px 0'}} src={img1} />
                </Box>}

                {windowDimensions.width > 425 ? <Box>
                    <img style={{ width: '100%', objectFit: 'cover' }} src={img2} />
                </Box> : <Box sx={{width: '100%', overflow: 'hidden'}}>
                    <img style={{ height: '400px', objectFit: 'cover', width: '1000px', objectPosition: '-250px 0'}} src={img2} />
                </Box>}

                {windowDimensions.width > 425 ? <Box>
                    <img style={{ width: '100%', objectFit: 'cover' }} src={img3} />
                </Box> : <Box sx={{width: '100%', overflow: 'hidden'}}>
                    <img style={{ height: '400px', objectFit: 'cover', width: '1000px', objectPosition: '-250px 0'}} src={img3} />
                </Box>}

                {windowDimensions.width > 425 ? <Box>
                    <img style={{ width: '100%', objectFit: 'cover' }} src={img4} />
                </Box> : <Box sx={{width: '100%', overflow: 'hidden'}}>
                    <img style={{ height: '400px', objectFit: 'cover', width: '1000px', objectPosition: '-250px 0'}} src={img4} />
                </Box>}
            </Slider>
        </Box>
    )
}

export default Caraousel
