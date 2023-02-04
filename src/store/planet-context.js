import React, { useState } from 'react';

const PlanetContext = React.createContext({
	mercuryActive: false,
	venusActive: false,
	earthActive: false,
	marsActive: false,
	jupiterActive: false,
	saturnActive: false,
	uranusActive: false,
	neptuneActive: false,
	onMercuryClicked: () => {},
	onVenusClicked: () => {},
	onEarthClicked: () => {},
	onMarsClicked: () => {},
	onJupiterClicked: () => {},
	onSaturnClicked: () => {},
	onUranusClicked: () => {},
	onNeptuneClicked: () => {},
	mobileMenuActive: false,
	mobileMenuHandler: () => {},
});

export const PlanetContextProvider = props => {
	// Mobile Menu State
	const [mobileMenuActive, setMobileMenuActive] = useState(false);

	const mobileMenuHandler = () => {
		if (!mobileMenuActive) {
			setMobileMenuActive(true);
		} else {
			setMobileMenuActive(false);
		}
	};

	// Planets State
	const [mercuryActive, setMercuryActive] = useState(false);
	const [venusActive, setVenusActive] = useState(false);
	const [earthActive, setEarthActive] = useState(true);
	const [marsActive, setMarsActive] = useState(false);
	const [jupiterActive, setJupiterActive] = useState(false);
	const [saturnActive, setSaturnActive] = useState(false);
	const [uranusActive, setUranusActive] = useState(false);
	const [neptuneActive, setNeptuneActive] = useState(false);

	const onMercuryClickHandler = () => {
		if (mercuryActive) {
			return;
		} else {
			setMercuryActive(true);
			setVenusActive(false);
			setEarthActive(false);
			setMarsActive(false);
			setJupiterActive(false);
			setSaturnActive(false);
			setUranusActive(false);
			setNeptuneActive(false);

			setMobileMenuActive(false);

			document.documentElement.className = 'mercury';
		}
	};

	const onVenusClickHandler = () => {
		if (venusActive) {
			return;
		} else {
			setMercuryActive(false);
			setVenusActive(true);
			setEarthActive(false);
			setMarsActive(false);
			setJupiterActive(false);
			setSaturnActive(false);
			setUranusActive(false);
			setNeptuneActive(false);

			setMobileMenuActive(false);

			document.documentElement.className = 'venus';
		}
	};

	const onEarthClickHandler = () => {
		if (earthActive) {
			return;
		} else {
			setMercuryActive(false);
			setVenusActive(false);
			setEarthActive(true);
			setMarsActive(false);
			setJupiterActive(false);
			setSaturnActive(false);
			setUranusActive(false);
			setNeptuneActive(false);

			setMobileMenuActive(false);

			document.documentElement.className = 'earth';
		}
	};
	const onMarsClickHandler = () => {
		if (marsActive) {
			return;
		} else {
			setMercuryActive(false);
			setVenusActive(false);
			setEarthActive(false);
			setMarsActive(true);
			setJupiterActive(false);
			setSaturnActive(false);
			setUranusActive(false);
			setNeptuneActive(false);

			setMobileMenuActive(false);

			document.documentElement.className = 'mars';
		}
	};
	const onJupiterClickHandler = () => {
		if (jupiterActive) {
			return;
		} else {
			setMercuryActive(false);
			setVenusActive(false);
			setEarthActive(false);
			setMarsActive(false);
			setJupiterActive(true);
			setSaturnActive(false);
			setUranusActive(false);
			setNeptuneActive(false);

			setMobileMenuActive(false);

			document.documentElement.className = 'jupiter';
		}
	};
	const onSaturnClickHandler = () => {
		if (saturnActive) {
			return;
		} else {
			setMercuryActive(false);
			setVenusActive(false);
			setEarthActive(false);
			setMarsActive(false);
			setJupiterActive(false);
			setSaturnActive(true);
			setUranusActive(false);
			setNeptuneActive(false);

			setMobileMenuActive(false);

			document.documentElement.className = 'saturn';
		}
	};

	const onUranusClickHandler = () => {
		if (uranusActive) {
			return;
		} else {
			setMercuryActive(false);
			setVenusActive(false);
			setEarthActive(false);
			setMarsActive(false);
			setJupiterActive(false);
			setSaturnActive(false);
			setUranusActive(true);
			setNeptuneActive(false);

			setMobileMenuActive(false);

			document.documentElement.className = 'uranus';
		}
	};
	const onNeptuneClickHandler = () => {
		if (neptuneActive) {
			return;
		} else {
			setMercuryActive(false);
			setVenusActive(false);
			setEarthActive(false);
			setMarsActive(false);
			setJupiterActive(false);
			setSaturnActive(false);
			setUranusActive(false);
			setNeptuneActive(true);

			setMobileMenuActive(false);

			document.documentElement.className = 'neptune';
		}
	};

	return (
		<PlanetContext.Provider
			value={{
				mercuryActive: mercuryActive,
				venusActive: venusActive,
				earthActive: earthActive,
				marsActive: marsActive,
				jupiterActive: jupiterActive,
				saturnActive: saturnActive,
				uranusActive: uranusActive,
				neptuneActive: neptuneActive,
				onMercuryClicked: onMercuryClickHandler,
				onVenusClicked: onVenusClickHandler,
				onEarthClicked: onEarthClickHandler,
				onMarsClicked: onMarsClickHandler,
				onJupiterClicked: onJupiterClickHandler,
				onSaturnClicked: onSaturnClickHandler,
				onUranusClicked: onUranusClickHandler,
				onNeptuneClicked: onNeptuneClickHandler,
				mobileMenuActive: mobileMenuActive,
				mobileMenuHandler: mobileMenuHandler,
			}}
		>
			{props.children}
		</PlanetContext.Provider>
	);
};

export default PlanetContext;
