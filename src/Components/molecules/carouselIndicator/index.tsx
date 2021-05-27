import React from 'react';
import Link from '../../atoms/link/index';

interface Props{
    type:string;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
}

const CarouselIndicator: React.FC<Props> = ({type, onClick}) => {
    return (
        <Link url="/" onClick={onClick} style={type} />
    );
};

export default CarouselIndicator;