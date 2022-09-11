import React from 'react'
import { Button, Card } from 'react-bootstrap'
import CONSTANTS from '../../utils/constants'

const About_us = () => {
      return (
        <div className='about_us'>
            <div className='about_us_image'>
                <div className=' text-center text-light'>
                    <h1>{CONSTANTS.ABOUT_US.Slider_Heading}</h1>
                    <p>{CONSTANTS.ABOUT_US.Slider_Heading_Details}</p>
                </div>
            </div>
            {/* <div className='founder_data my-3'>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center text-center'>
                        <h2 className='second_heading'>Founders</h2>
                    </div>
                    <div className='row'>
                        <div className='d-flex justify-content-center my-4'>
                            <Card data-aos="zoom-in" data-aos-duration='700' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/testimonials-1.jpg" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Hardik Jasoliya</Card.Title>
                                    <h5 className='text-muted mb-3'>Founder</h5>
                                    <a className="linkedin_icon">
                                        <img src='/images/linkedin.png' />
                                    </a>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='our_vision my-3'>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center text-center'>
                        <h1 className='second_heading'>{CONSTANTS.ABOUT_US.PART_1.Heading}</h1>
                        <p className='text-muted'>{CONSTANTS.ABOUT_US.PART_1.Heading_Details}</p>
                    </div>
                </div>
            </div>
            
            {/* Our Mission */}
            <div className='our_mission my-5'>
                <div className='container'>
                    <div className='row'>
                        <div data-aos="fade-down" data-aos-duration='700' className='col-12 col-md-6'>
                            <img src='/images/mission.jpg' className='w-100'></img>
                        </div>
                        <div data-aos="fade-down" data-aos-duration='700' className='col-12 col-md-6'>
                            <div className='our_mission_details d-flex flex-column align-items-start'>
                                <h1 className='second_heading'>{CONSTANTS.ABOUT_US.PART_2.Heading}</h1>
                                <p className='text-muted'>{CONSTANTS.ABOUT_US.PART_2.Heading_Details}</p>
                                <ul className='text-muted'>
                                    {
                                        CONSTANTS.ABOUT_US.PART_2.Ans_LI.map((data) => {
                                            return (
                                                <li>{data}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='our_vision my-3'>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center text-center'>
                        <h1 className='second_heading'>{CONSTANTS.ABOUT_US.PART_3.Heading}</h1>
                        <p className='text-muted'>{CONSTANTS.ABOUT_US.PART_3.Heading_Details}</p>
                    </div>
                    <div className='row'>
                        {
                            CONSTANTS.ABOUT_US.PART_3.SEC_DATA.map((e) => {
                                return (
                                    <div data-aos="zoom-in" data-aos-duration='700' className='col-12 col-md-6 col-lg-4'>
                                        <Card className='py-4 my-4 our_vision_card'>
                                            <Card.Img variant="top" src={e.img} className='card_img mx-3' />
                                            <Card.Body>
                                                <Card.Title>{e.title}</Card.Title>
                                                <Card.Text className='text-muted'>
                                                    {e.details}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_us