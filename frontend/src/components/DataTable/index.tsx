import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/formats";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=2&size=15`)
            .then(response => {
                setPage(response.data);
            });
    });

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
                    { page.content?.map(y => (
                        <tr key={y.id}>
                        <td>{formatLocalDate(y.date, "dd/MM/yyyy")}</td>
                        <td>{y.seller.name}</td>
                        <td>{y.visited}</td>
                        <td>{y.deals}</td>
                        <td>{y.amount.toFixed(2)}</td>
                    </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;