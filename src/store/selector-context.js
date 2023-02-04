import React, { useState } from 'react';

const SelectorContext = React.createContext({
	overviewActive: true,
	structureActive: false,
	surfaceActive: false,
	onOverviewClicked: () => {},
	onStructureClicked: () => {},
	onSurfaceClicked: () => {},
});

export const SelectorContextProvider = ({ children }) => {
	// Selector State
	const [overviewActive, setOverviewActive] = useState(true);
	const [structureActive, setStructureActive] = useState(false);
	const [surfaceActive, setSurfaceActive] = useState(false);

	const overviewIsActiveHandler = () => {
		if (overviewActive) return;
		setOverviewActive(true);
		setStructureActive(false);
		setSurfaceActive(false);
	};
	const structureIsActiveHandler = () => {
		if (structureActive) return;
		setOverviewActive(false);
		setStructureActive(true);
		setSurfaceActive(false);
	};
	const surfaceIsActiveHandler = () => {
		if (surfaceActive) return;
		setOverviewActive(false);
		setStructureActive(false);
		setSurfaceActive(true);
	};

	return (
		<SelectorContext.Provider
			value={{
				overviewActive: overviewActive,
				structureActive: structureActive,
				surfaceActive: surfaceActive,
				onOverviewClicked: overviewIsActiveHandler,
				onStructureClicked: structureIsActiveHandler,
				onSurfaceClicked: surfaceIsActiveHandler,
			}}
		>
			{children}
		</SelectorContext.Provider>
	);
};

export default SelectorContext;
