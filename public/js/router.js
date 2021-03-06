import Navigo from 'navigo';
import { userController } from 'userController';
import { homeController } from 'homeController';
import { adController } from 'adController';

let router = (() => {
    let navigoRouter;

    function init() {
        navigoRouter = new Navigo(null, true);

        navigoRouter.on({
            '': () => navigoRouter.navigate('/home'),
            '/home': () => homeController.home(),
            '/login': () => userController.login(),
            '/register': () => userController.register(),
            '/logout': () => userController.logout(),
            '/profile/:id': (id) => userController.showProfile(id),
            '/addNewAd': () => adController.newAd(),
            '/myAds': () => adController.displayAds(),
            '/myAds/:id': (id) => adController.getAd(id)
        })
            .resolve();
    }

    return {
        init
    }
})();

export {router};
