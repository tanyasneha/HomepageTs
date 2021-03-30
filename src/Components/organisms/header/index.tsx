import React from 'react';
import Logo from '../../molecules/logo/index';
import NavLinks from '../../molecules/NavLinks/index';
import Search from '../../molecules/search/index';
import './style.css';

const headerData = {
    logo: {
      location: ["items.jpg","logo.png"],
      logoAlt: "Discovery"
    },
    nav: ["Home","Explore","Shorts", "MindBlown","Premium"],
    search: {
    placeHolder: "Search for shows, episodes, shorts etc.",
    button: "Sign In"
    }
  }

const Header = () => {
    return (
        <div className="header">
            <Logo content={headerData.logo}/>
            <NavLinks content={headerData.nav}/>
            <Search content={headerData.search}/>
        </div>
    );
};


export default Header;