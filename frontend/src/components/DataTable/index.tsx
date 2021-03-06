import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/formats";
import { BASE_URL } from "utils/requests";

const DataTable = () => {
    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            });
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    }

    return (
        <>
            <Pagination page={page} onPageChange={changePage} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Seller</th>
                            <th>Customers Visited</th>
                            <th>Closed Business</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(y => (
                            <tr key={y.id}>
                                <td>{formatLocalDate(y.date, "dd/MM/yyyy")}</td>
                                <td>{y.seller.name}</td>
                                <td>{y.visited}</td>
                                <td>{y.deals}</td>
                                <td>{y.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DataTable;