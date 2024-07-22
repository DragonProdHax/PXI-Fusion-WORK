(function() {
    // Function to load the script
    function loadScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
    }

    // URL of the script from GitHub
    var scriptUrl = 'https://raw.githubusercontent.com/PXIFusionX/Fusion-Loader/main/Main/Menu';

    // Load the script
    loadScript(scriptUrl, function() {
        console.log('Script loaded successfully.');
    });
})();
