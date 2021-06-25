import {IFenPDFPlugin} from "./fen-pdf-plugin";
import {PluginError} from "../exceptions/plugin-error";

/**
 * This interface defines what an "addon" looks like. An addon is a special type of plugin that "adds"
 * a feature or functionality to another plugin, creating a decorator pattern.
 * @Interface
 */
export class IFenPdfPluginAddon extends IFenPDFPlugin {

    /**
     * We already know just by extending this interface that the implementation is an addon
     * @returns {boolean}
     */
    get isAddon() {
        return true;
    }

    /**
     * Actually bind this addon to a plugin
     * @param {IFenPDFPlugin} pluginInstance
     */
    addToExistingPlugin(pluginInstance) {
        if (pluginInstance instanceof IFenPdfPluginAddon) {
            throw new PluginError("Cannot add addons to other addons");
        }
    }
}
