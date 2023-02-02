import React from 'react';

const Menu = () => {
	return (
		<menu className='nav__tablet-desktop-menu'>
			<li className='list-item'>
				<button className='menu-btn' id='mercury'>
					Mercury
				</button>
			</li>
			<li className='list-item'>
				<button className='menu-btn' id='venus'>
					Venus
				</button>
			</li>
			<li className='list-item'>
				<button className='menu-btn' id='earth'>
					Earth
				</button>
			</li>
			<li className='list-item'>
				<button className='menu-btn' id='mars'>
					Mars
				</button>
			</li>
			<li className='list-item'>
				<button className='menu-btn' id='jupiter'>
					Jupiter
				</button>
			</li>
			<li className='list-item'>
				<button className='menu-btn' id='saturn'>
					Saturn
				</button>
			</li>
			<li className='list-item'>
				<button className='menu-btn' id='uranus'>
					Uranus
				</button>
			</li>
			<li className='list-item'>
				<button className='menu-btn' id='neptune'>
					Neptune
				</button>
			</li>
		</menu>
	);
};

export default Menu;
