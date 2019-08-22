import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div class='nav-wrapper'>
				<Link to='#' class='brand-logo'>
					Hair Transplant
				</Link>
				<ul id='nav-mobile' class='right hide-on-med-and-down'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/youtuber'>JavaScript</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
