import { useState, useEffect, useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navbar.css"

export default function Navbar(){

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const mobileDrawerOpenRef = useRef(mobileDrawerOpen);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        const container = document.querySelector('.container');
        const navbar = document.querySelector(".nav");

        if(window.innerWidth >= 760){
            const rootStyles = getComputedStyle(document.body);
            const bgColor = rootStyles.getPropertyValue('--tertiary-background').trim();
            navbar.style.backgroundColor = `${bgColor}`;
            handleNavScroll()
        }
    
        if (mobileDrawerOpenRef.current ) {
            const rootStyles = getComputedStyle(document.body);
            const bgColor = rootStyles.getPropertyValue('--tertiary-background').trim();
            navbar.style.backgroundColor = `${bgColor}`;
            navbar.style.transition = "none";
            container.style.filter = "brightness(0.5)";
            container.style.pointerEvents = "none";
            setTimeout(() => {
                navbar.style.transition = "background-color 200ms ease-in";
            }, 200);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    const toggleNavbar = () => {
        const newDrawerState = !mobileDrawerOpen;
        setMobileDrawerOpen(newDrawerState);
    
        const container = document.querySelector('.container');
        const navbar = document.querySelector(".nav");
        const toggleBtn = document.querySelector(".toggle-menu");
    
        if (newDrawerState || window.innerWidth >= 760 ) {
            const rootStyles = getComputedStyle(document.body);
            const bgColor = rootStyles.getPropertyValue('--tertiary-background').trim();
            toggleBtn.style.border = "var(--secondary-text) 3px solid";
            navbar.style.transition = "background-color 200ms ease-in";
            navbar.style.backgroundColor = `${bgColor}`;
            container.style.filter = "brightness(0.5)";
            container.style.pointerEvents = "none";
        } else {
            container.style.filter = "none";
            container.style.pointerEvents = "auto";
            toggleBtn.style.border = "var(--secondary-text) 2px solid";
            handleNavScroll()
            setTimeout(() => {
                navbar.style.transition = "none";
            }, 200);
        }
    };

    const handleNavScroll = () => {
        if(!mobileDrawerOpenRef.current || mobileDrawerOpen){
            const navbar = document.querySelector(".nav");
            const scrollY = window.scrollY;
            const maxScroll = 60;
            let opacity = scrollY / maxScroll;

            if (opacity > 1) opacity = 1;
            if (opacity < 0) opacity = 0;

            const rootStyles = getComputedStyle(document.body);
            const bgColorRgb = rootStyles.getPropertyValue('--tertiary-background-rgb').trim();

            navbar.style.backgroundColor = `rgba(${bgColorRgb}, ${opacity})`; 
        }
    };

    useEffect(() => {
        mobileDrawerOpenRef.current = mobileDrawerOpen;
    }, [mobileDrawerOpen]);

    useEffect(() => {
            window.addEventListener("scroll", handleNavScroll);

            return () => {
                window.removeEventListener("scroll", handleNavScroll);
            };
        
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
        
        {theme === "light" ? (
            <svg onClick={toggleTheme} className="large theme" width="25" height="25" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0002 23.1251C23.5279 23.1251 24.8266 22.6754 25.896 21.7761C26.9654 20.8768 27.5002 19.7848 27.5002 18.5001C27.5002 17.2154 26.9654 16.1233 25.896 15.224C24.8266 14.3247 23.5279 13.8751 22.0002 13.8751C20.4724 13.8751 19.1738 14.3247 18.1043 15.224C17.0349 16.1233 16.5002 17.2154 16.5002 18.5001C16.5002 19.7848 17.0349 20.8768 18.1043 21.7761C19.1738 22.6754 20.4724 23.1251 22.0002 23.1251ZM22.0002 26.2084C19.4641 26.2084 17.3022 25.4569 15.5147 23.9537C13.7272 22.4506 12.8335 20.6327 12.8335 18.5001C12.8335 16.3674 13.7272 14.5496 15.5147 13.0464C17.3022 11.5433 19.4641 10.7917 22.0002 10.7917C24.5363 10.7917 26.6981 11.5433 28.4856 13.0464C30.2731 14.5496 31.1668 16.3674 31.1668 18.5001C31.1668 20.6327 30.2731 22.4506 28.4856 23.9537C26.6981 25.4569 24.5363 26.2084 22.0002 26.2084ZM9.16683 20.0417H1.8335V16.9584H9.16683V20.0417ZM42.1668 20.0417H34.8335V16.9584H42.1668V20.0417ZM20.1668 7.70841V1.54175H23.8335V7.70841H20.1668ZM20.1668 35.4584V29.2917H23.8335V35.4584H20.1668ZM11.7335 11.948L7.10433 8.20946L9.71683 5.9355L14.1168 9.78966L11.7335 11.948ZM34.2835 31.0647L29.8377 27.172L32.2668 25.0522L36.896 28.7907L34.2835 31.0647ZM29.7918 9.86675L34.2377 5.97404L36.9418 8.17091L32.3585 11.8709L29.7918 9.86675ZM7.0585 28.8292L11.6877 25.0907L14.2085 27.1334L9.76266 31.0261L7.0585 28.8292Z" fill="#ffffff"/>
            </svg>
        ) : (
            <svg onClick={toggleTheme} className="large theme" width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 36.75C16.2292 36.75 12.599 35.2188 9.60938 32.1562C6.61979 29.0938 5.125 25.375 5.125 21C5.125 16.625 6.61979 12.9062 9.60938 9.84375C12.599 6.78125 16.2292 5.25 20.5 5.25C20.8986 5.25 21.2901 5.26458 21.6745 5.29375C22.0589 5.32292 22.4361 5.36667 22.8063 5.425C21.6389 6.27083 20.7064 7.37188 20.0089 8.72813C19.3113 10.0844 18.9625 11.55 18.9625 13.125C18.9625 15.75 19.8594 17.9812 21.6531 19.8187C23.4469 21.6562 25.625 22.575 28.1875 22.575C29.7535 22.575 31.1913 22.2177 32.501 21.5031C33.8108 20.7885 34.8785 19.8333 35.7042 18.6375C35.7611 19.0167 35.8038 19.4031 35.8323 19.7969C35.8608 20.1906 35.875 20.5917 35.875 21C35.875 25.375 34.3802 29.0938 31.3906 32.1562C28.401 35.2188 24.7708 36.75 20.5 36.75ZM20.5 33.25C23.0056 33.25 25.2549 32.5427 27.2479 31.1281C29.241 29.7135 30.6931 27.8688 31.6042 25.5938C31.0347 25.7396 30.4653 25.8562 29.8958 25.9437C29.3264 26.0312 28.7569 26.075 28.1875 26.075C24.6854 26.075 21.703 24.8135 19.2401 22.2906C16.7773 19.7677 15.5458 16.7125 15.5458 13.125C15.5458 12.5417 15.5885 11.9583 15.674 11.375C15.7594 10.7917 15.8733 10.2083 16.0156 9.625C13.7948 10.5583 11.9939 12.0458 10.613 14.0875C9.23212 16.1292 8.54167 18.4333 8.54167 21C8.54167 24.3833 9.70903 27.2708 12.0438 29.6625C14.3785 32.0542 17.1972 33.25 20.5 33.25Z" fill="#F9F9F9"/>
            </svg>
        )}
        </div>
        



        <div className="mobile-navbar">
            <button onClick={toggleNavbar} className="menu-button">
                { mobileDrawerOpen ? 
                    <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="toggle-menu">
                        <path d="M40 40L30 30M30 30L20 20M30 30L40 20M30 30L20 40" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                : 
                    <svg width="40" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="toggle-menu">
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
        
                        {theme === "light" ? (
                            <svg className="theme" onClick={toggleTheme} width="25" height="25" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0002 23.1251C23.5279 23.1251 24.8266 22.6754 25.896 21.7761C26.9654 20.8768 27.5002 19.7848 27.5002 18.5001C27.5002 17.2154 26.9654 16.1233 25.896 15.224C24.8266 14.3247 23.5279 13.8751 22.0002 13.8751C20.4724 13.8751 19.1738 14.3247 18.1043 15.224C17.0349 16.1233 16.5002 17.2154 16.5002 18.5001C16.5002 19.7848 17.0349 20.8768 18.1043 21.7761C19.1738 22.6754 20.4724 23.1251 22.0002 23.1251ZM22.0002 26.2084C19.4641 26.2084 17.3022 25.4569 15.5147 23.9537C13.7272 22.4506 12.8335 20.6327 12.8335 18.5001C12.8335 16.3674 13.7272 14.5496 15.5147 13.0464C17.3022 11.5433 19.4641 10.7917 22.0002 10.7917C24.5363 10.7917 26.6981 11.5433 28.4856 13.0464C30.2731 14.5496 31.1668 16.3674 31.1668 18.5001C31.1668 20.6327 30.2731 22.4506 28.4856 23.9537C26.6981 25.4569 24.5363 26.2084 22.0002 26.2084ZM9.16683 20.0417H1.8335V16.9584H9.16683V20.0417ZM42.1668 20.0417H34.8335V16.9584H42.1668V20.0417ZM20.1668 7.70841V1.54175H23.8335V7.70841H20.1668ZM20.1668 35.4584V29.2917H23.8335V35.4584H20.1668ZM11.7335 11.948L7.10433 8.20946L9.71683 5.9355L14.1168 9.78966L11.7335 11.948ZM34.2835 31.0647L29.8377 27.172L32.2668 25.0522L36.896 28.7907L34.2835 31.0647ZM29.7918 9.86675L34.2377 5.97404L36.9418 8.17091L32.3585 11.8709L29.7918 9.86675ZM7.0585 28.8292L11.6877 25.0907L14.2085 27.1334L9.76266 31.0261L7.0585 28.8292Z" fill="#ffffff"/>
                            </svg>
                        ) : (
                            <svg className="theme" onClick={toggleTheme} width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 36.75C16.2292 36.75 12.599 35.2188 9.60938 32.1562C6.61979 29.0938 5.125 25.375 5.125 21C5.125 16.625 6.61979 12.9062 9.60938 9.84375C12.599 6.78125 16.2292 5.25 20.5 5.25C20.8986 5.25 21.2901 5.26458 21.6745 5.29375C22.0589 5.32292 22.4361 5.36667 22.8063 5.425C21.6389 6.27083 20.7064 7.37188 20.0089 8.72813C19.3113 10.0844 18.9625 11.55 18.9625 13.125C18.9625 15.75 19.8594 17.9812 21.6531 19.8187C23.4469 21.6562 25.625 22.575 28.1875 22.575C29.7535 22.575 31.1913 22.2177 32.501 21.5031C33.8108 20.7885 34.8785 19.8333 35.7042 18.6375C35.7611 19.0167 35.8038 19.4031 35.8323 19.7969C35.8608 20.1906 35.875 20.5917 35.875 21C35.875 25.375 34.3802 29.0938 31.3906 32.1562C28.401 35.2188 24.7708 36.75 20.5 36.75ZM20.5 33.25C23.0056 33.25 25.2549 32.5427 27.2479 31.1281C29.241 29.7135 30.6931 27.8688 31.6042 25.5938C31.0347 25.7396 30.4653 25.8562 29.8958 25.9437C29.3264 26.0312 28.7569 26.075 28.1875 26.075C24.6854 26.075 21.703 24.8135 19.2401 22.2906C16.7773 19.7677 15.5458 16.7125 15.5458 13.125C15.5458 12.5417 15.5885 11.9583 15.674 11.375C15.7594 10.7917 15.8733 10.2083 16.0156 9.625C13.7948 10.5583 11.9939 12.0458 10.613 14.0875C9.23212 16.1292 8.54167 18.4333 8.54167 21C8.54167 24.3833 9.70903 27.2708 12.0438 29.6625C14.3785 32.0542 17.1972 33.25 20.5 33.25Z" fill="#F9F9F9"/>
                            </svg>
                        )}
                        </div>
                        <ul>
                            <Link to="/" onClick={toggleNavbar}><li>Home</li></Link>
                            <Link to="/features" className="menu-features" onClick={toggleNavbar}><li> Features</li></Link>
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