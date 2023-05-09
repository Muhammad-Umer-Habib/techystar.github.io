import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'


const Services = () => {
    return <div className='services'>
        <Carousel infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            interval={1200}>

            <div>
                <img src={img3} alt="item 3" />
                <p className='legend'>Full Stack </p>
            </div>

            <div>
                <img src={img4} alt="item 4" />
                <p className='legend'> Peer-to-Peer Support </p>
            </div>


        </Carousel>


    </div>

}

export default Services
