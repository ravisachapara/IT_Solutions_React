import { Card } from 'react-bootstrap'
import React from 'react'
import CountUp from 'react-countup';
import CONSTANTS from '../../utils/constants';

const Completed_Project = () => {
    return (
        <div className='completed_project'>
            <div className='container mt-5'>
                <div className=' py-3'>
                    <div className='text-center text-light'>
                        <h1 className='py-4'>{CONSTANTS.HOME_PAGE.PART_2.Heading}</h1>
                        <p className='pb-4'>{CONSTANTS.HOME_PAGE.PART_2.Heading_Details}</p>
                    </div>
                    <div className='row'>
                        {
                            CONSTANTS.HOME_PAGE.PART_2.Service_Data.map((data) => {
                                return (
                                    <div data-aos="flip-left" data-aos-duration='700' className='col-12 col-md-6 col-lg-4'>
                                        <Card className='com_pro_card text-start m-3 cur_pointer'>
                                            <Card.Body className='p-5'>
                                                <h1><CountUp end={data.Count} duration={3} /></h1>
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
        </div>
    )
}

export default Completed_Project