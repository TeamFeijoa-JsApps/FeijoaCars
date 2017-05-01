class Ad {
    constructor(title, make, model, price, fuel, power, mileage, gearbox, manufactureDate) {
        this.title = title;
        this.make = make;
        this.model = model;
        this.price = price;
        this.fuel = fuel;
        this.power = power;
        this.mileage = mileage;
        this.gearbox = gearbox;
        this.manufactureDate = manufactureDate;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get make() {
        return this._make;
    }

    set make(value) {
        this._make = value;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get fuel() {
        return this._fuel;
    }

    set fuel(value) {
        this._fuel = value;
    }

    get power() {
        return this._power;
    }

    set power(value) {
        this._power = value;
    }

    get mileage() {
        return this._mileage;
    }

    set mileage(value) {
        this._mileage = value;
    }

    get gearbox() {
        return this._gearbox;
    }

    set gearbox(value) {
        this._gearbox = value;
    }

    get manufactureDate() {
        return this._manufactureDate;
    }

    set manufactureDate(value) {
        this._manufactureDate = value;
    }
}

export { Ad };