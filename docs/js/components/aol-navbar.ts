import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('aol-navbar')
export class Navbar extends LitElement {
	createRenderRoot() {
		return this;
	}

	@property({ type: String }) selected: string = 'Home';

	@property({ type: Array })
	links: Array<{
		label: string;
		ref: string;
	}> = [
		{ ref: '/', label: 'Home' },
		{ ref: '/other', label: 'Other' },
	];

	render() {
		return html`
			<div class="navbar bg-base-100 shadow-sm">
				<div class="navbar-start">
					<div class="drawer">
						<input id="aol-drawer" type="checkbox" class="drawer-toggle" />
						<div role="button">
							<label for="aol-drawer" class="btn btn-ghost btn-circle drawer-button">
								<aol-menu-icon />
							</label>
						</div>
						<div class="drawer-side">
							<label for="aol-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
							<div class="bg-base-200 menu text-base-content min-h-full w-80">
								<div class="flex justify-center">
									<a class="center-content text-2xl font-thin tracking-widest my-5" href="/">
										<aol-logo-icon />
									</a>
								</div>
								<ul class="p-4">
									${this.links.map(
										link => html`
										<li>
											<a
												href="${link.ref}"
												class="${link.label === this.selected ? 'menu-active' : ''}"
											>
												${link.label}
											</a>
										</li>
									`)}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="navbar-center">
					<a class="btn btn-ghost text-4xl font-thin tracking-widest" href="/">ANCHOR OF LIFE</a>
				</div>
				<div class="navbar-end">
				</div>
			</div>
		`;
	}
}