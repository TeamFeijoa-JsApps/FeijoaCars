import Navigo from 'navigo';
import { templateEngine } from 'templateEngine';

let router = (() => {
    let navigoRouter;

    // Dummy Ads data - will be removed when Kinvey DB is implemented
    let ads = [
        { 'title': 'Car 1', 'description': 'Some info 1' },
        { 'title': 'Car 2', 'description': 'Some info 2' },
        { 'title': 'Car 3', 'description': 'Some info 3' }
    ];

    function init() {
        navigoRouter = new Navigo(null, true);

        navigoRouter.on({
            '': () => navigoRouter.navigate('/home'),
            '/home': () => templateEngine.renderTemplate('home', ads, '#wrapper'),
            '/login': () => {
                $.get('public/templates/login.html', function (data) {
                    $('#wrapper').html(data);
                })
            },
            '/register': () => $.get('public/templates/register.html', function(data){
                $('#wrapper').html(data);
            }),
            '/logout': () => $('#wrapper').html('Logout page')
        })
            .resolve();
    }

    return {
        init
    }
})();

export { router };
