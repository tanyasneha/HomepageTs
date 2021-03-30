import React from 'react'
import './style.css'
import Card from '../../molecules/card/index'

const cardsContent={
    locationList:['Adventure.jpg','Animals.jpg','Nature.jpg','Auto.jpg','Food.jpg','Science.jpg'],
    textList:['Adventure','Animals','Nature','Auto','Food','Science']
}
const CardList = ()=>{
    return(
        <div className='cardList'>
            {cardsContent.locationList.map((location, index) => {
                return (
                    <Card  location={location} width ={250} text={cardsContent.textList[index]} key={index} /> 
                )
            })}
        </div>
    );
}

export default CardList;