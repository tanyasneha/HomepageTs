import React from 'react'
import Header from '../organisms/header/index'
import CardList from '../organisms/cardList/index'
import Carousel from '../organisms/carousel/index'
const Template=()=>{
    return(
        <div>
            <Header />
            <Carousel/>
            <CardList />
        </div>
    )
}

export default Template