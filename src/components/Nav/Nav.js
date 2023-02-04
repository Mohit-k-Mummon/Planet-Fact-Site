import React, { useContext } from 'react';
import PlanetContext from '../../store/planet-context';

import Menu from './Menu';
import { ReactComponent as HamburgerIcon } from '../../assets/icon-hamburger.svg';

const Nav = props => {
	const PlanetCtx = useContext(PlanetContext);
	return (
		<nav className='nav'>
			<h1 className='nav__heading'>The planets</h1>
			<HamburgerIcon
				className={`hamburger-icon ${PlanetCtx.mobileMenuActive ? 'active' : ''}`}
				onClick={PlanetCtx.mobileMenuHandler}
			/>
			<Menu />
		</nav>
	);
};

export default Nav;
