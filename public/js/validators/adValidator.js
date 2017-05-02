import toastr from 'toastr';

const MODELREGEX = /^[a-zA-Z0-9]+$/;
const MODELMAXLENGTH = 20;
const MODELMINLENGTH = 1;

const NUMBERSREGEX = /^[0-9]+$/;

const PRICEMAXLENGTH = 10;
const PRICEMINLENGTH = 1;

const POWERMAXLENGTH = 5;
const POWERMINLENGTH = 1;

const MILEAGEMAXLENGTH = 8;
const MILEAGEMINLENGTH = 1;

const adValidator = {

    validateModel(model) {
        if (model.length > MODELMAXLENGTH) {
            throwError(`The model is too long! Should be less than ${MODELMAXLENGTH} characters long.`, "Invalid Model");
        }

        if (model.length < MODELMINLENGTH) {
            throwError(`The model is too short! Should be at least ${MODELMINLENGTH} characters long.`, `Invalid Model`);
        }

        if (!model.match(MODELREGEX)) {
            throwError(`The model contains invalid symbols!`, `Invalid Model`);
        }
    },

    validatePrice(price) {
        if (price.length > PRICEMAXLENGTH) {
            throwError(`The price is too long! Should be less than ${PRICEMAXLENGTH} characters long.`, "Invalid Price");
        }

        if (price.length < PRICEMINLENGTH) {
            throwError(`The price is too short! Should be at least ${PRICEMINLENGTH} characters long.`, `Invalid Price`);
        }

        if (!price.match(NUMBERSREGEX)) {
            throwError(`The price must be a number.`, `Invalid Price`);
        }
    },

    validatePower(power) {
        if (power.length > POWERMAXLENGTH) {
            throwError(`The power is too long! Should be less than ${POWERMAXLENGTH} characters long.`, "Invalid Power");
        }

        if (power.length < POWERMINLENGTH) {
            throwError(`The power is too short! Should be at least ${POWERMINLENGTH} characters long.`, `Invalid Power`);
        }

        if (!power.match(NUMBERSREGEX)) {
            throwError(`The power must be a number.`, `Invalid Power`);
        }
    },

        validateMileage(mileage) {
        if (mileage.length > MILEAGEMAXLENGTH) {
            throwError(`The mileage is too long! Should be less than ${MILEAGEAXLENGTH} characters long.`, "Invalid Mileage");
        }

        if (mileage.length < MILEAGEMINLENGTH) {
            throwError(`The mileage is too short! Should be at least ${MILEAGEMINLENGTH} characters long.`, `Invalid Mileage`);
        }

        if (!mileage.match(NUMBERSREGEX)) {
            throwError(`The mileage must be a number.`, `Invalid Mileage`);
        }
    },
}

let throwError = function (message, title) {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    toastr["warning"](message, title);
    throw (message);
};

export { adValidator };