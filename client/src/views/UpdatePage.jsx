import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

// 1. get id from params 
// 2. use the id to get tdata from api 

// 3. form input
// 4. send form to api
// 5. logic after create?



export const UpdatePage = () => {
  //1. get id from the params
  const { id } = useParams()

  // 5. logic after submit: redirect: useNavigate
  const navigate = useNavigate()

  // 3. form input : useState
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(response => {
        const product = response.data;
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);

      })
      .catch(err => console.log(err))

  }, [])

  // now we incorporate axios for that patch.(this is edit/update the corresponding
  //  object that was inserted)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8000/api/products/${id}`, {price, description})
    .then(response=>{
      console.log(response.data)
      navigate(`/products/${id}`)
    })
    .catch()
  }

const handleDelete =()=>{
  axios.delete(`http://localhost:8000/api/products/${id}`)
  .then(response =>{
    // the logic after delete
    navigate(`/dashboard`)
  })
  .catch(err=>console.log(err))
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label>Product</label>
          <input type="text" name="title" value={title}
            onChange={e => setTitle(e.target.value)} />
        </div> ====> by deleting title in axios.patch {price, description} we can actually make to where the client can only change the price or description*/ }
        <div>
          <label>Price</label>
          <input type="number" name="price" value={price}
            onChange={e => setPrice(e.target.value)} />
        </div>

        <div>
          <label>Description</label>
          <input type="text" name="description" value={description}
            onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
export default UpdatePage;