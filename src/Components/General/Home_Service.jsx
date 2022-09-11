import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import CONSTANTS from '../../utils/constants'
const Home_Service = () => {

   
    return (
        <div className='container pt-5'>
            <div className='d-flex flex-column align-items-center text-center'>
                <h2>{CONSTANTS.HOME_PAGE.PART_1.Heading}</h2>
                <span className='heading_border'></span>
                <p className='pt-3 text-center'>
                    {CONSTANTS.HOME_PAGE.PART_1.Heading_Details}
                </p>
            </div>
            <div className='row'>
                {CONSTANTS.HOME_PAGE.PART_1.Service_Data.map((e) => {
                    return (
                        <div data-aos="zoom-in" data-aos-duration='700' className='d-flex col-12 col-md-6 col-lg-3 px-0'>
                            <Card className='service_card pt-4 m-2'>
                                <Card.Img variant="top" src={e.image} className='card_img' />
                                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                                    <>
                                        <Card.Title>{e.heading}</Card.Title>
                                        <Card.Text>
                                            {e.details}
                                        </Card.Text>
                                    </>
                                    <Button className='primary_btn' >More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home_Service