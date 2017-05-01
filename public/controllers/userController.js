import { requester } from 'requester';
import { userData } from 'userData';
import { templateEngine } from 'templateEngine';
import { validator } from 'validator';

let userController = (() => {
    function register() {
        $('#wrapper').load('public/templates/register.html', null, () => {
            $("#register-btn").on('click', (ev) => {
                let username = $('#username').val(),
                    email = $('#email').val(),
                    password = $('#password').val();

                validator.validateUsername(username);
                validator.validatePass(password);
                validator.validateEmail(email);

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
        let user = {};

        if(userController.isLoggedIn()) {
            user.username = sessionStorage['username'];
        }

        userData.showProfile(id);
        templateEngine.renderTemplate('profile', user, '#wrapper');
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