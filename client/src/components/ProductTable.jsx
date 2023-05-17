import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const ProductTable = (props) => {

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(() => {
                // this is the logic on delte
                props.onDelete(deleteId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.productList.map((eachProduct, idx) => (
                            <tr key={idx}>
                                <td>
                                    <Link to={`/products/${eachProduct._id}`}>
                                        {eachProduct.title}</Link>
                                </td>
                                <td>{eachProduct.price}</td>
                                <td>{eachProduct.description}</td>
                                <td>
                                    <Link to={`/products/${eachProduct._id}/edit`}>edit</Link>
                                </td>
                                <td><button onClick={() => handleDelete(eachProduct._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;