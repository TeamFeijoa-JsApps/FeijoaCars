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
    
    function getAdById(id) {
       if(typeof id === 'object') {
            id = id.id;
        }

        let requestUrl = serviceURL + 'ads/' +id;

        return requester.get(requestUrl, true);
    }

    function getAds() {
        let requestUrl = serviceURL + 'ads/?query={}&sort={"_kmd": -1}&limit=5';

        return requester.get(requestUrl, true);
    }
    
    function updateAd(ad) {
        let requestUrl = serviceURL + 'ads/' + ad._id;

        return requester.put(requestUrl, ad, true);
    }
    
    function deleteAd(ad) {
        let requestUrl = serviceURL + 'ads/' + ad._id;

        return requester.delete(requestUrl, ad, true);
    }

    function getManufacturers() {
        let userId = sessionStorage['userId'],
            requestUrl = serviceURL + 'manufacturers';

        return requester.get(requestUrl, true);
    }

    return {
        addNewAd,
        getUserAds,
        getAdById,
        getAds,
        updateAd,
        deleteAd,
        getManufacturers
    }

})();

export { data };
