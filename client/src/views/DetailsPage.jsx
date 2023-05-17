import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


// 1. retrieve the id from paras (useParams)
// 2. with the id, send api call on load (axios, useEffect)
// 3. store the changing variable from api (useState)
export const DetailsPage = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(response => {
        setProduct(response.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      {
        product ?
          <div>
            <h1>Title: {product.title}</h1>
            <h2>Price: $ {product.price}</h2>
            <h3>Description: {product.description}</h3>
          </div> :
          <h1>loading...</h1>
      }
      <Link to="/dashboard">Home</Link>
    </div>
  )
}
export default DetailsPage;