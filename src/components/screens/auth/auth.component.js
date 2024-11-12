import { BaseScreen } from '../base-screen/BaseScreen';

export class Auth extends BaseScreen {
	constructor() {
		super('Auth');
	}

	render() {
		return `
      <div class="auth">
        <h1>Auth</h1>
      </div>
    `;
	}
}
