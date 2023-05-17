import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// in the form we want to submit a new product and redirect to the dashboard
// 1. Form input (useState)
// 2. Form submit (onsubmit, handles, lifting state)
// 3. logic after submit ==> redirect: useNavigate

export const CreateForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/products`, { title: title, price: price, description: description })
            .then(response => {
                console.log(response.data)
                navigate(`/dashboard`)
                props.onCreate(response.data) // this is the logic after successful create
            })
            .catch(err => {
                const errResponse = err.response.data.errors
                const errMsgArr = []

                for (const eachKey in errResponse) {
                    errMsgArr.push(errResponse[eachKey]["message"])
                }

                setErrors(errMsgArr);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product</label>
                <input type="text" name="title" value={title}
                    onChange={e => setTitle(e.target.value)} />
            </div>

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
{
    errors.map((eachErr, idx)=>(
        <p style={{color: "red"}}>{eachErr}</p>
    ))
}

        </form>
    )
}
