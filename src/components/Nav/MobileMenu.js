import React from 'react';

const MobileMenu = () => {
	return (
		<menu className='mobile-menu'>
			<li className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet mercury'></div>
					<p>Mercury</p>
				</div>
			</li>
			<li className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet venus'></div>
					<p>Venus</p>
				</div>
			</li>
			<li className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet earth'></div>
					<p>Earth</p>
				</div>
			</li>
			<li className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet mars'></div>
					<p>Mars</p>
				</div>
			</li>
			<li className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet jupiter'></div>
					<p>Jupiter</p>
				</div>
			</li>
			<li className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet saturn'></div>
					<p>Saturn</p>
				</div>
			</li>
			<li className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet uranus'></div>
					<p>uranus</p>
				</div>
			</li>
			<li className='list-item'>
				<div className='menu-item-container'>
					<div className='mobile-menu__planet neptune'></div>
					<p>neptune</p>
				</div>
			</li>
		</menu>
	);
};

export default MobileMenu;
