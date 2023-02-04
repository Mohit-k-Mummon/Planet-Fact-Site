import React, { useContext } from 'react';

import PlanetContext from '../../store/planet-context';

const Menu = () => {
	const PlanetCtx = useContext(PlanetContext);

	return (
		<menu className='nav__tablet-desktop-menu'>
			<li className='list-item'>
				<button onClick={PlanetCtx.onMercuryClicked} className='menu-btn' id='mercury'>
					Mercury
				</button>
			</li>
			<li className='list-item'>
				<button onClick={PlanetCtx.onVenusClicked} className='menu-btn' id='venus'>
					Venus
				</button>
			</li>
			<li className='list-item'>
				<button onClick={PlanetCtx.onEarthClicked} className='menu-btn' id='earth'>
					Earth
				</button>
			</li>
			<li className='list-item'>
				<button onClick={PlanetCtx.onMarsClicked} className='menu-btn' id='mars'>
					Mars
				</button>
			</li>
			<li className='list-item'>
				<button onClick={PlanetCtx.onJupiterClicked} className='menu-btn' id='jupiter'>
					Jupiter
				</button>
			</li>
			<li className='list-item'>
				<button onClick={PlanetCtx.onSaturnClicked} className='menu-btn' id='saturn'>
					Saturn
				</button>
			</li>
			<li className='list-item'>
				<button onClick={PlanetCtx.onUranusClicked} className='menu-btn' id='uranus'>
					Uranus
				</button>
			</li>
			<li className='list-item'>
				<button onClick={PlanetCtx.onNeptuneClicked} className='menu-btn' id='neptune'>
					Neptune
				</button>
			</li>
		</menu>
	);
};

export default Menu;
