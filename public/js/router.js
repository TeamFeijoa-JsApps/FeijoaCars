import Navigo from 'navigo';
import { userController } from 'userController';
import { homeController } from 'homeController';

let router = (() => {
    let navigoRouter;

    function init() {
        navigoRouter = new Navigo(null, true);

        navigoRouter.on({
            '': () => navigoRouter.navigate('/home'),
            '/home': () => homeController.home(),
            '/login': () => userController.login(),
            '/register': () => userController.register(),
            '/logout': () => userController.logout()
        })
            .resolve();
    }

    return {
        init
    }
})();

export {router};
