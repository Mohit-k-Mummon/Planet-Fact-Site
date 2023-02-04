import React, { useContext } from 'react';

import PlanetContext from '../../store/planet-context';

const MobileMenu = () => {
	const PlanetCtx = useContext(PlanetContext);

	return (
		<menu className='mobile-menu'>
			<li onClick={PlanetCtx.onMercuryClicked} className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet mercury'></div>
					<p>Mercury</p>
				</div>
			</li>
			<li onClick={PlanetCtx.onVenusClicked} className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet venus'></div>
					<p>Venus</p>
				</div>
			</li>
			<li onClick={PlanetCtx.onEarthClicked} className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet earth'></div>
					<p>Earth</p>
				</div>
			</li>
			<li onClick={PlanetCtx.onMarsClicked} className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet mars'></div>
					<p>Mars</p>
				</div>
			</li>
			<li onClick={PlanetCtx.onJupiterClicked} className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet jupiter'></div>
					<p>Jupiter</p>
				</div>
			</li>
			<li onClick={PlanetCtx.onSaturnClicked} className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet saturn'></div>
					<p>Saturn</p>
				</div>
			</li>
			<li onClick={PlanetCtx.onUranusClicked} className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet uranus'></div>
					<p>uranus</p>
				</div>
			</li>
			<li onClick={PlanetCtx.onNeptuneClicked} className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet neptune'></div>
					<p>neptune</p>
				</div>
			</li>
		</menu>
	);
};

export default MobileMenu;
