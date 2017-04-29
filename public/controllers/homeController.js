import { templateEngine } from 'templateEngine';
import { userController } from 'userController'

let homeController = (() => {
    function home() {
        loadWellcomeMessage();

        let ads = [
            {'title': 'Car 1', 'description': 'Some info 1'},
            {'title': 'Car 2', 'description': 'Some info 2'},
            {'title': 'Car 3', 'description': 'Some info 3'}
        ];

        templateEngine.renderTemplate('home', ads, '#wrapper')
    }
    
    function loadWellcomeMessage() {
        let user = {};

        if(userController.isLoggedIn()) {
            user.username = sessionStorage['username'];
        }

        templateEngine.renderTemplate('wellcomeMessage', user, '#main-header' )
    }

    return {
        home
    }
})();

export { homeController };