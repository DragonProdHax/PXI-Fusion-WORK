chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'fetchScript') {
        fetch('https://raw.githubusercontent.com/PXIFusionX/Fusion-Loader/main/Main/Menu')
            .then(response => response.text())
            .then(scriptContent => {
                sendResponse({ scriptContent });
            })
            .catch(error => {
                console.error('Error fetching script:', error);
                sendResponse({ error: error.message });
            });
        // Keep the message channel open for the asynchronous response
        return true;
    }
});
