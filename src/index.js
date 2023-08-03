import React, { Component } from 'react';

import { createRoot } from 'react-dom/client';

import "./main.scss";

import Commands from './commands';
import Search from './search';

class App extends Component {

	render() {
		return (
			<>
				<Commands />
				<Search />
			</>
		);
	}

}

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);