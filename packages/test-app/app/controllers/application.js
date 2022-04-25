import Controller from '@ember/controller';
import debugLogger from 'ember-debug-logger';

import { service } from '@ember/service';

export default class ApplicationController extends Controller {
	// #region Accessed Services
	@service('router') emberRouter;
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

	// #region DOM Event Handlers - Drawer / Sidebar
	// #endregion

	// #region DOM Event Handlers - Drawer / Sidebar List Items
	// #endregion

	// #region DOM Event Handlers - Alert / Snackbar
	// #endregion

	// #region Computed Properties
	// #endregion

	// #region Private Methods
	// #endregion

	// #region Default Sub-components
	// #endregion

	// #region Private Attributes
	#debug = debugLogger?.('controller:application');
	// #endregion
}
