import React, { useState } from 'react';
import './App.css';
import MobileMenu from './components/Nav/MobileMenu';

import Nav from './components/Nav/Nav';
function App() {
	// Mobile Menu State
	const [mobileMenuActive, setMobileMenuActive] = useState(false);

	const mobileMenuHandler = () => {
		if (!mobileMenuActive) {
			setMobileMenuActive(true);
		} else {
			setMobileMenuActive(false);
		}
	};

	return (
		<React.Fragment>
			<Nav menuActive={mobileMenuActive} onHamburgerClick={mobileMenuHandler} />
			{mobileMenuActive && <MobileMenu />}
			<main>
				<menu className='mobile-info-selector'>
					<li>
						<button>Overview</button>
					</li>
					<li>
						<button>Structure</button>
					</li>
					<li>
						<button>Surface</button>
					</li>
				</menu>
			</main>
		</React.Fragment>
	);
}

export default App;
