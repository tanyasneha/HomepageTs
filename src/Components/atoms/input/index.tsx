import React from 'react'
import './style.css'

interface Props {
    style: string;
    content?: string;
}

const Input:React.FC<Props>= ({style,content})=>{
    return(
        <input className={`in_${style}`} type="text" placeholder={content}/>
    )
};

export default Input;