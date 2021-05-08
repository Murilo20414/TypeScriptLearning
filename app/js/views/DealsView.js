class DealsView extends View {
    template(model) {
        return `
            
            <table class="table table-houver table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.getDeals().map(deal => `
                            <tr>
                                <td>${deal.Date.getDate()}/${deal.Date.getMonth() + 1}/${deal.Date.getFullYear()}</td>
                                <td>${deal.Amount}</td>
                                <td>${deal.Value}</td>
                                <td>${deal.Volume}</td>
                            </tr>
                        `).join('')}
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        `;
    }
}
