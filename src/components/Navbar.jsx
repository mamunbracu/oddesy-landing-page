import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { animateScroll as scroll, Link } from "react-scroll";
import "./Navbar.css";

function NavBar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const toggleHome = () => {
		scroll.scrollToTop();
	};
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
