import {requester} from 'requester';
import {User} from 'user';
import {userData} from 'userData';
import {templateEngine} from 'templateEngine';


let userController = (() => {
    function register() {
        $('#wrapper').load('public/templates/register.html', null, () => {
            $("#register-btn").on('click', (ev) => {
                let username = $('#username').val(),
                    email = $('#email').val(),
                    password = $('#password').val();

                let user = new User(username, email, password);

                userData.register(user);
            });
        });
    }

    return {
        register: register
    }

})();

export {userController};