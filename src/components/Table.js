import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function Table() {
    const [products, setProducts] = useState([
        {
            id: uuidv4(),
            date: '22 Feb 2021',
            product: "XXX",
            size: "9.0",
            website: "footlocker.uk",
            price: 211,
            status: 'success'
        },
        {
            id: uuidv4(),
            date: '20 Feb 2021',
            product: "AAA",
            size: "7.0",
            website: "footlocker.uk",
            price: 211,
            status: 'fail'

        },
        {
            id: uuidv4(),
            date: '18 Feb 2021',
            product: "BBB",
            size: "5.0",
            website: "footlocker.uk",
            price: 211,
            status: 'fail'

        },
        {
            id: uuidv4(),
            date: '22 Feb 2021',
            product: "VVV",
            size: "9.0",
            website: "footlocker.uk",
            price: 211,
            status: 'success'

        },
        {
            id: uuidv4(),
            date: '22 Feb 2021',
            product: "XXX",
            size: "9.0",
            website: "footlocker.uk",
            price: 211,
            status: 'success'

        },
    ])
    return (
        <div className="w-100">
            <table class="table table-hover">
                <thead className="custom-table-header w-100">
                    <tr>
                        <th scope="col">DATE</th>
                        <th scope="col">PRODUCT</th>
                        <th scope="col">SIZE (US)</th>
                        <th scope="col">WEBSITE</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">STATUS</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((product) => <tr key={product.id}>
                            <td>{product.date}</td>
                            <td>{product.product}</td>
                            <td>{product.size}</td>
                            <td>{product.website}</td>
                            <td>{product.price}</td>
                            <td>{product.status}</td>
                        </tr>)
                    }
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Table;