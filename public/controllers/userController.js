import {requester} from 'requester';
import {userData} from 'userData';
import {templateEngine} from 'templateEngine';
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
        $('#logout-btn').on('click', (ev) => {
            userData.logout();
        })
    }

    return {
        register: register,
        login: login,
        logout: logout
    }

})();

export {userController};