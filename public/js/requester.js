import 'jquery';
import { constants } from 'constants';

function getHeaders(isJSON, useSession) {
    let headers = {},
        token;

    if (isJSON) {
        headers['Content-Type'] = 'application/json';
    }

    if (useSession) {
        token = sessionStorage['sessionId'];
        headers['Authorization'] = 'Kinvey ' + token;
    } else {
        token = constants.kinveyInfo.appKey + ':' + constants.kinveyInfo.appSecret;
        headers['Authorization'] = 'Basic ' + btoa(token);
    }

    return headers;
}

function request(url, method, data, headers) {
       return $.ajax({
            url,
            method,
            contentType: 'application/json',
            headers,
            data: JSON.stringify(data) || {},
            success: function(data) { return data; },
            error: function(err) { return err; }
        });
}

class Requester {
    get(url, useSession) {
        let headers = getHeaders(false, useSession);

        return request(url, 'GET', null, headers);
    }

    post(url, data, useSession) {
        let headers = getHeaders(data, useSession);

        return request(url, 'POST', data ,headers);
    };

    put(url, data, useSession) {
        var headers = getHeaders(data, useSession);

        return request(url, 'PUT', data, headers);
    };

    delete(url, useSession) {
        var headers = getHeaders(false, useSession);

        return request(url, 'DELETE', null, headers);
    };
}

let requester = (() => {
    let request = new Requester();

    return {
        get: request.get,
        post: request.post,
        put: request.put,
        delete: request.delete
    }
})();

export { requester };


