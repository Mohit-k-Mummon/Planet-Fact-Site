import React, { useState, useContext, useEffect } from 'react';

// CONTEXT
import PlanetContext from '../../store/planet-context';
import SelectorContext from '../../store/selector-context';

// PLANET IMGS
import { ReactComponent as Mercury } from '../../assets/planet-mercury.svg';
import { ReactComponent as Venus } from '../../assets/planet-venus.svg';
import { ReactComponent as Earth } from '../../assets/planet-earth.svg';
import { ReactComponent as Mars } from '../../assets/planet-mars.svg';
import { ReactComponent as Jupiter } from '../../assets/planet-jupiter.svg';
import { ReactComponent as Saturn } from '../../assets/planet-saturn.svg';
import { ReactComponent as Uranus } from '../../assets/planet-uranus.svg';
import { ReactComponent as Neptune } from '../../assets/planet-neptune.svg';

// PLANET CORE IMGS
import { ReactComponent as MercuryCore } from '../../assets/planet-mercury-internal.svg';
import { ReactComponent as VenusCore } from '../../assets/planet-venus-internal.svg';
import { ReactComponent as EarthCore } from '../../assets/planet-earth-internal.svg';
import { ReactComponent as MarsCore } from '../../assets/planet-mars-internal.svg';
import { ReactComponent as JupiterCore } from '../../assets/planet-jupiter-internal.svg';
import { ReactComponent as SaturnCore } from '../../assets/planet-saturn-internal.svg';
import { ReactComponent as UransuCore } from '../../assets/planet-uranus-internal.svg';
import { ReactComponent as NeptuneCore } from '../../assets/planet-neptune-internal.svg';

// PlanetData
import data from '../../data.json';

const PlanetInfo = () => {
	// Selector Context
	const SelectorCtx = useContext(SelectorContext);

	// Planet Context
	const PlanetCtx = useContext(PlanetContext);

	let planet;
	let index;

	// PLANET IMG DISPLAY LOGIC
	if (PlanetCtx.mercuryActive) {
		if (SelectorCtx.structureActive) {
			planet = <MercuryCore id='mercury-svg' />;
		} else {
			planet = <Mercury id='mercury-svg' />;
		}
		index = 0;
	} else if (PlanetCtx.venusActive) {
		if (SelectorCtx.structureActive) {
			planet = <VenusCore id='venus-svg' />;
		} else {
			planet = <Venus id='venus-svg' />;
		}
		index = 1;
	} else if (PlanetCtx.earthActive) {
		if (SelectorCtx.structureActive) {
			planet = <EarthCore id='earth-svg' />;
		} else {
			planet = <Earth id='earth-svg' />;
		}
		index = 2;
	} else if (PlanetCtx.marsActive) {
		if (SelectorCtx.structureActive) {
			planet = <MarsCore id='mars-svg' />;
		} else {
			planet = <Mars id='mars-svg' />;
		}
		index = 3;
	} else if (PlanetCtx.jupiterActive) {
		if (SelectorCtx.structureActive) {
			planet = <JupiterCore id='jupiter-svg' />;
		} else {
			planet = <Jupiter id='jupiter-svg' />;
		}
		index = 4;
	} else if (PlanetCtx.saturnActive) {
		if (SelectorCtx.structureActive) {
			planet = <SaturnCore id='saturn-svg' />;
		} else {
			planet = <Saturn id='saturn-svg' />;
		}
		index = 5;
	} else if (PlanetCtx.uranusActive) {
		if (SelectorCtx.structureActive) {
			planet = <UransuCore id='uranus-svg' />;
		} else {
			planet = <Uranus id='uranus-svg' />;
		}
		index = 6;
	} else if (PlanetCtx.neptuneActive) {
		if (SelectorCtx.structureActive) {
			planet = <NeptuneCore id='neptune-svg' />;
		} else {
			planet = <Neptune id='neptune-svg' />;
		}
		index = 7;
	}

	const [content, setContent] = useState(data[index].overview.content);
	const [source, setSource] = useState(data[index].overview.source);

	useEffect(() => {
		if (SelectorCtx.overviewActive) {
			setContent(data[index].overview.content);
			setSource(data[index].overview.source);
		}
		if (SelectorCtx.structureActive) {
			setContent(data[index].structure.content);
			setSource(data[index].structure.source);
		}
		if (SelectorCtx.surfaceActive) {
			setContent(data[index].geology.content);
			setSource(data[index].geology.source);
		}
	}, [SelectorCtx.overviewActive, SelectorCtx.structureActive, SelectorCtx.surfaceActive, index]);

	return (
		<div className='planet'>
			<div className='planet-container'>
				<div className='planet-img-container'>{planet}</div>
				<div className='planet-info'>
					<div className='main-info'>
						<h1 className='heading'>{data[index].name}</h1>
						<p className='tagline'>{content}</p>
						<p className='source'>
							Source :{' '}
							<span>
								<a target='_blank' rel='noopener noreferrer' href={source}>
									Wikipedia
								</a>
							</span>
						</p>
					</div>
					<div className='desktop-info-selector'>
						<div
							onClick={SelectorCtx.onOverviewClicked}
							className={`info-option ${SelectorCtx.overviewActive ? 'active' : ''}`}
						>
							<p className='number'>01</p>
							<p className='text'>Overview</p>
						</div>
						<div
							onClick={SelectorCtx.onStructureClicked}
							className={`info-option ${SelectorCtx.structureActive ? 'active' : ''}`}
						>
							<p className='number'>02</p>
							<p className='text'>Internal Structure</p>
						</div>
						<div
							onClick={SelectorCtx.onSurfaceClicked}
							className={`info-option ${SelectorCtx.surfaceActive ? 'active' : ''}`}
						>
							<p className='number'>03</p>
							<p className='text'>Surface Geology</p>
						</div>
					</div>
				</div>
			</div>
			<div className='planet-stats'>
				<div>
					<p className='stat-name'>Rotation time</p>
					<p className='stat-value'>{data[index].rotation}</p>
				</div>
				<div>
					<p className='stat-name'>Revolution time</p>
					<p className='stat-value'>{data[index].revolution}</p>
				</div>
				<div>
					<p className='stat-name'>radius</p>
					<p className='stat-value'>{data[index].rotation}</p>
				</div>
				<div>
					<p className='stat-name'>Average Temp.</p>
					<p className='stat-value'>{data[index].temperature}</p>
				</div>
			</div>
		</div>
	);
};

export default PlanetInfo;
