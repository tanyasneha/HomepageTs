import React from 'react'
import Input from '../../atoms/input/index'
import Button from '../../atoms/button/index'
import './style.css'

interface Props{
    content:{
        placeHolder: string,
        button: string
    }
}

const searchBar: React.FC<Props>= ({content})=>{
    return(
        <div className="search">
            <Input style="search-input" content={content.placeHolder}/>
            <Button name={content.button} color='primary' type="submit" />
        </div>
    );
}

export default searchBar;