import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "Case Study"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/case-study">Case Study</Link>
							</li>
							<li
								className={
									active === "Hands On"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/hands-on">Hands On</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
