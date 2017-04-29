import { templateEngine } from 'templateEngine';

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

        if(sessionStorage['sessionId']) {
            user.username = sessionStorage['username'];
        }

        console.log(user);
        templateEngine.renderTemplate('wellcomeMessage', user, '#main-header' )
    }


    return {
        home
    }
    




})();

export { homeController };