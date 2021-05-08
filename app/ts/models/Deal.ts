class Deal {

    constructor(private _date: Date, private _amount: number, private _value: number) {}

    get Date() {
        return this._date;
    }

    get Amount() {
        return this._amount;
    }

    get Value() {
        return this._value
    }

    get Volume() {
        return this._amount * this._value;
    }

}