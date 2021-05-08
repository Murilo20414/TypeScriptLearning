class Deal {
    constructor(_date, _amount, _value) {
        this._date = _date;
        this._amount = _amount;
        this._value = _value;
    }
    get Date() {
        return this._date;
    }
    get Amount() {
        return this._amount;
    }
    get Value() {
        return this._value;
    }
    get Volume() {
        return this._amount * this._value;
    }
}
