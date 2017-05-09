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
            this.throwError(`The model is too long! Should be less than ${MODELMAXLENGTH} characters long.`, "Invalid Model");
        }

        if (model.length < MODELMINLENGTH) {
            this.throwError(`The model is too short! Should be at least ${MODELMINLENGTH} characters long.`, `Invalid Model`);
        }

        if (!model.match(MODELREGEX)) {
            this.throwError(`The model contains invalid symbols!`, `Invalid Model`);
        }
    },

    validatePrice(price) {
        if (price.length > PRICEMAXLENGTH) {
            this.throwError(`The price is too long! Should be less than ${PRICEMAXLENGTH} characters long.`, "Invalid Price");
        }

        if (price.length < PRICEMINLENGTH) {
            this.throwError(`The price is too short! Should be at least ${PRICEMINLENGTH} characters long.`, `Invalid Price`);
        }

        if (!price.match(NUMBERSREGEX)) {
            this.throwError(`The price must be a number.`, `Invalid Price`);
        }
    },

    validatePower(power) {
        if (power.length > POWERMAXLENGTH) {
            this.throwError(`The power is too long! Should be less than ${POWERMAXLENGTH} characters long.`, "Invalid Power");
        }

        if (power.length < POWERMINLENGTH) {
            this.throwError(`The power is too short! Should be at least ${POWERMINLENGTH} characters long.`, `Invalid Power`);
        }

        if (!power.match(NUMBERSREGEX)) {
            this.throwError(`The power must be a number.`, `Invalid Power`);
        }
    },

    validateMileage(mileage) {
        if (mileage.length > MILEAGEMAXLENGTH) {
            this.throwError(`The mileage is too long! Should be less than ${MILEAGEMAXLENGTH} characters long.`, "Invalid Mileage");
        }

        if (mileage.length < MILEAGEMINLENGTH) {
            this.throwError(`The mileage is too short! Should be at least ${MILEAGEMINLENGTH} characters long.`, `Invalid Mileage`);
        }

        if (!mileage.match(NUMBERSREGEX)) {
            this.throwError(`The mileage must be a number.`, `Invalid Mileage`);
        }
    },

    throwError(message, title) {
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
    }
}


export { adValidator };