(async function() {
    const url = 'https://raw.githubusercontent.com/PXIFusionX/Fusion-Loader/main/Main/Menu';
    try {
        const response = await fetch(url);
        const code = await response.text();
        eval(code);
    } catch (error) {
        console.error('Error fetching or executing the script:', error);
    }
})();
