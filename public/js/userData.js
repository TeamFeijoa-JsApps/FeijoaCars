import { requester } from 'requester';
import { constants } from 'constants';

const serviceURL = constants.kinveyInfo.hostUrl + 'user/' + constants.kinveyInfo.appKey + '/';

let userData = (() => {
    function register(user) {
        return requester.post(serviceURL, user, false)
            .pipe((success) => {
                sessionStorage['sessionId'] = success._kmd.authtoken;
                sessionStorage['username'] = success.username;
                sessionStorage['userId'] = success._id;

                console.log(sessionStorage);
            }).done(()=> {
                location.hash = '/home';
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