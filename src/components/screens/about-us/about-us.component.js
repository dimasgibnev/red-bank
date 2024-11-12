import { BaseScreen } from '../base-screen/BaseScreen';

export class AboutUs extends BaseScreen {
	constructor() {
		super('About us');
	}

	render() {
		return `
      <div class="about-us">
        <h1>About us</h1>
      </div>
    `;
	}
}
