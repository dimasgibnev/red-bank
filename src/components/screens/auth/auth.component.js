import { BaseScreen } from '@/core/component/base-screen.component';

export class Auth extends BaseScreen {
	constructor() {
		super({title: 'Auth'});
	}

	render() {
		return `
      <div class="auth">
        <h1>Auth</h1>
      </div>
    `;
	}
}
