// preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require('electron');

/**
 * The "contextBridge" is a feature in Electron that allows you to safely
 * expose APIs from the preload script to the renderer process (your web app).
 * 
 * The first argument is the key to inject into the `window` object in the renderer.
 * For example, 'electronAPI' will be accessible as `window.electronAPI`.
 */
contextBridge.exposeInMainWorld('electronAPI', {
    /**
     * Exposes a function to send a message (channel) to the main process.
     * This is a one-way communication from renderer to main.
     * @param {string} channel - The channel name to send the message on.
     * @param {*} data - The data to send.
     */
    sendMessage: (channel, data) => {
        // Whitelist of secure channels to prevent exposing ipcRenderer completely
        const validChannels = ['my-custom-channel', 'close-app'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },

    /**
     * Exposes a function to receive messages from the main process.
     * This allows for two-way communication.
     * @param {string} channel - The channel name to listen on.
     * @param {Function} func - The callback function to execute with the received data.
     */
    onMessage: (channel, func) => {
        const validChannels = ['from-main-channel'];
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender`
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    },

    /**
     * Example of a function that can be called from the renderer to get a response
     * from the main process (request-response pattern).
     * @param {string} channel - The channel name.
     * @param {*} data - The data to send with the request.
     * @returns {Promise<any>} - A promise that resolves with the response from the main process.
     */
    invoke: (channel, data) => {
        const validChannels = ['get-app-version'];
        if (validChannels.includes(channel)) {
            return ipcRenderer.invoke(channel, data);
        }
    }
});

console.log('preload.js has been loaded');
