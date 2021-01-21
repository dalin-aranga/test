
import { Navbar, Carousel } from 'react-bootstrap';
import React, { Component } from 'react'
import Footer from './Footer'
import icon from './../img/cake01.jpg';
import icon1 from './../img/cake02.jpg';
import icon2 from './../img/cake03.jpg';

export class home extends Component {
    render() {
        return (
            <div>
                <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={icon}
                    height="500"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>රසම රස කේක් අපෙන්</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={icon1}
                    height="500"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Order Your Cake</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={icon2}
                    height="500"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>ඔබේ කේක් ඇණවුම් කරන්න</h3>
                    <p>.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
           
                <Footer/>
            
            </div>
        )
    }
}

export default home
