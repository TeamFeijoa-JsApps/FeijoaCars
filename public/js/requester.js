import 'jquery';

const appKey = 'kid_Sy_MA1TAe',
    appSecret = '1720b45e3674404b818877ea56656453',
    hostUrl = 'https://baas.kinvey.com/';

function getHeaders(isJSON, useSession) {
    let headers = {},
        token;

    if (isJSON) {
        headers['Content-Type'] = 'application/json';
    }

    if (useSession) {
        token = sessionStorage['sessionID'];
        headers['Authorization'] = 'Kinvey ' + token;
    } else {
        token = appKey + ':' + appSecret;
        headers['Authorization'] = 'Basic ' + btoa(token);
    }

    return headers;
}

function request(url, method, data, headers) {
    let promise = new Promise((resolve, reject) =>
        $.ajax({
            url,
            method,
            contentType: 'application/json',
            headers,
            data: JSON.stringify(data) || {},
            success: resolve(data),
            error: reject
        }));

    return promise;
}

class Requester {
    // constructor(appKey, appSecret, hostUrl) {
    //     this._appKey = appKey;
    //     this._appSecret = appSecret;
    //     this._hostUrl = hostUrl;
    // }



    // request(url, method, data, headers) {
    //     let promise = new Promise((resolve, reject) =>
    //         $.ajax({
    //             url,
    //             method,
    //             contentType: 'application/json',
    //             headers,
    //             data: data,
    //             success: resolve(data),
    //             error: reject
    //         }));
    //
    //     return promise;
    // }

    // getHeaders(isJSON, useSession) {
    //     let headers = {},
    //         token;
    //
    //     if (isJSON) {
    //         headers['Content-Type'] = 'application/json';
    //     }
    //
    //     if (useSession) {
    //         token = sessionStorage['sessionID'];
    //         headers['Authorization'] = 'Kinvey ' + token;
    //     } else {
    //         token = this._appKey + ':' + this._appSecret;
    //         headers['Authorization'] = 'Basic ' + btoa(token);
    //     }
    //
    //     return headers;
    // }

    get(url, useSession) {
        let headers = getHeaders(false, useSession);

        return request(url, 'GET', null, headers);
    }

    post(url, data, useSession) {
        let headers = getHeaders(data, useSession);
        console.log('zakomentiran getHeaders');

        return request(url, 'POST', data ,headers);
    };

    put(url, data, useSession) {
        var headers = getHeaders(data, useSession);

        return request(url, 'PUT', data, headers);
    };

    delete(url, useSession) {
        var headers = getHeaders(false, useSession);

        return request(url, 'DELETE', headers, null);
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


