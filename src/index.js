import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { SelectorContextProvider } from './store/selector-context';
import { PlanetContextProvider } from './store/planet-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<PlanetContextProvider>
		<SelectorContextProvider>
			<App />
		</SelectorContextProvider>
	</PlanetContextProvider>
);
