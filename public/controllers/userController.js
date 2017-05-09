import { requester } from 'requester';
import { userData } from 'userData';
import { templateEngine } from 'templateEngine';
import { userValidator } from 'userValidator';
import { homeController } from 'homeController';

let userController = (() => {
    function register() {
        $('#wrapper').load('public/templates/register.html', null, () => {

            // templateEngine.renderTemplate('welcomeMessage', null, '#main-header');
            templateEngine.getTemplate('welcomeMessage', null, '#main-header');

            $("#register-btn").on('click', (ev) => {
                let username = $('#username').val(),
                    email = $('#email').val(),
                    password = $('#password').val();

                userValidator.validateUsername(username);
                userValidator.validateEmail(email);
                userValidator.validatePass(password);

                let user = {
                    username: username,
                    password: password,
                    email: email
                };

                userData.register(user);
            });
        });
    }

    function login() {
        $('#wrapper').load('public/templates/login.html', null, () => {

            // templateEngine.renderTemplate('welcomeMessage', null, '#main-header');
            templateEngine.getTemplate('welcomeMessage', null, '#main-header');

            $("#login-btn").on('click', (ev) => {
                let username = $('#username').val(),
                    password = $('#password').val();

                let user = {
                    username: username,
                    password: password
                };
                userData.login(user);
            });
        });
    }

    function logout() {
        $('#wrapper').empty();
        userData.logout();
    }

    function isLoggedIn() {
        if (sessionStorage['sessionId']) {
            return true;
        } else {
            return false;
        }
    }

    function showProfile(id) {
        homeController.loadWelcomeMessage();
        let user = {};

        if (userController.isLoggedIn()) {
            user.username = sessionStorage['username'];
        }

        userData.showProfile(id);
        // templateEngine.renderTemplate('profile', user, '#wrapper');
        templateEngine.getTemplate('profile', user, '#wrapper');
    }


    return {
        register,
        login,
        logout,
        isLoggedIn,
        showProfile
    }

})();

export { userController };