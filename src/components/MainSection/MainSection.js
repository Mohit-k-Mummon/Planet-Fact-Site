import React from 'react';

import MobileInfoSelector from './MobileInfoSelector';
import PlanetInfo from './PlanetInfo';

const MainSection = () => {
	return (
		<main className='main-section'>
			<MobileInfoSelector />
			<PlanetInfo />
		</main>
	);
};

export default MainSection;
