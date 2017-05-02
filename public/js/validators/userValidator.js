import toastr from 'toastr';

const USERNAMEREGEX = /^[a-zA-Z0-9]+$/;
const USERNAMEMAXLENGTH = 30;
const USERNAMEMINLENGTH = 3;

const EMAILREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const EMAILMAXLENGTH = 100;
const EMAILMINLENGTH = 3;

const PASSMAXLENGTH = 100;
const PASSMINLENGTH = 6;

const userValidator = {
    validateUsername(username) {
        if (username.length > USERNAMEMAXLENGTH) {
            throwError(`The username is too long! Should be less than ${USERNAMEMAXLENGTH} characters long.`, "Invalid Username");
        }

        if (username.length < USERNAMEMINLENGTH) {
            throwError(`The username is too short! Should be more than ${USERNAMEMINLENGTH} characters long.`, `Invalid Username`);
        }

        if (!username.match(USERNAMEREGEX)) {
            throwError(`The username contains invalid symbols!`, `Invalid Username`);
        }
    },

    validateEmail(email) {
        if (email.length > EMAILMAXLENGTH) {
            throwError(`The email is too long! Should be less than ${USERNAMEMAXLENGTH} characters long.`, `Invalid Email`);
        }

        if (email.length < EMAILMINLENGTH) {
            throwError(`The email is too short! Should be more than ${USERNAMEMINLENGTH} characters long.`, `Invalid Email`);
        }

        if (!email.match(EMAILREGEX)) {
            throwError('This email is invalid!', `Invalid Email`);
        }
    },

    validatePass(pass) {
        if (pass.length > PASSMAXLENGTH) {
            throwError(`The password is too long! Should be less than ${PASSMAXLENGTH} characters long.`, `Invalid Password`);
        }

        if (pass.length < PASSMINLENGTH) {
            throwError(`The password is too short! Should be more than ${PASSMINLENGTH} characters long.`, `Weak Password`);
        }

        if (pass.search(/[a-z]/i) < 0) {
            throwError("Your password must contain at least one letter.", `Weak Password`);
        }
        if (pass.search(/[0-9]/) < 0) {
            throwError("Your password must contain at least one digit.", `Weak Password`);
        }
    }
};

let throwError = function (message, title) {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-left",
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

export { userValidator };

