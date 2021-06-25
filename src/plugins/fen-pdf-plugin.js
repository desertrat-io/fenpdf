import {PluginError} from "../exceptions/plugin-error";

/**
 * Defines what a plugin should look like. Plugins are the basis for all functionality within the library
 * @interface
 */
export class IFenPDFPlugin {

    constructor() {
        throw new PluginError("Plugins must extend from this interface");
    }

    /**
     * The name of the plugin as it would appear on the interface, or how it will be used internally
     * @returns {String}
     */
    get pluginName() {
        return null;
    }

    /**
     * One of the predefined plugin types from the FenPDFPluginType enum
     * @returns {String}
     */
    get pluginType() {
        return null;
    }

    /**
     * Only really applies to things like buttons and actions on the UI
     * @returns {boolean}
     */
    get hasIcon() {
        return false;
    }

    /**
     * Returns the implementing class
     * @returns {class}
     */
    get pluginImpl() {
        return null;
    }

    /**
     * If needed, the help text to display based on the type of plugin
     * @returns {String}
     */
    get pluginHelpText() {
        return null;
    }

    /**
     * Object containing key/prop values that correspond to css styles
     * @returns {{}}
     */
    get pluginStyles() {
        return null;
    }

    /**
     * Is this plugin intended to render on screen?
     * @returns {boolean}
     */
    get doesRender() {
        return false;
    }

    /**
     * Is this plugin able and intended to be an addon to another plugin?
     * @returns {boolean}
     */
    get isAddon() {
        return false;
    }

    /**
     *
     * @param {IFenPdfPluginAddon} addonPlugin
     */
    // eslint-disable-next-line no-unused-vars
    addAddonToSlot(addonPlugin) {}

    /**
     * Generates a promise that represents the creation, mounting, and execution of a plugin
     * @returns {Promise<IFenPDFPlugin>}
     */
    async generateActionPromise() {
        return null;
    }

    /**
     * Returns a Promise representing just this plugin
     * @param pluginConfig
     * @returns {Promise<IFenPDFPlugin>}
     */
    // eslint-disable-next-line no-unused-vars
    async createPlugin(pluginConfig) {
        return null;
    }

    /**
     * Create and load the plugin at the same time
     * @returns {Promise<IFenPDFPlugin>}
     */
    async loadPlugin() {
        return null;
    }

    /**
     * Remove the plugin completely, destroying all data, and any view information associated with it.
     */
    async destroyPlugin() {}

    /**
     * Hooks represent the actual function of the plugin. When the hook collection is run through, all functions
     * inside are executed in the order in which they are added.
     * @param {Object} hookObject - Object containing the hook information
     */
    // eslint-disable-next-line no-unused-vars
    attachPluginHook(hookObject) {
        throw new PluginError("This method should not be called outside the implementing class");
    }

    /**
     * Any information needed to describe what an icon should be. The returned object should be in the following format
     * @returns {Object}
     */
    iconDef() {
        return null;
    }

    /**
     * Execute all added hooks to to operate the plugin
     * @returns {Object,null} [runResult=null]
     */
    run() {
        throw new PluginError("All plugins must implement the run method.");
    }
}
