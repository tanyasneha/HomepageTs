import React, { useState, useEffect }  from 'react'
import CarouselImage from '../../molecules/CarouselImage/index'
import CarouselText from '../../molecules/CarouselText/index'
import CarouselIndicator from '../../molecules/carouselIndicator/index'
import Link from '../../atoms/link/index'
import Image from '../../atoms/image/index'
import './style.css'

const carouselContent = [
  {
    heading: "Silicon Valley:The Untold Story",
    subHeading:"This series examines how Silicon Valley become a centre of innovation",
    tag1: "Recommended",
    tag2: "Stream for free",
    image: {
      img: "Silicon_Valley.jpeg",
      imgAlt: "Silicon Valley:The Untold Story"
    }
  },
  {
    heading: "Tales of Valour",
    subHeading:"Revisit the history of India's wars and tales of extraordinary soldiers",
    tag1: "New",
    tag2: "Don't Miss",
    image: {
      img: "Tales_Of_Valour.jpeg",
      imgAlt: "Tales of Valour"
    }
  },
    {
      heading: "Secrets Of Sinauli",
      subHeading:"Uncover Indian secrets buried for over 4000 years in this historical thriller that follows one of the greatest finds of the century. Neeraj Pandey's Secrets Of Sinauli is a discovery+ India original, presented by Manoj Bajpayee.",
      tag1: "New",
      tag2: "Don't Miss",
      image: {
        img: "Secrets_Of_Sinauli.jpeg",
        imgAlt: "Secrets Of Sinauli"
      }
    },
    {
      heading: "Capturing Cricket: Steve Waugh in India",
      subHeading:"Steve Waugh goes on a trip through India, exploring culture and cricket.",
      tag1: "New",
      tag2: "Don't Miss",
      image: {
        img: "Capturing_Cricket.jpeg",
        imgAlt: "Capturing Cricket"
      }
    },
    {
      heading: "Super Soul",
      subHeading:"Oprah speaks intimatley with celebrities including Priyanka Chopra Jonas",
      tag1: "Editor's pic",
      tag2: "Trending",
      image: {
        img: "Secret_Soul.jpeg",
        imgAlt: "Super Soul"
      }
    },
    {
      heading: "India On Film",
      subHeading:"India on Film explores the earliest restored footage of India.",
      tag1: "Recommended",
      tag2: "Stream For Free",
      image: {
        img: "India_On_Film.jpeg",
        imgAlt: "India On Film"
      }
    }
  ];

  const Carousel= () => {
    const [activeContent, setActiveContent] = useState(0);
    
    useEffect(() => {
        const next = (activeContent + 1) % carouselContent.length;
        const id = setTimeout(() => setActiveContent(next), 3000);
        return () => clearTimeout(id);
        }, [activeContent]);
    
    const prevContent = (e: React.MouseEvent) => {
        e.preventDefault();
        if (activeContent === 0) setActiveContent(carouselContent.length - 1);
        else setActiveContent(activeContent - 1);
    }
    
    const nextContent = (e: React.MouseEvent) => {
        e.preventDefault();
        if (activeContent === carouselContent.length - 1) setActiveContent(0);
        else setActiveContent(activeContent + 1);
    }
    
    const currentContent = (current:number) => {
        setActiveContent(current);
    }
    
        return (
            <React.Fragment>
                {carouselContent.map((item, index) => {
                    return (
                        (index === activeContent) && <div className="carousel" key={index}>
                            <Link text={<Image location="/previous.png" alt="Discovery" width={24}/>} url="/" onClick={prevContent} style="nav-icon text-nav"/>
                            <CarouselText textContent={item} key={index}/>
                            <CarouselImage imageContent={item.image} />
                            <Link text={<Image location="/next.png" alt="Discovery" width={24}/>} url="/" onClick={nextContent} style="nav-icon text-nav"/>
                        </div>
                    );
                })}
                <div className="carousel-indicator-position">
                {(carouselContent).map((indicator, index) => {
                    return (
                        <CarouselIndicator key={index} onClick={(e) =>{e.preventDefault(); currentContent(index)}} type={activeContent === index ? "carousel-indicator-active" : "carousel-indicator-inactive"}/>
                    );
                })}
                </div>
          </React.Fragment>
        );
    };

    export default Carousel;