import React from 'react';
import { Parallax } from 'react-parallax';
import Imgslider from './Imgslider';
import { Col, Container, Row } from 'react-bootstrap';


function Parallaximg() {
    return (
        <>
            <Parallax
                className="image"
                blur={0}
                bgImage="https://autonexa.com/wp-content/uploads/2020/12/luxury-cars.jpg"
                strength={800}
                bgImageStyle={{ height: '100%', width: '100%', objectFit: 'cover' }}
            >
                <div className="content">
                    <span className="img-text">
                        Imported Limited Driving Pleasure.
                        <img
                            src="https://i.pinimg.com/736x/2e/36/24/2e3624914df5908c0dd38935faea5c4d--luxury-car-dealers-logo-design-contest.jpg"
                            width="35"
                            height="35"
                            className="d-inline-block"
                            alt="Imports Limited Logo"
                        />
                    </span>
                </div>
            </Parallax>

            <div className="text-box text-center">
                <h2>
                    <i className="fa-solid fa-magnifying-glass">&nbsp;EXPLORE EXCLUSIVE IMPORTED CARS</i>
                </h2>
                <br />
                <div className="d-flex justify-content-evenly align-items-center row">
                    {/** Each card section */}
                    {[
                        {
                            imgSrc: "https://tse1.mm.bing.net/th?id=OIP.4rzG6t0--FQz4l41J7tAJgAAAA&pid=Api&P=0&h=180",
                            title: "Discover New Arrivals",
                            buttonText: "Browse Now"
                        },
                        {
                            imgSrc: "https://w0.peakpx.com/wallpaper/703/984/HD-wallpaper-cool-car-city.jpg",
                            title: "Schedule a Test Drive",
                            buttonText: "Book Your Experience"
                        },
                        {
                            imgSrc: "https://wallpapercave.com/wp/wp9016183.jpg",
                            title: "Customize Your Dream Car",
                            buttonText: "Configure & Price"
                        }
                    ].map((item, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div className="image-container">
                                <img 
                                    src={item.imgSrc} 
                                    alt={item.title} 
                                    className="car-image img-fluid"
                                />
                            </div>
                            <h4 className="mt-3">{item.title}</h4>
                            <button type="button" className="btn btn-primary rounded-1 fw-bolder">{item.buttonText}</button>
                        </div>
                    ))}
                </div>
            </div>

            <Imgslider />
            
            <Parallax
                className="image"
                blur={0}
                bgImage="https://wallpapercave.com/wp/wp8988270.jpg"
                strength={800}
                bgImageStyle={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />

            <Container>
                <Row className='my-3 py-1'>
                    <Col md={6}>
                        <img 
                            src="https://wallpaperaccess.com/full/4297247.jpg" 
                            alt="Luxury Electric Car" 
                            className='img-fluid' 
                        />
                    </Col>
                    <Col md={6} className='py-5'>
                        <h6 className='fw-bold'>LUXURY ELECTRIFIED</h6>
                        <h1 className='display-4'>EXPERIENCE THE FUTURE OF DRIVING</h1>
                        <p>Unleash pure luxury with 100% electric, imported cars. Discover a new level of driving experience and exclusivity.</p>
                        <button type="button" className="btn btn-primary rounded-1 fw-bolder">Explore More</button>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='my-3 py-1'>
                    <Col md={6} className='py-5'>
                        <h6 className='fw-bold'>LUXURY FINANCIAL SERVICES</h6>
                        <h1 className='display-4'>Exclusive Offers for You</h1>
                        <p>Take advantage of bespoke financial services for our range of imported luxury cars. Tailored just for you.</p>
                        <button type="button" className="btn btn-primary rounded-1 fw-bolder">Learn More</button>
                    </Col>
                    <Col md={6}>
                        <img 
                            src="https://wallpapercave.com/wp/wp1926464.jpg" 
                            alt="Luxury Cars Offers" 
                            className='img-fluid' 
                        />
                    </Col>
                </Row>
            </Container>

            <Parallax
                className="image"
                blur={0}
                bgImage="https://wallpapers.com/images/hd/4k-laptop-car-mansion-luxury-cars-bd3dmymq9p6u5qlz.jpg"
                strength={800}
                bgImageStyle={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
        </>
    );
}

export default Parallaximg;

