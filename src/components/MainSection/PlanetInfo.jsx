import React, { useState, useContext, useEffect } from 'react';

// CONTEXT
import PlanetContext from '../../store/planet-context';
import SelectorContext from '../../store/selector-context';

// PLANET IMGS
import Mercury from '../../assets/planet-mercury.svg';
import Venus from '../../assets/planet-venus.svg';
import Earth from '../../assets/planet-earth.svg';
import Mars from '../../assets/planet-mars.svg';
import Jupiter from '../../assets/planet-jupiter.svg';
import Saturn from '../../assets/planet-saturn.svg';
import Uranus from '../../assets/planet-uranus.svg';
import Neptune from '../../assets/planet-neptune.svg';

// PLANET CORE IMGS
import MercuryCore from '../../assets/planet-mercury-internal.svg';
import VenusCore from '../../assets/planet-venus-internal.svg';
import EarthCore from '../../assets/planet-earth-internal.svg';
import MarsCore from '../../assets/planet-mars-internal.svg';
import JupiterCore from '../../assets/planet-jupiter-internal.svg';
import SaturnCore from '../../assets/planet-saturn-internal.svg';
import UranusCore from '../../assets/planet-uranus-internal.svg';
import NeptuneCore from '../../assets/planet-neptune-internal.svg';

// PLANET SURFACE IMGS
import MercurySurface from '../../assets/geology-mercury.png';
import VenusSurface from '../../assets/geology-venus.png';
import EarthSurface from '../../assets/geology-earth.png';
import MarsSurface from '../../assets/geology-mars.png';
import JupiterSurface from '../../assets/geology-jupiter.png';
import SaturnSurface from '../../assets/geology-saturn.png';
import UranusSurface from '../../assets/geology-uranus.png';
import NeptuneSurface from '../../assets/geology-neptune.png';

// PlanetData
import data from '../../data.json';

const PlanetInfo = () => {
	// Selector Context
	const SelectorCtx = useContext(SelectorContext);

	// Planet Context
	const PlanetCtx = useContext(PlanetContext);

	// PLANET IMG DISPLAY LOGIC
	let planet;
	let surfaceImg;
	let index;

	if (PlanetCtx.mercuryActive) {
		if (SelectorCtx.structureActive) {
			planet = <img id='mercury-svg' src={MercuryCore} alt='Mercury'></img>;
		} else {
			planet = <img id='mercury-svg' src={Mercury} alt='Mercury'></img>;
		}
		surfaceImg = MercurySurface;
		index = 0;
	} else if (PlanetCtx.venusActive) {
		if (SelectorCtx.structureActive) {
			planet = <img id='venus-svg' src={VenusCore} alt='Venus'></img>;
		} else {
			planet = <img id='venus-svg' src={Venus} alt='Venus'></img>;
		}
		surfaceImg = VenusSurface;
		index = 1;
	} else if (PlanetCtx.earthActive) {
		if (SelectorCtx.structureActive) {
			planet = <img id='earth-svg' src={EarthCore} alt='Earth'></img>;
		} else {
			planet = <img id='earth-svg' src={Earth} alt='Earth'></img>;
		}
		surfaceImg = EarthSurface;
		index = 2;
	} else if (PlanetCtx.marsActive) {
		if (SelectorCtx.structureActive) {
			planet = <img id='mars-svg' src={MarsCore} alt='Mars'></img>;
		} else {
			planet = <img id='mars-svg' src={Mars} alt='Mars'></img>;
		}
		surfaceImg = MarsSurface;
		index = 3;
	} else if (PlanetCtx.jupiterActive) {
		if (SelectorCtx.structureActive) {
			planet = <img id='jupiter-svg' src={JupiterCore} alt='Jupiter'></img>;
		} else {
			planet = <img id='jupiter-svg' src={Jupiter} alt='Jupiter'></img>;
		}
		surfaceImg = JupiterSurface;
		index = 4;
	} else if (PlanetCtx.saturnActive) {
		if (SelectorCtx.structureActive) {
			planet = <img id='saturn-svg' src={SaturnCore} alt='Saturn'></img>;
		} else {
			planet = <img id='saturn-svg' src={Saturn} alt='Saturn'></img>;
		}
		surfaceImg = SaturnSurface;
		index = 5;
	} else if (PlanetCtx.uranusActive) {
		if (SelectorCtx.structureActive) {
			planet = <img id='uranus-svg' src={UranusCore} alt='Uranus'></img>;
		} else {
			planet = <img id='uranus-svg' src={Uranus} alt='Uranus'></img>;
		}
		surfaceImg = UranusSurface;
		index = 6;
	} else if (PlanetCtx.neptuneActive) {
		if (SelectorCtx.structureActive) {
			planet = <img id='neptune-svg' src={NeptuneCore} alt='Neptune'></img>;
		} else {
			planet = <img id='neptune-svg' src={Neptune} alt='Neptune'></img>;
		}
		surfaceImg = NeptuneSurface;
		index = 7;
	}

	// Page content state
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
				<div className='planet-img-container'>
					{planet}
					<img
						className={`planet-surface-img ${
							SelectorCtx.surfaceActive ? 'active' : ''
						}`}
						src={surfaceImg}
						alt='planet-surface'
					/>
				</div>
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
