import { Ad } from 'ad';
import { data } from 'data';
import { templateEngine } from 'templateEngine';
import { homeController } from 'homeController';
import { adValidator } from 'adValidator';

let adController = (() => {

    function newAd() {
        homeController.loadWelcomeMessage();

        data.getManufacturers()
            .then((result) => {
                let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    years = [],
                    currentYear = new Date().getFullYear();

                for (let i = 1930; i <= currentYear; i++) {
                    years.push(i);
                };

                let data = [
                    {'manufacturers': result},
                    {'months': months},
                    {'years': years}
                        ];
                // console.log(data);
                addNewAd(data);
            });
    }

    function addNewAd(manufacturers) {

        templateEngine.renderTemplate('addNewAd', manufacturers, '#wrapper')
        .then(()=> {
            $("#submitAdInfo-btn").on('click', (ev) => {

            let month = Number($('#month option:selected').val()) + 1,    
                title = $('#title').val(),
                make = $('#make').val(),
                model = $('#model').val(),
                price = $('#price').val(),
                fuel = $('#fuel').val(),
                power = $('#power').val(),
                mileage = $('#mileage').val(),
                gearbox = $('#gearbox').val(),
                manufactureDate = month +'/'+ $('#year').val(),
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
                templateEngine.renderTemplate('myAds', userAds, '#wrapper')
                .then(() =>{
                    $("#adsTable").on("click", "tr", function() {
                        let link = $(this).data('href');
                        alert(link);
                        // getAd(link);
                   });

                    $('.delete').on('click', (e) => {
                        let id =$(e.target).parent().parent().data('href');
                        console.log(id);
                        data.deleteAd(id)
                        .then(() => {
                            this.displayAds();
                            console.log(this);
                        });
                    });

                });
            });
    }

    function getAd(id) {
        homeController.loadWelcomeMessage();

        data.getAdById(id)
            .then((result) => {
                location.hash = '/myAds/'+result._id;
                templateEngine.renderTemplate('currentAd', result, '#wrapper');
            });
    }

    function getNewestAds() {
        homeController.loadWelcomeMessage();

        return data.getAds();
    }


    return {
        addNewAd,
        displayAds,
        getNewestAds,
        newAd,
        getAd
    }
})();

export { adController };