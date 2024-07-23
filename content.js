(function() {
    // Function to execute the script
    function executeScript(scriptContent) {
        const script = document.createElement('script');
        script.textContent = scriptContent;
        document.documentElement.appendChild(script);
        script.remove();
        console.log('Script executed successfully.');
    }

    // Request the script from the background script
    chrome.runtime.sendMessage({ action: 'fetchScript' }, (response) => {
        if (response.scriptContent) {
            executeScript(response.scriptContent);
        } else {
            console.error('Error fetching or executing the script:', response.error);
        }
    });
})();
