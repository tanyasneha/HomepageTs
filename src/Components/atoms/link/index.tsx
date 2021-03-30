import React from 'react'
import './style.css'

interface Props{
    text?: string| React.ReactNode;
    url: string;
    style?: string;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
}

const Link:React.FC<Props> = ({text,url,style,onClick})=>{
    return(
        <a href={url} className={`text ${style}`} onClick={onClick}>{text}</a> 
    );
}
export default Link;