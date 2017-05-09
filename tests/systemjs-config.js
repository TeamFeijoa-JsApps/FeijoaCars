SystemJS.config({
    transpiler: 'plugin-babel',

    map: {
        'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // // libs
        'jquery': '../public/libs/jquery/dist/jquery.js',
        // 'bootstrap': '../public/libs/bootstrap/dist/js/bootstrap.js',
        // 'handlebars': '../public/libs/handlebars/handlebars.js',
        // 'navigo': '../public/libs/navigo/lib/navigo.js',
        'toastr': '../public/libs/toastr/package/toastr.js',

        // // starting script
        // 'app': '../public/js/app.js',

        'tests': './tests.js',

        // // scripts
        // // 'templates' : './public/templates/templates.js',
        // 'templateEngine': '../public/js/templateEngine.js',
        // 'router': '../public/js/router.js',
        // 'requester': '../public/js/requester.js',
        // 'userData': '../public/js/userData.js',
        // 'data': '../public/js/data.js',
        'userValidator': '../public/js/validators/userValidator.js',
        'adValidator': '../public/js/validators/adValidator.js',
        // 'constants': '../public/utils/constants.js',

        // scripts/controllers
        // 'userController': '../public/controllers/userController.js',
        // 'homeController': '../public/controllers/homeController.js',
        // 'adController': '../public/controllers/advertController.js',


        'mocha': "../node_modules/mocha/mocha.js",
        'chai': "../node_modules/chai/chai.js",
        'sinon': "../node_modules/sinon/pkg/sinon.js",
        // // scripts/models
        // 'user': '../public/models/user.js',
        // 'ad': '../public/models/ad.js'
    }
});

System.import('tests');



