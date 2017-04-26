import {requester} from 'requester';
import {router} from 'router';
import {User} from 'user';
import {userData} from 'userData';
import {templateEngine} from 'templateEngine';


let userController = (() => {
    function register() {
        console.log('inside');
        $('#wrapper').load('public/templates/register.html', null, () => {
            console.log('after templating');
            $("#register-btn").on('click', (ev) => {
                let username = $('#username').val(),
                    email = $('#email').val(),
                    password = $('#password').val();

                let user = new User(username, email, password);

                userData.register(user)
                    .then(() => {
                        router.navigate('/home');
                        // location.href = '/home';
                    });
                });
        });
    }

    return {
        register: register
    }




})();


export { userController };