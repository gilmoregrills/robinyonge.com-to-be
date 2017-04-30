import React from 'react';
import {render} from 'react-dom';
import TabsMenu from './tabsMenu.jsx';
import Sidebar from './sidebar.jsx';

class Body extends React.Component {

	render() {
		return (
			<div>
			<TabsMenu />
			<Sidebar />
			</div>
		);
	}

}

export default Body;