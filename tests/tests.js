import { userValidator } from 'userValidator';
import { adValidator } from 'adValidator';

mocha.setup('bdd');

const { expect } = chai;


describe("User validator tests", () => {
    it('throwError should throw when invoked.', () => {
        expect(() => {
            userValidator.throwError();
        }
        ).to.throw();
    });

    describe("Username tests", () => {
        it('Uservalidator should call throwErrow when less than 3 characters are passed.', () => {
            let stub = sinon.stub(userValidator, "throwError");
            userValidator.validateUsername("ad");

            sinon.assert.calledOnce(stub);
            stub.restore();
        });

        it('Uservalidator should call throwErrow when more than 30 characters are passed.', () => {
            let stub = sinon.stub(userValidator, "throwError");
            userValidator.validateUsername("1234512345123451234512345123451");

            sinon.assert.calledOnce(stub);
            stub.restore();
        });

        it('Uservalidator should call throwErrow when invalid characters are passed.', () => {
            let stub = sinon.stub(userValidator, "throwError");
            userValidator.validateUsername("dasdsa$");

            sinon.assert.calledOnce(stub);
            stub.restore();
        });
    });

    describe("Email tests", () => {
        it('Uservalidator should call throwErrow when less than 3 characters are passed.', () => {
            let stub = sinon.stub(userValidator, "throwError");
            userValidator.validateEmail("ad");

            sinon.assert.called(stub);
            stub.restore();
        });

        it('Uservalidator should call throwErrow when more than 100 characters are passed.', () => {
            let stub = sinon.stub(userValidator, "throwError");
            userValidator.validateEmail("1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890@gmail.com");

            sinon.assert.calledOnce(stub);
            stub.restore();
        });

        it('Uservalidator should call throwErrow when invalid email is passed.', () => {
            let stub = sinon.stub(userValidator, "throwError");
            userValidator.validateEmail("myem.ail@.gma.il.com");

            sinon.assert.called(stub);
            stub.restore();
        });
    });

    describe("Password tests", () => {
        it('Uservalidator should call throwErrow when less than 6 characters are passed.', () => {
            let stub = sinon.stub(userValidator, "throwError");
            userValidator.validatePass("asda1");

            sinon.assert.calledOnce(stub);
            stub.restore();
        });

        it('Uservalidator should call throwErrow when more than 100 characters are passed.', () => {
            let stub = sinon.stub(userValidator, "throwError");
            userValidator.validateEmail("1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890@gmail.com");

            sinon.assert.calledOnce(stub);
            stub.restore();
        });
    });
});

describe("Ad validator tests", () => {
    it('throwError should throw when invoked.', () => {
        expect(() => {
            adValidator.throwError();
        }
        ).to.throw();
    });

    describe("Model tests", () => {
        it('Advalidator should call throwErrow when less than 1 characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validateModel("");

            sinon.assert.called(stub);
            stub.restore();
        });

        it('Advalidator should call throwErrow when more than 20 characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validateModel("012345678901234567891");

            sinon.assert.calledOnce(stub);
            stub.restore();
        });

        it('Advalidator should call throwErrow when invalid characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validateModel("0123459012$34567891");

            sinon.assert.calledOnce(stub);
            stub.restore();
        });
    });

    describe("Price tests", () => {
        it('Advalidator should call throwErrow when less than 1 characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validatePrice("");

            sinon.assert.called(stub);
            stub.restore();
        });

        it('Advalidator should call throwErrow when more than 10 characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validatePrice("01234567890");

            sinon.assert.called(stub);
            stub.restore();
        });

        it('Advalidator should call throwErrow when not only numbers characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validatePrice("asd");

            sinon.assert.called(stub);
            stub.restore();
        });
    });

    describe("Power tests", () => {
        it('Advalidator should call throwErrow when less than 1 characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validatePower("");

            sinon.assert.called(stub);
            stub.restore();
        });

        it('Advalidator should call throwErrow when more than 5 characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validatePower("123456");

            sinon.assert.called(stub);
            stub.restore();
        });

        it('Advalidator should call throwErrow when not only numbers characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validatePower("asd");

            sinon.assert.called(stub);
            stub.restore();
        });
    });

    describe("Mileage tests", () => {
        it('Advalidator should call throwErrow when less than 1 characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validateMileage("");

            sinon.assert.called(stub);
            stub.restore();
        });

        it('Advalidator should call throwErrow when more than 8 characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validateMileage("123456789");

            sinon.assert.called(stub);
            stub.restore();
        });

        it('Advalidator should call throwErrow when not only numbers characters are passed.', () => {
            let stub = sinon.stub(adValidator, "throwError");
            adValidator.validateMileage("asd");

            sinon.assert.called(stub);
            stub.restore();
        });
    });
});

mocha.run();