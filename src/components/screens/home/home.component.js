import { BaseScreen } from '../base-screen/BaseScreen';

export class Home extends BaseScreen {
	constructor() {
		super('Home');
	}

	render() {
		return `
      <div class="home">
        <h1>Home</h1>
      </div>
    `;
	}
}
