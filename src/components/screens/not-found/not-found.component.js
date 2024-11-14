import { BaseScreen } from "@/core/component/base-screen.component";

export class NotFound extends BaseScreen {
	constructor() {
		super({title: 'Not found'});
	}

	render() {
		return `
      <div class="not-found">
        <h1>Not found</h1>
      </div>
    `;
	}
}
