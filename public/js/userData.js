import { requester } from 'requester';
import { constants } from 'constants';
import toastr from 'toastr';

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "150",
    "hideDuration": "1000",
    "timeOut": "2000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

const serviceURL = constants.kinveyInfo.hostUrl + 'user/' + constants.kinveyInfo.appKey + '/';

function setSessionStorage(success) {
    sessionStorage['sessionId'] = success._kmd.authtoken;
    sessionStorage['username'] = success.username;
    sessionStorage['userId'] = success._id;
}

let userData = (() => {
    function register(user) {
        return requester.post(serviceURL, user, false)
            .catch((er) => {
                toastr['error'](er.responseJSON.description);
            })
            .then((success) => {
                setSessionStorage(success);
                login(user);
            })
            .done(() => {
                location.hash = '/home';
                toastr['success']('You have successfully registered.')
            });
    }

    function login(user) {
        let requestUrl = serviceURL + 'login';

        return requester.post(requestUrl, user, false)
            .catch((er) => {
                toastr['error'](er.responseJSON.description);
            })
            .then((success) => {
                setSessionStorage(success);
            })
            .done(() => {
                location.hash = '/home';
                toastr['success']('You have successfully logged in.')
            })
    }

    function logout() {
        let requestUrl = serviceURL + '_logout';
        return requester.post(requestUrl, {}, true)
            .then(() => {
                sessionStorage.clear()
            }).done(() => {
                location.hash = '/home';
                toastr['success']('You have successfully logged out.')
            });
    }

    function showProfile(id) {
        id = sessionStorage['userId'];
        location.hash = '/profile/' + id;
    }

    return {
        register,
        login,
        logout,
        showProfile
    }
})();

export { userData };