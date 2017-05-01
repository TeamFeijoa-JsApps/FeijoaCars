import { Ad } from 'ad';
import { data } from 'data';
import { templateEngine } from 'templateEngine';
import { homeController } from 'homeController';

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
                    manufactureDate = $('#manufactureDate').val();

                let newAd = new Ad(title, make, model, price, fuel, power, mileage, gearbox, manufactureDate);

                data.addNewAd(newAd)
                    .then(() => {
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