export class Product {
    private _name: string;
    private _type: string;
    private _price: string;
    private _quality: string;
    private _status: string;

    constructor(name: string,type: string,price: string, quality: string,status: string) {
        this._name = name;
        this._type = type;
        this._price = price;
        this._quality = quality;
        this._status = status;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get price(): string {
        return this._price;
    }

    set price(value: string) {
        this._price = value;
    }

    get quality(): string {
        return this._quality;
    }

    set quality(value: string) {
        this._quality = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}


