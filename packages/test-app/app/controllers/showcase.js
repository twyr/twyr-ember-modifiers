import Controller from '@ember/controller';
import debugLogger from 'ember-debug-logger';

export default class ShowcaseController extends Controller {
	// #region Accessed Services
	// #endregion

	// #region Tracked Attributes
	// #endregion

	// #region Constructor
	constructor() {
		super(...arguments);
		this.#debug?.(`constructor`);
	}
	// #endregion

	// #region Lifecycle Hooks
	willDestroy() {
		this.#debug?.(`willDestroy`);
		super.willDestroy(...arguments);
	}
	// #endregion

	// #region DOM Event Handlers - Banner
	// #endregion

	// #region DOM Event Handlers
	// #endregion

	// #region Computed Properties
	// #endregion

	// #region Private Methods
	// #endregion

	// #region Default Sub-components
	// #endregion

	// #region Private Attributes
	#debug = debugLogger?.('controller:showcase');
	// #endregion
}
