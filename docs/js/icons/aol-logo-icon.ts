import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('aol-logo-icon')
export class Logo extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="120" height="120" color="#111">
				<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
					<path d="M100 10 v150" />
					<path d="M40 50 h120" />
					<path d="M25 85 a50 50 0 0 0 150 0" />
				</g>
				<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round">
					<path d="M10 175 q30 30 60 0 q30 30 60 0 q30 30 60 0" />
				</g>
			</svg>
		`;
	}
}