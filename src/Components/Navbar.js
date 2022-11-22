
import React,{useState} from 'react';
import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa";
import {GiHamburgerMenu}from "react-icons/gi";
 const Navbar = () => {
const [showMediaIcons, setshowMediaIcons] = useState(false);
  return (
    <>
    <nav className='main-nav'>
    {/* ----first logo part---- */}
        <div className='logo'>
            <h2>
                <span>A</span>man
                <span>M</span>aharjan
            </h2>
        </div>
        {/* ---second menu-part--- */}
        <div className={showMediaIcons ? "menu-links mobile-menu-links" : "menu-links"}>
            <ul>
            <li>
            <a href='#'>Home</a>
            </li>
            <li>
            <a href='#'>About</a>
            </li>
            <li>
            <a href='#'>Services</a>
            </li>
            <li>
            <a href='#'>Contact </a>
            </li>
            </ul>
        </div>

        {/* ---third social mediia links--- */}

        <div className='social-media'>
            <ul className='social-media-desktop'>
                <li>
                    <a href='https://www.facebook.com/ '
                    t arget="blank"><FaFacebookSquare/></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/'
                     target="blank"><FaInstagramSquare/></a>
                </li>
                <li>
                    <a href='https://www.youtube.com/'
                     target="blank"><FaYoutubeSquare/></a>
                </li>
            </ul>
{/* -----------hamburger menu start */}
            <div className='hamburger-menu'>
                <a href='#' onClick={() => setshowMediaIcons(!showMediaIcons)}>     
                <GiHamburgerMenu/></a>
            </div>
        </div>

    </nav>

    {/* --hero section-- */}
    <section className='hero-section'>
        <p>welcome to </p>
        <h1>aman technical</h1>
    </section>
    </>

  );
};

export default Navbar;
