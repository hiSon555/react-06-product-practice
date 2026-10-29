import { useEffect, useState } from "react";
import { Link } from "react-router";

function ProductList() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=12")
            .then(res => res.json())
            .then(json => {
                setList(json.products);
                setLoading(false);
            })
            .catch(err => {
                console.error(err)
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>상품 목록</h1>
            <table>
                <thead>
                <tr>
                    <th>이름</th>
                    <th>가격</th>
                    <th>재고</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item) => (
                    <tr key={item.id}>
                        <td>
                            <Link to={`/product/:${item.id}`}>{item.title}</Link>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
)
}

export default ProductList;
