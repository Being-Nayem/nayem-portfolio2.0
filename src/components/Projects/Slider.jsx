import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import mock1 from '../../img/mock1.png';
import mock2 from '../../img/mock2.png';
import mock3 from '../../img/mock3.png';

let data = [
    {
        img :  mock1,
        disc : "Logeachi.com (Team Project)",
        liveServer : "https://beingnayem.pythonanywhere.com/",
        github : "https://github.com/Being-Nayem/logeachi.com"
    },
    {
        img : mock2,
        disc : "Restaurant Billing System",
        liveServer : "/",
        github : "https://github.com/Being-Nayem/Restaurant-Billing-System"
    },
    {
        img : mock3,
        disc : "Cinema Hall Seat Booking",
        liveServer : "/",
        github : "https://github.com/Being-Nayem/Cinema-Hall-Seat-Booking-System"
    },
    {
        img : mock3,
        disc : "Task Manager",
        liveServer : "/",
        github : "https://github.com/Being-Nayem/-Libary-Management"
    },
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`