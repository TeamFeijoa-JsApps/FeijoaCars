import {requester} from 'requester';
import {router} from 'router';

const appKey = 'kid_Sy_MA1TAe',
    appSecret = '1720b45e3674404b818877ea56656453',
    hostUrl = 'https://baas.kinvey.com/';

const serviceURL = hostUrl + 'user/' + appKey + '/';


let userData = (() => {
    function register(user) {
 // debugger;
        return requester.post(serviceURL, user, false)
            .pipe((success) => {
                console.log('after success post');
                sessionStorage['sessionId'] = success._kmd.authtoken;
                sessionStorage['username'] = success.username;
                sessionStorage['userId'] = success._id;

                
            }).done(()=>{
                router.init();
                router.navigate('/home');
            });
    }

    function login(user) {
        let requestUrl = serviceURL + 'login';

        return requester.post(requestUrl, user, false);
    }

    function logout() {
        let requestUrl = serviceURL + '_logout';

        return requester.post(requestUrl, null, true);

    }

    return {
        register,
        login,
        logout
    }
})();

export { userData };