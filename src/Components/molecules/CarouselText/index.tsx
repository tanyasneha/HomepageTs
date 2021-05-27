import React from 'react';
import Image from '../../atoms/image/index';
import Link from '../../atoms/link/index';
import './style.css';

interface Props{
    textContent: {
        heading: string;
        subHeading: string;
        tag1: string;
        tag2: string;
    }
}

const CarouselText:React.FC<Props> = ({textContent}) => {
    return (
        <div className="carousel-text">
            <div>
                <span className='text carousel-heading'>{textContent.heading}</span>
            </div>
            <div className="padding-top-14">
                <span className='text carousel-subheading'>{textContent.subHeading}</span>
            </div>
            <div className="margin-tb-18">
                <span className='text carousel-tags'>{textContent.tag1}</span>
                <span className='text carousel-tags'>{textContent.tag1}</span>
            </div>
            <div className="play-button">
                <Image location="play-button-5.png" width={92} height={67} />
                <Link text="Play" url="/" style="carousel-play"/>
            </div>
        </div>
    );
};

export default CarouselText;