SystemJS.config({
    transpiler: 'plugin-babel',

    map: {
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // libs
        'jquery': './libs/jquery/dist/jquery.js',
        'bootstrap': './libs/bootstrap/dist/js/bootstrap.js',
        'handlebars': './libs/handlebars/handlebars.js',
        'navigo': './libs/navigo/lib/navigo.js',

        // starting script
        'app': './js/app.js'

        // scripts
    }
});

System.import('app');



