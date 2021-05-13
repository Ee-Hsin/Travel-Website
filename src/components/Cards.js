import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import image9 from '../images/img-9.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-3.jpg';
import image4 from '../images/img-4.jpg';
import image5 from '../images/img-5.jpg';

export default function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={image9}
                            text="Explore the hidden waterfall deep
                            inside the Amazon Jungle" 
                            label="Adventure" 
                            path="/services"
                        />
                        <CardItem 
                            src={image2}
                            text="Travel through the Islands of Bali in a Private Cruise" 
                            label="Luxury" 
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={image3}
                            text="Explore the hidden waterfall deep
                            inside the Amazon Jungle" 
                            label="Adventure" 
                            path="/services"
                        />
                        <CardItem 
                            src={image4}
                            text="Explore the hidden waterfall deep
                            inside the Amazon Jungle" 
                            label="Adventure" 
                            path="/services"
                        />
                        <CardItem 
                            src={image5}
                            text="Explore the hidden waterfall deep
                            inside the Amazon Jungle" 
                            label="Adventure" 
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
