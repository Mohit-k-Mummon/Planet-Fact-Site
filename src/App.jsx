import React, { useContext } from 'react';
import './App.css';

import PlanetContext from './store/planet-context';

import MobileMenu from './components/Nav/MobileMenu';
import MainSection from './components/MainSection/MainSection';

import Nav from './components/Nav/Nav';
function App() {
	const PlanetCtx = useContext(PlanetContext);

	return (
		<React.Fragment>
			<Nav
				menuActive={PlanetCtx.mobileMenuActive}
				onHamburgerClick={PlanetCtx.mobileMenuHandler}
			/>
			{PlanetCtx.mobileMenuActive && <MobileMenu />}
			{!PlanetCtx.mobileMenuActive && <MainSection />}
		</React.Fragment>
	);
}

export default App;
