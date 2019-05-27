var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // clean the output folder before build
    .cleanupOutputBeforeBuild()

    // Common assets
    .addEntry('app', './assets/js/app.js')

    // Function specific assets
    .addEntry('calendar', './assets/js/calendar.js')

    // Split huge files
    .enableSingleRuntimeChunk()

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()

    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    })

// uncomment for legacy applications that require $/jQuery as a global variable
// .autoProvidejQuery()
;

// Use polling instead of inotify
const config = Encore.getWebpackConfig();
config.watchOptions = {
    poll: true,
};

module.exports = Encore.getWebpackConfig();
