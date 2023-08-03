import { COMMANDS, CONFIG } from './constants.js';

import React, { Component } from 'react';

class Commands extends Component {

	render() {
		return (
			<CommandsElement />
		);
	}

}

const CommandsElement = () => {
	const commands = [];

	for (const [key, { name, url }] of COMMANDS.entries()) {
		if (!name || !url) {
			continue;
		}

		commands.push(CommandElement(key, name, url));
	}

	return (<nav>
		<menu className="commands">
			{commands.map((component, index) => (
				<div key={index}>{component}</div>
			))}
		</menu>
	</nav>);
};

const CommandElement = (key, name, url) => {
	return (<li>
		<a
			className="command"
			href={url ? url : '#'}
			rel="noopener noreferrer"
			target={CONFIG.openLinksInNewTab ? '_blank' : '_self'}
		>
			<span className="key">{key}</span>
			<span className="name">{name}</span>
		</a>
	</li>);
};

export default Commands;