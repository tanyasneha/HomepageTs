import React from 'react'
import Link from '../../atoms/link/index'
import './style.css'

interface Props{
    content:string[];
}

const NavLinks: React.FC<Props>= ({content})=>{
    return(
        <div className="nav-links">
            {content.map((linkName, index) => {
                return (
                <Link text={linkName} url="/" style={index === 0 ? "text-link-active" : "text-link"} key={index}/>
                )
            })}
        </div> 
    );   
}

export default NavLinks