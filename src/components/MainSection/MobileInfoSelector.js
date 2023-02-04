import React, { useContext } from 'react';

import SelectorContext from '../../store/selector-context';

const MobileInfoSelector = () => {
	const selectorCtx = useContext(SelectorContext);
	return (
		<menu className='mobile-info-selector'>
			<li>
				<button
					onClick={selectorCtx.onOverviewClicked}
					className={`overview ${selectorCtx.overviewActive ? 'active' : ''}`}
				>
					Overview
				</button>
			</li>
			<li>
				<button
					onClick={selectorCtx.onStructureClicked}
					className={`structure ${selectorCtx.structureActive ? 'active' : ''}`}
				>
					Structure
				</button>
			</li>
			<li>
				<button
					onClick={selectorCtx.onSurfaceClicked}
					className={`surface ${selectorCtx.surfaceActive ? 'active' : ''}`}
				>
					Surface
				</button>
			</li>
		</menu>
	);
};

export default MobileInfoSelector;
