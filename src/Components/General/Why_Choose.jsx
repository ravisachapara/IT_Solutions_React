import React from 'react'
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../utils/constants';

const Why_Choose = () => {
    const frontend = [
        {
            image: "/images/language-images/Wordpress.png",
            name: "Wordpress",
            path: "/services/wordpress",
        },
        {
            image: "/images/language-images/ajax.jpg",
            name: "Ajax",
            path: "/services/ajax",
        },
        {
            image: "/images/language-images/bootstrap.png",
            name: "Bootstrap",
            path: "/services/bootstrap"
        },
        {
            image: "/images/language-images/React.png",
            name: "React",
            path: "/services/react"
        },
        {
            image: "/images/language-images/vue.png",
            name: "Vue JS",
            path: "/services/vue"
        },
        {
            image: "/images/language-images/anguler.png",
            name: "Angular",
            path: "/services/anguler"
        }
    ]
    const backend = [
        {
            image: "/images/language-images/NET.png",
            name: ".NET",
            path: "/services/net"
        },
        {
            image: "/images/language-images/mysql.png",
            name: "MY SQL",
            path: "/services/mysql"
        },
        {
            image: "/images/language-images/Wordpress.png",
            name: "Wordpress",
            path: "/services/wordpress"
        },
        {
            image: "/images/language-images/mongodb.png",
            name: "Mongo DB",
            path: "/services/mongodb"
        },
        {
            image: "/images/language-images/mssql.svg",
            name: "MS SQL",
            path: "/services/mssql"
        }
    ]
    const mobility = [
        {
            image: "/images/language-images/ios.png",
            name: "iOS",
            path: "/services/iOS"
        },
        {
            image: "/images/language-images/flutter.png",
            name: "Flutter",
            path: "/services/Flutter"
        },
        {
            image: "/images/language-images/android.png",
            name: "Android",
            path: "/services/Android"
        }
    ]

    let options = {
        loop: false,
        margin: 10,
        // nav:true,
        // navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    }

    return (
        <div>
            <div className='why_choose'>
                <div className='container mt-5'>
                    <div className='py-3'>
                        <div className='text-center'>
                            <h1 className='p-0 m-0'>{CONSTANTS.HOME_PAGE.PART_3.Heading}</h1>
                            <span className='heading_border'></span>
                            <p className='pb-4'>{CONSTANTS.HOME_PAGE.PART_3.Heading_Details}</p>
                        </div>
                        <div className='row'>
                            {
                                CONSTANTS.HOME_PAGE.PART_3.Service_Data.map((data) => {
                                    return (
                                        <div data-aos="zoom-in" data-aos-duration='700' className='col-12 col-md-6 col-lg-4'>
                                            <Card className='why_choose_card text-start m-3 cur_pointer'>
                                                <Card.Body className='p-5'>
                                                    <img src={data.Img}></img>
                                                    <Card.Title>{data.Name}</Card.Title>
                                                    <Card.Text>
                                                        {data.Details}
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
                {/* New Section */}
                <div className='container choose_tab'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className='d-flex align-items-center'>
                            <Col lg={4} className="order-2 order-lg-1">
                                <Nav variant="pills" className="flex-column">
                                    {
                                        CONSTANTS.HOME_PAGE.PART_4.SEC_DATA.map((data) => {
                                            return (
                                                <Nav.Item data-aos="fade-up" data-aos-duration='700'>
                                                    <Nav.Link eventKey={data.Id}>
                                                        <h3>{data.Name}</h3>
                                                        <p>{data.Details}</p>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            )
                                        })
                                    }

                                </Nav>
                            </Col>
                            <Col lg={8} className="order-1 order-lg-1">
                                <Tab.Content>
                                    {
                                        CONSTANTS.HOME_PAGE.PART_4.SEC_DATA.map((data) => {
                                            return (
                                                <Tab.Pane eventKey={data.Id}>
                                                    <img src={data.Img} width={'100%'}></img>
                                                </Tab.Pane>
                                            )
                                        })
                                    }
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
                {/* New Section */}
                {/* <div className='container'>
                    <div className='text-center mt-4'>
                        <h1 className='p-0 m-0'>Trusted Software Outsourcing Company and Software Development Services Company</h1>
                        <span className='heading_border'></span>
                        <p className='pb-4 text-muted'>We are a highly transparent and reliable pool of expertise capable of meeting a wide range of IT-related demands and criteria. The brilliant minds working together have mastered the art of developing customer-specific job deliverables that create profitable end results! We take great delight in the numerous joyful comments we’ve received after serving numerous companies and clients who give happy testimonials to appreciate our work.</p>
                    </div>
                    <div className='text-muted'>
                        <p>We have a various service portfolio that includes the following:</p>
                        <ol type="1">
                            <li>Frontend Development of web in all the latest and popular best technologies like Node JS, React JS, Angular JS, Bootstrap, and Progressive Web App Development.</li>
                            <li>Mobile Application Development in latest technologies like  Xamarin, iOS, React Native, iOS Native, Android, Flutter.</li>
                            <li>Software and Web Development in PHP,.NET, C#, Java J2EE, Asp.NET, and MVC. </li>
                            <li>As a Software Outsourcing Company in India, We have Dedicated software developers in .NET and PHP.</li>
                        </ol>
                    </div>
                </div> */}
                {/* New Section */}
                <div className='container'>
                    <div className='text-center mt-4'>
                        <h1 className='p-0 m-0'>{CONSTANTS.HOME_PAGE.PART_5.Heading}</h1>
                        <span className='heading_border'></span>
                        <p className='m-0 text-muted'>{CONSTANTS.HOME_PAGE.PART_5.Heading_Details}</p>
                    </div>
                    <div>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row className='d-flex'>
                                <Nav variant="pills" className="flex-row justify-content-center">
                                    {
                                        CONSTANTS.HOME_PAGE.PART_5.SEC_DATA.map((data) => {
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
                                        CONSTANTS.HOME_PAGE.PART_5.SEC_DATA.map((data) => {
                                            return (
                                                <Tab.Pane eventKey={data.Id}>
                                                    <OwlCarousel className='owl-theme' {...options}>
                                                        {data.Main_Data.map((e) => {
                                                            return (
                                                                <Link to={e.path} className='item'>
                                                                    <img className='' src={e.image} />
                                                                </Link>
                                                            )
                                                        })}
                                                    </OwlCarousel>
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
        </div>
    )
}

export default Why_Choose