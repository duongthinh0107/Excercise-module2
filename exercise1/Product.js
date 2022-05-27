export class Product {
    constructor(name, type, price, quality, status) {
        this._name = name;
        this._type = type;
        this._price = price;
        this._quality = quality;
        this._status = status;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get quality() {
        return this._quality;
    }
    set quality(value) {
        this._quality = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
}
//# sourceMappingURL=Product.js.map