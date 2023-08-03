import React, { Component } from 'react';

import { createRoot } from 'react-dom/client';

import "./main.scss";

import Commands from './commands';

class App extends Component {

	render() {
		return (
			<Commands />
		);
	}

}

//customElements.define('commands-component', Commands);
//customElements.define('search-component', Search);

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);