const USERNAMEREGEX = /^[a-zA-Z0-9]+$/;
const USERNAMEMAXLENGTH = 30;
const USERNAMEMINLENGTH = 3;

const EMAILREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const EMAILMAXLENGTH = 100;
const EMAILMINLENGTH = 3;

const PASSMAXLENGTH = 100;
const PASSMINLENGTH = 6;

const validator = {
    validateUsername(username) {
        if (username.length > USERNAMEMAXLENGTH) {
            throwError(`The username is too long! Should be less than ${USERNAMEMAXLENGTH} characters long.`);
        }

        if (username.length < USERNAMEMINLENGTH) {
            throw Error(`The username is too short! Should be more than ${USERNAMEMINLENGTH} characters long.`);
        }

        if (!username.match(USERNAMEREGEX)) {
            throwError(`The username contains invalid symbols!`);
        }


        // TODO: implement duplicate username check
    },

    validateEmail(email) {
        if (email.length > EMAILMAXLENGTH) {
            throwError(`The email is too long! Should be less than ${USERNAMEMAXLENGTH} characters long.`);
        }

        if (email.length < EMAILMINLENGTH) {
            throwError(`The email is too short! Should be more than ${USERNAMEMINLENGTH} characters long.`);
        }

        if (!email.match(EMAILREGEX)) {
            throwError('This email is invalid!');
        }
    },

    validatePass(pass) {
        if (pass.length > PASSMAXLENGTH) {
            throwError(`The password is too long! Should be less than ${PASSMAXLENGTH} characters long.`);
        }

        if (pass.length < PASSMINLENGTH) {
            throwError(`The password is too short! Should be more than ${PASSMINLENGTH} characters long.`);
        }

        if (pass.search(/[a-z]/i) < 0) {
            throwError("Your password must contain at least one letter.");
        }
        if (pass.search(/[0-9]/) < 0) {
            throwError("Your password must contain at least one digit.");
        }
    }

};

let throwError = function (message) {
    alert(message);
    throw (message);
};

export { validator };

