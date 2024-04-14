import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import burger from "./1.jpg";
import pizza from "./pizza.jpg";
import biryani from "./biryani.jpg"

class DemoCarousel extends Component {
    render() {
        return (
            
            <Carousel>
                <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
                <div>
                    <img src={burger} alt='burger' />
                    <p className="legend">Our Delicious Burger</p>
                </div>
                <div>
                    <img src={pizza} alt="Pizza" />
                    <p className="legend">Our Cheeseiest Pizza</p>
                </div>
                <div>
                    <img src={biryani} alt='biryani'/>
                    <p className="legend">Authentic Biryani</p>
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel

