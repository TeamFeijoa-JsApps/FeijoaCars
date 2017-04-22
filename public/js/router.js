import Navigo from 'navigo';
import 'jquery';

let router = (() => {
    let navigoRouter;

    function init() {
        navigoRouter = new Navigo(null, true);

        navigoRouter.on({
            '': () => navigoRouter.navigate('/home'),
            '/home':() => $('#wrapper').html('Home page'),
            '/login':() => $('#wrapper').html('Login page'),
            '/register':() => $('#wrapper').html('Register page'),
            '/logout':() => $('#wrapper').html('Logout page')
        })
            .resolve();
    }

    return {
        init
    }
})();

export { router };
