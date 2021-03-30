import React from 'react'
import './style.css'
import Image from '../../atoms/image/index'

interface Props {
    location: string;
    width:number;
    text: string;
}

const Card: React.FC<Props> = ({location,width,text})=>{
    return(
        <div className='cardContainer'>
            <Image name="cardImage" location={location} width={width} />
            <div className="bottom-center">
                <span className='cardText'>{text}</span>
            </div>
        </div>
    );
}

export default Card;