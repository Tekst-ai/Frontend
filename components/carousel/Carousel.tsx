import type { NextPage } from 'next';
import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Transition } from '../../variables';

import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';
import Carousel3 from './Carousel3';
import Carousel4 from './Carousel4';
import Carousel5 from './Carousel5';

const slides = [<Carousel1 key="carousel1"/>, <Carousel2 key="carousel2"/>, <Carousel3 key="carousel3"/>, <Carousel4 key="carousel4"/>, <Carousel5 key="carousel5"/>];
const delay = 5000;

const Slideshow = styled.div`
    overflow: hidden;
`

const SlideshowSlider = styled.div`
    white-space: nowrap;
    transition: ${Transition.superSlow};
`

const Carousel: NextPage = () => {
    const [carouselItem, setCarouselItem] = useState(slides[0]);

    // useEffect(() => {
    useEffect(() => {
        let timer = setTimeout(
            () => {
                let firstSlide = slides[0];
                slides.shift()
                slides.push(firstSlide)
                setCarouselItem(slides[0])
            },
            delay
        );
        return () => {
            clearTimeout(timer);
        }
    }, [carouselItem])
        // setTimeout(
        //     () =>
        //     // setIndex((prevIndex) =>
        //     //     prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        //     // ),
        //     delay
        // );

        // const firstSlide = slides[0];
        // const lastSlide = slides[slides.length - 1];
        // slides.shift();
        // slides.push(firstSlide);
        // console.log(slides);

    //     return () => {};
    // }, [index]);

    return (
        <Slideshow key="sliderContainer">
            <SlideshowSlider key="slider">
                {slides[0]}
            </SlideshowSlider>
        </Slideshow>
    )
}

export default Carousel