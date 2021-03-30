import React from 'react'
import './style.css'
import Image from '../../atoms/image/index'

interface Props{
    imageContent: {
        img: string;
        imgAlt: string;
    };
}

const CarouselImage: React.FC<Props> = ({ imageContent }) => {
    return (
        <div>
            <Image name="border-rad-10" location={imageContent.img} alt={imageContent.imgAlt} width={875} height={490} />
        </div>
    );
}

export default CarouselImage;
