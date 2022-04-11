// sets the default background color of the extension
let color = '#c3b5ed"';

// executes on installation
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});

