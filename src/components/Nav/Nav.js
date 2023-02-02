import React from 'react';

import Menu from './Menu';
import { ReactComponent as HamburgerIcon } from '../../assets/icon-hamburger.svg';

const Nav = props => {
	return (
		<nav className='nav'>
			<h1 className='nav__heading'>The planets</h1>
			<HamburgerIcon
				className={`hamburger-icon ${props.menuActive ? 'active' : ''}`}
				onClick={props.onHamburgerClick}
			/>
			<Menu />
		</nav>
	);
};

export default Nav;
