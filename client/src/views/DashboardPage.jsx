import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
// get data from api on load: useEffect, axios
// variable change: useState

export const DashboardPage = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`)
      .then(response => {
        console.log(response.data)
        setProductList(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  // create handleDelete for our delete button
  // this time we dont want to recieve the array index
  // the logic(.then) will be different but the .catch will stay pretty much consistent
  // also the navigate will not work
  const handleDelete = (deleteId) => {
    axios.delete(`http://localhost:8000/api/products/${deleteId}`)
      .then(() => {
        removeFromDom(deleteId)
      })
      .catch(err => console.log(err))
  }

  const removeFromDom = (deleteId) => {
    const filterdList = productList.filter((eachProduct) => eachProduct._id !== deleteId)
    setProductList(filterdList)
  }

  return (
    <div>
      <h2> Porducts Page</h2>
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
            productList.map((eachProduct, idx) => (
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
export default DashboardPage;