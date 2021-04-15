import 2 from '../assets/2.jpeg';
import 122 from '../assets/122.jpg2.jpeg';

import React, {Component} from 'react';
import Carousel from "bootstrap/js/src/carousel";
import {CarouselItem} from "react-bootstrap";

class Caruselbox extends Component {
    render() {
        return (
            <div>
               <Carousel>
                   <Carousel.Item>
                       <img
                           className='d-block w-100'
                           src={}
                       />
                   </Carousel.Item>
               </Carousel>
            </div>
        );
    }
}

export default Caruselbox;