import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { animateScroll as scroll, Link } from "react-scroll";
import "./Navbar.css";
import UseDarkMood from "./UseDarkMood";

function NavBar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const toggleHome = () => {
		scroll.scrollToTop();
	};
 
  const [colorTheme,setTheme] = UseDarkMood()
	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<Link to="/" className="nav-logo" onClick={toggleHome}>
						<img src="/assets/oddesy_logo.png" alt="" />
					</Link>

					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link
								to="hero"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
								spy={true}
								smooth={true}
								duration={500}
                offset={-90}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="service"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
								spy={true}
                exact="true"
								smooth={true}
								offset={-80}
								duration={500}
							>
								Service
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="blog"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
                spy={true}
                exact="true"
								smooth={true}
								offset={-90}
								duration={500}
							>
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="portfolio"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
                spy={true}
                exact="true"
								smooth={true}
								offset={-90}
								duration={500}
							>
								Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="contact"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
                spy={true}
                exact="true"
								smooth={true}
								offset={-90}
								duration={500}
							>
								Contact US
							</Link>
						</li>
						<li className="flex justify-center items-center" onClick={() => setTheme(colorTheme)}>
            {
              colorTheme === "light" ? 
              <svg className="w-8 h-8 bg-indigo-500 rounded-full shadow-lg flex items-center justify-center p-1 text-indigo-50 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              :
              <svg class="w-8 h-8 bg-indigo-500 rounded-full shadow-lg flex items-center justify-center p-1 text-indigo-50 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>

            }
           
           
						</li>
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
