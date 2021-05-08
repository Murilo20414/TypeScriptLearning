class Deals {

    private _deals: Deal[] = [];

    add(deal: Deal): void {
        this._deals.push(deal);
    }

    getDeals(): Deal[] {
        return [].concat(this._deals);
    }

}