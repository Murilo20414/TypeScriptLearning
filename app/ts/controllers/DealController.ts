class DealController {

    private _inputDate: JQuery;
    private _inputAmount: JQuery;
    private _inputValue: JQuery;
    private _deals = new Deals();

    private _dealsView = new DealsView('#dealsView');
    private _messageView = new MesasgeView("#messageView")

    constructor() {

        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
        this._inputValue = $('#value');
        this._dealsView.update(this._deals);
    }

    add(event: Event) {

        event.preventDefault();

        const deal = new Deal(
            new Date(this._inputDate.val().replace(/-/g, '/')),
            parseInt(this._inputAmount.val()),
            parseFloat(this._inputValue.val())
        );

        this._deals.add(deal);
        this._dealsView.update(this._deals);
        this._messageView.update('Negociação inserida com sucesso');
    }



}