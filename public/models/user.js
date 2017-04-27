import { validator } from 'validator';

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        validator.validateUsername(value);
        this._username = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        validator.validateEmail(value);
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        validator.validatePass(value);
        this._password = value;
    }
}

export { User };