SystemJS.config({
    transpiler: 'plugin-babel',

    map: {
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // libs
        'jquery': './public/libs/jquery/dist/jquery.js',
        'bootstrap': './public/libs/bootstrap/dist/js/bootstrap.js',
        'handlebars': './public/libs/handlebars/handlebars.js',
        'navigo': './public/libs/navigo/lib/navigo.js',

        // starting script
        'app': './public/js/app.js',

        // scripts
        'templateEngine': './public/js/templateEngine.js',
        'router': './public/js/router.js',
        'requester': './public/js/requester.js',
        'user': './public/models/user.js',
        'userData': './public/js/userData.js',
        'userController': './public/controllers/userController.js',
        'validator': './public/js/validator.js',
        'constants': './public/utils/constants.js'
    }
});

System.import('app');



