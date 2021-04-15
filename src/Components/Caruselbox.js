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
                           src={2}
                           alt='2'
                       />
                       <Carusel.Caption>
                           <h3>Les 2</h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam autem eligendi laudantium nostrum quam, temporibus voluptatem? Cum, magni, officiis. Accusamus aliquam dolorem eveniet ipsam veniam. Aspernatur commodi natus necessitatibus!</p>
                       </Carusel.Caption>
                   </Carousel.Item>
               </Carousel>
            </div>
        );
    }
}

export default Caruselbox;