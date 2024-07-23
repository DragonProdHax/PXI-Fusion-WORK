(async function() {
    // Function to fetch and execute the script
    async function fetchAndExecuteScript(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const scriptContent = await response.text();
            const script = document.createElement('script');
            script.textContent = scriptContent;
            document.documentElement.appendChild(script);
            script.remove();
            console.log('Script executed successfully.');
        } catch (error) {
            console.error('Error fetching or executing the script:', error);
        }
    }

    // URL of the script from GitHub
    const scriptUrl = 'https://raw.githubusercontent.com/PXIFusionX/Fusion-Loader/main/Main/Menu';

    // Fetch and execute the script
    fetchAndExecuteScript(scriptUrl);
})();
