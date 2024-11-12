import { BaseScreen } from '../base-screen/BaseScreen';

export class NotFound extends BaseScreen {
	constructor() {
		super('Not found');
	}

	render() {
		return `
      <div class="not-found">
        <h1>Not found</h1>
      </div>
    `;
	}
}
