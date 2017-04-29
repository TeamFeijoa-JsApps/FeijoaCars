import { requester } from 'requester';
import { constants } from 'constants';

const serviceURL = constants.kinveyInfo.hostUrl + 'user/' + constants.kinveyInfo.appKey + '/';

function setSessionStorage(success) {
    sessionStorage['sessionId'] = success._kmd.authtoken;
    sessionStorage['username'] = success.username;
    sessionStorage['userId'] = success._id;
}

let userData = (() => {
    function register(user) {
        return requester.post(serviceURL, user, false)
            .then((success) => {
                setSessionStorage(success);

                login(user);
            })
            .done(()=> {
                location.hash = '/home';
            });
    }

    function login(user) {
        let requestUrl = serviceURL + 'login';

        return requester.post(requestUrl, user, false)
            .then((success) => {
                setSessionStorage(success);
            }).done(() => {
                location.hash = '/home';
            })
    }

    function logout() {
        let requestUrl = serviceURL + '_logout';
        return requester.post(requestUrl, {}, true)
            .then(() => {
                sessionStorage.clear()
            }).done(() => {
                location.hash = '/home';
            });
    }

    return {
        register,
        login,
        logout
    }
})();

export { userData };