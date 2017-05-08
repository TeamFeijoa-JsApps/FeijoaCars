import { templateEngine } from 'templateEngine';
import { userController } from 'userController'
import { adController } from 'adController';


let homeController = (() => {

    function home() {
        loadWelcomeMessage();

        if (userController.isLoggedIn()) {
            adController.getNewestAds().then((ads) => {
            
            templateEngine.renderTemplate('home', ads, '#wrapper');
            }).then(() => {
                if(userController.isLoggedIn()) {
                    $('#addNewAd-btn').show();
                    $('#showMyAds-btn').show();
                } else {
                    $('#addNewAd-btn').hide();
                    $('#showMyAds-btn').hide();
                }
            });    
        }
    }
    
    function loadWelcomeMessage() {
        let user = {};

        if (userController.isLoggedIn()) {
            user.username = sessionStorage['username'];
        }

        templateEngine.renderTemplate('welcomeMessage', user, '#main-header')
            .then(() => {
                $('#addNewAd-btn').on('click', (ev) => {
                    location.hash = '/addNewAd';
                });

                $('#showMyAds-btn').on('click', (ev) => {
                    location.hash = '/myAds';
                });
            })
    }

    return {
        home,
        loadWelcomeMessage
    }
})();

export { homeController };