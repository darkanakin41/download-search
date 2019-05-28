var Encore = require('@symfony/webpack-encore');

// the project directory where compiled assets will be stored
Encore.setOutputPath('public/build/');

// the public path used by the web server to access the previous directory
Encore.setPublicPath('/build');
Encore.enableSourceMaps(!Encore.isProduction());

// uncomment to create hashed filenames (e.g. app.abc123.css)
Encore.enableVersioning(Encore.isProduction());

// clean the output folder before build
Encore.cleanupOutputBeforeBuild();

// Common assets
Encore.addEntry('app', './assets/js/app.ts');

// Split huge files
Encore.splitEntryChunks();
Encore.disableSingleRuntimeChunk();

Encore.enableSassLoader();
Encore.enableVueLoader();
Encore.enableTypeScriptLoader((options) => {
    options.appendTsSuffixTo = [/\.vue$/]
});
Encore.enableForkedTypeScriptTypesChecking();

Encore.autoProvideVariables({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
});

// uncomment for legacy applications that require $/jQuery as a global variable
// .autoProvidejQuery()
;

// Use polling instead of inotify
const config = Encore.getWebpackConfig();
config.watchOptions = {
    poll: true,
};

module.exports = config;
