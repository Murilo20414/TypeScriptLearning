class DealController {
    constructor() {
        this._deals = new Deals();
        this._dealsView = new DealsView('#dealsView');
        this._messageView = new MesasgeView("#messageView");
        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
        this._inputValue = $('#value');
        this._dealsView.update(this._deals);
    }
    add(event) {
        event.preventDefault();
        const deal = new Deal(new Date(this._inputDate.val().replace(/-/g, '/')), parseInt(this._inputAmount.val()), parseFloat(this._inputValue.val()));
        this._deals.add(deal);
        this._dealsView.update(this._deals);
        this._messageView.update('Negociação inserida com sucesso');
    }
}
