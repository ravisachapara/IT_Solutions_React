import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import CONSTANTS from '../../utils/constants';

const HeroImage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='hero-bg-img'>
      <Carousel variant="dark" className='container'>
        <Carousel.Item>
          <div className="d-flex justify-content-between align-items-center">
            <div className='hero-slide-text p-5 text-center'>
              <h1>{CONSTANTS.SLIDER_DATA[0].Name}</h1>
              <p>{CONSTANTS.SLIDER_DATA[0].Details}</p>
            </div>
            <div className='hero-slide-img d-none d-sm-block'>
              <img
                className="d-block w-100"
                src="/images/hardware.svg"
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-between align-items-center">
            <div className='hero-slide-text p-5 text-center'>
              <h1>{CONSTANTS.SLIDER_DATA[1].Name}</h1>
              <p>{CONSTANTS.SLIDER_DATA[1].Details}</p>
            </div>
            <div className='hero-slide-img d-none d-sm-block'>
              <img
                className="d-block w-100"
                src="/images/software.png"
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HeroImage