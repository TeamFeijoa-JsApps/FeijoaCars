import Navigo from 'navigo';
import { templateEngine } from 'templateEngine';
import { userController } from 'userController';

let router = (() => {
    let navigoRouter;

    // Dummy Ads data - will be removed when Kinvey DB is implemented
    let ads = [
        {'title': 'Car 1', 'description': 'Some info 1'},
        {'title': 'Car 2', 'description': 'Some info 2'},
        {'title': 'Car 3', 'description': 'Some info 3'}
    ];

    function init() {
        navigoRouter = new Navigo(null, true);

        navigoRouter.on({
            '': () => navigoRouter.navigate('/home'),
            '/home': () => templateEngine.renderTemplate('home', ads, '#wrapper'),
            '/login': () => $('#wrapper').load('public/templates/login.html'),
            '/register': () => userController.register(),
            '/logout': () => $('#wrapper').html('Logout page')
        })
            .resolve();
    }

    return {
        init
    }
})();

export {router};
