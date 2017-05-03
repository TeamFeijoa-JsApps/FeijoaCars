import { Ad } from 'ad';
import { data } from 'data';
import { templateEngine } from 'templateEngine';
import { homeController } from 'homeController';
import { adValidator } from 'adValidator';

let adController = (() => {

    function addNewAd() {
        homeController.loadWelcomeMessage();

        $('#wrapper').load('public/templates/addNewAd.html', null, () => {
            $("#submitAdInfo-btn").on('click', (ev) => {
                let title = $('#title').val(),
                    make = $('#make').val(),
                    model = $('#model').val(),
                    price = $('#price').val(),
                    fuel = $('#fuel').val(),
                    power = $('#power').val(),
                    mileage = $('#mileage').val(),
                    gearbox = $('#gearbox').val(),
                    manufactureDate = $('#manufactureDate').val(),
                    imageUrl = $('#image').val();

                    adValidator.validateModel(model);
                    adValidator.validatePrice(price);
                    adValidator.validatePower(power);
                    adValidator.validateMileage(mileage);

                let newAd = new Ad(title, make, model, price, fuel, power, mileage, gearbox, manufactureDate, imageUrl);

                data.addNewAd(newAd)
                    .then((success) => {
                        console.log(success);
                        location.hash = '/myAds';
                    });
            });
        });
    }

    function displayAds() {
        homeController.loadWelcomeMessage();

        data.getUserAds()
            .then((userAds) => {
                templateEngine.renderTemplate('myAds', userAds, '#wrapper');
            } )
    }

    function getNewestAds() {
        homeController.loadWelcomeMessage();

        return data.getAds();
    }

    return {
        addNewAd,
        displayAds,
        getNewestAds
    }
})();

export { adController };