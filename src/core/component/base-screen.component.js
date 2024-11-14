export class BaseScreen {
	/**
	 * create a new base screen instance
	 * @param {Object} options the options for the screen
	 * @param {string} options.title title for the screen
	 */
	constructor({title}) {
		document.title = 'RED Bank | ' + title;
	}

	/**
	 * render the child component content
	 * @returns {HTMLElement}
	 */
	
	render() {
		throw new Error('Render method must be implemented in child class');
	}
}
