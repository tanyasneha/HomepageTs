import React from 'react';
import './style.css';

interface Props {
    name?: string;
    height?: number;
    width?: number;
    location:string;
    alt?: string;
}

const Image: React.FC<Props> = ({name,height,width,location,alt}) => {
    return (
            <img className={name}  src={location} height={height} width={width} alt={alt}/>
    );
};

export default Image