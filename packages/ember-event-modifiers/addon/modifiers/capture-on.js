import Modifier from 'ember-modifier';
import debugLogger from 'ember-debug-logger';

import { registerDestructor } from '@ember/destroyable';

export default class CaptureOnModifier extends Modifier {
	// #region Accessed Services
	// #endregion

	// #region Tracked Attributes
	// #endregion

	// #region Untracked Public Fields
	// #endregion

	// #region Constructor / Destructor
	constructor() {
		super(...arguments);
		this.#debug?.(`constructor`);

		registerDestructor?.(this, this?.destructor);
	}

	destructor(instance) {
		// this.#debug?.(`destructor`);
		instance?._manageEventListener?.();
	}
	// #endregion

	// #region Lifecycle Hooks
	modify(element, [event, eventListener]) {
		super.modify?.(...arguments);
		if (this.#event === event && this.#eventHandler === eventListener)
			return;

		this.#debug?.(
			`modify:\nelement: `,
			element,
			`\nevent: `,
			event,
			`\neventListener: `,
			eventListener
		);

		this?._manageEventListener?.(event, eventListener);
	}
	// #endregion

	// #region DOM Event Handlers
	// #endregion

	// #region Computed Properties
	// #endregion

	// #region Private Methods
	_manageEventListener(event, eventListener) {
		if (this.#event && this.#eventHandler)
			document?.removeEventListener?.(
				this.#event,
				this.#eventHandler,
				this.#defaultOptions
			);

		this.#event = event;
		this.#eventHandler = eventListener;

		if (this.#event && this.#eventHandler)
			document?.addEventListener?.(
				this.#event,
				this.#eventHandler,
				this.#defaultOptions
			);
	}
	// #endregion

	// #region Private Attributes
	#debug = debugLogger?.('modifier:capture-on');

	#defaultOptions = {
		capture: true,
		passive: false
	};

	#event = null;
	#eventHandler = null;
	// #endregion
}
