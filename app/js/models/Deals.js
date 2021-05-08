class Deals {
    constructor() {
        this._deals = [];
    }
    add(deal) {
        this._deals.push(deal);
    }
    getDeals() {
        return [].concat(this._deals);
    }
}
