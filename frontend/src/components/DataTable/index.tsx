const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>27/04/2021</td>
                        <td>Logan</td>
                        <td>32</td>
                        <td>11</td>
                        <td>8633.00</td>
                    </tr>
                    <tr>
                        <td>01/05/2021</td>
                        <td>Kaua Celso</td>
                        <td>26</td>
                        <td>22</td>
                        <td>20333.00</td>
                    </tr>
                    <tr>
                        <td>15/04/2021</td>
                        <td>Monica Lima</td>
                        <td>30</td>
                        <td>12</td>
                        <td>5097.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;