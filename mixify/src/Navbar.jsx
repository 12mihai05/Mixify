import { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navbar.css"

export default function Navbar(){

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
        const container = document.querySelector('.container')
        if(mobileDrawerOpen){
            container.style.filter = ""
            container.style.pointerEvents = ""

        }else{
            container.style.filter = "brightness(0.5)"
            container.style.pointerEvents = "none"
        }
      };

    useEffect(() => {
    const handleNavScroll = () => {
      const navbar = document.querySelector(".nav");
      const scrollY = window.scrollY;
      const maxScroll = 60;
      let opacity = scrollY / maxScroll;

      if (opacity > 1) opacity = 1;
      if (opacity < 0) opacity = 0;

      navbar.style.backgroundColor = `rgba(40, 40, 40, ${opacity})`;
    };

    window.addEventListener("scroll", handleNavScroll);

  }, []);

    return (<nav className="nav">
        <div className="nav-container">
        <Link to="/" className="site-title">Mixify</Link>
        <ul >
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/features">Features</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
        <div className="right-nav">
        <button className="log-in-button large"> Log in</button>
        
        <svg width="25" height="25" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="large">
            <path d="M22.0002 23.1251C23.5279 23.1251 24.8266 22.6754 25.896 21.7761C26.9654 20.8768 27.5002 19.7848 27.5002 18.5001C27.5002 17.2154 26.9654 16.1233 25.896 15.224C24.8266 14.3247 23.5279 13.8751 22.0002 13.8751C20.4724 13.8751 19.1738 14.3247 18.1043 15.224C17.0349 16.1233 16.5002 17.2154 16.5002 18.5001C16.5002 19.7848 17.0349 20.8768 18.1043 21.7761C19.1738 22.6754 20.4724 23.1251 22.0002 23.1251ZM22.0002 26.2084C19.4641 26.2084 17.3022 25.4569 15.5147 23.9537C13.7272 22.4506 12.8335 20.6327 12.8335 18.5001C12.8335 16.3674 13.7272 14.5496 15.5147 13.0464C17.3022 11.5433 19.4641 10.7917 22.0002 10.7917C24.5363 10.7917 26.6981 11.5433 28.4856 13.0464C30.2731 14.5496 31.1668 16.3674 31.1668 18.5001C31.1668 20.6327 30.2731 22.4506 28.4856 23.9537C26.6981 25.4569 24.5363 26.2084 22.0002 26.2084ZM9.16683 20.0417H1.8335V16.9584H9.16683V20.0417ZM42.1668 20.0417H34.8335V16.9584H42.1668V20.0417ZM20.1668 7.70841V1.54175H23.8335V7.70841H20.1668ZM20.1668 35.4584V29.2917H23.8335V35.4584H20.1668ZM11.7335 11.948L7.10433 8.20946L9.71683 5.9355L14.1168 9.78966L11.7335 11.948ZM34.2835 31.0647L29.8377 27.172L32.2668 25.0522L36.896 28.7907L34.2835 31.0647ZM29.7918 9.86675L34.2377 5.97404L36.9418 8.17091L32.3585 11.8709L29.7918 9.86675ZM7.0585 28.8292L11.6877 25.0907L14.2085 27.1334L9.76266 31.0261L7.0585 28.8292Z" fill="#ffffff"/>
        </svg>
        </div>
        



        <div className="mobile-navbar">
            <button onClick={toggleNavbar} className="menu-button">
                { mobileDrawerOpen ? 
                    <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 40L30 30M30 30L20 20M30 30L40 20M30 30L20 40" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    : 
                    <svg width="40" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 17.5H10" stroke="white" strokeWidth="3.75" strokeLinecap="round"/>
                    <path d="M50 30H10" stroke="white" strokeWidth="3.75" strokeLinecap="round"/>
                    <path d="M50 42.5H10" stroke="white" strokeWidth="3.75" strokeLinecap="round"/>
                </svg>
                }
            </button>
        </div>
        </div>
                    <div className={`menu ${mobileDrawerOpen ? 'open' : ''}`} >
                        <div className="top-side">
                        <button className="log-in-button"> Log in</button>
        
                        <svg width="25" height="25" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0002 23.1251C23.5279 23.1251 24.8266 22.6754 25.896 21.7761C26.9654 20.8768 27.5002 19.7848 27.5002 18.5001C27.5002 17.2154 26.9654 16.1233 25.896 15.224C24.8266 14.3247 23.5279 13.8751 22.0002 13.8751C20.4724 13.8751 19.1738 14.3247 18.1043 15.224C17.0349 16.1233 16.5002 17.2154 16.5002 18.5001C16.5002 19.7848 17.0349 20.8768 18.1043 21.7761C19.1738 22.6754 20.4724 23.1251 22.0002 23.1251ZM22.0002 26.2084C19.4641 26.2084 17.3022 25.4569 15.5147 23.9537C13.7272 22.4506 12.8335 20.6327 12.8335 18.5001C12.8335 16.3674 13.7272 14.5496 15.5147 13.0464C17.3022 11.5433 19.4641 10.7917 22.0002 10.7917C24.5363 10.7917 26.6981 11.5433 28.4856 13.0464C30.2731 14.5496 31.1668 16.3674 31.1668 18.5001C31.1668 20.6327 30.2731 22.4506 28.4856 23.9537C26.6981 25.4569 24.5363 26.2084 22.0002 26.2084ZM9.16683 20.0417H1.8335V16.9584H9.16683V20.0417ZM42.1668 20.0417H34.8335V16.9584H42.1668V20.0417ZM20.1668 7.70841V1.54175H23.8335V7.70841H20.1668ZM20.1668 35.4584V29.2917H23.8335V35.4584H20.1668ZM11.7335 11.948L7.10433 8.20946L9.71683 5.9355L14.1168 9.78966L11.7335 11.948ZM34.2835 31.0647L29.8377 27.172L32.2668 25.0522L36.896 28.7907L34.2835 31.0647ZM29.7918 9.86675L34.2377 5.97404L36.9418 8.17091L32.3585 11.8709L29.7918 9.86675ZM7.0585 28.8292L11.6877 25.0907L14.2085 27.1334L9.76266 31.0261L7.0585 28.8292Z" fill="#ffffff"/>
                        </svg>
                        </div>
                        <ul>
                            <Link to="/" onClick={toggleNavbar}><li>Home</li></Link>
                            {/* <li><div className="menu-line"></div></li> */}
                            <Link to="/features" className="menu-features" onClick={toggleNavbar}><li> Features</li></Link>
                            {/* <li><div className="menu-line"></div></li> */}
                            <Link to="/about" onClick={toggleNavbar}><li>About</li></Link>
                        </ul>
                    </div>
    </nav>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return(
        <li className="large">
            <Link to={to} {...props} className={isActive ? "active" : ""}>
                {children}
            </Link>
        </li>

    )
}