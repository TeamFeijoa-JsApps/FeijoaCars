import { userController } from "userController";
import { requester } from "requester";
import { constants } from "constants";

const serviceURL = constants.kinveyInfo.hostUrl + 'appdata/' + constants.kinveyInfo.appKey + '/';

let data = (() => {

    function addNewAd(ad) {
        let requestUrl = serviceURL + 'ads';
        return requester.post(requestUrl, ad, true);
    }

    function getUserAds() {
        let userId = sessionStorage['userId'],
            requestUrl = serviceURL + 'ads/?query={"_acl": {"creator":"' +userId + '"}}';

        return requester.get(requestUrl, true);

    }

    function getAds() {
        let requestUrl = serviceURL + 'ads/?query={}&limit=5';

        return requester.get(requestUrl, true);
    }

    return {
        addNewAd,
        getUserAds,
        getAds
    }

})();

export { data };
