import React from 'react'
import { Button, Card, Nav, Row, Tab } from 'react-bootstrap'
import { Link } from "react-router-dom";
import CONSTANTS from '../../utils/constants';

const SoftwareServices = () => {
    return (
        <div className='services_Main'>
            <div className='service_us_image'>
                <div className=' text-center text-light'>
                    <h1>{CONSTANTS.SERVICE_DATA.SOFTWARE.Slider_Heading}</h1>
                    <p>{CONSTANTS.SERVICE_DATA.SOFTWARE.Slider_Heading_Details}</p>
                </div>
            </div>
            <div className='container'>
                <div className='text-center mt-4'>
                    <h1 className='p-0 m-0'>{CONSTANTS.SERVICE_DATA.SOFTWARE.PART_1.Heading}</h1>
                    <span className='heading_border'></span>
                    <p className='m-0 text-muted'>{CONSTANTS.SERVICE_DATA.SOFTWARE.PART_1.Heading_Details}</p>
                </div>
                <div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className='d-flex'>
                            <Nav variant="pills" className="flex-row justify-content-center">
                                {
                                    CONSTANTS.SERVICE_DATA.SOFTWARE.PART_2.map((data) => {
                                        return (
                                            <Nav.Item className='m-2 cur_pointer'>
                                                <Nav.Link eventKey={data.Id}>{data.Name}</Nav.Link>
                                            </Nav.Item>
                                        )
                                    })
                                }
                            </Nav>
                        </Row>
                        <Row>
                            <Tab.Content className="">
                                {
                                    CONSTANTS.SERVICE_DATA.SOFTWARE.PART_2.map((data) => {
                                        return (
                                            <Tab.Pane eventKey={data.Id}>
                                                <div className='row'>
                                                    {
                                                        data.SEC_DATA.map((e) => {
                                                            return (

                                                                <div className='col-12 col-md-6 col-lg-4'>
                                                                    <Card data-aos="zoom-in" data-aos-duration='700' className='main_service_card service_card py-4 m-3'>
                                                                        <Card.Img variant="top" src={e.image} className='card_img' />
                                                                        <Card.Body>
                                                                            <Card.Title>{e.name}</Card.Title>
                                                                            <div>
                                                                                <Link to={e.path} className="primary_btn_service">More</Link>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </div>
                                                            )
                                                        })}
                                                </div>
                                            </Tab.Pane>
                                        )
                                    })
                                }
                            </Tab.Content>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

export default SoftwareServices