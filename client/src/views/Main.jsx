import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { CreateForm } from '../components/CreateForm'
import ProductTable from '../components/ProductTable'
// get data from api on load: useEffect, axios
// variable change: useState

export const Main = () => {
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

// remember this does not do anything to the data base (it resets the product list  in the view)
    const removeFromDom = (deleteId) => {
        const filterdList = productList.filter((eachProduct) => eachProduct._id !== deleteId)
        setProductList(filterdList)
    }
// the create form need the add to do dom
// only change the view (set productList)
const addToDom = (newProduct) =>{
    setProductList([...productList, newProduct])
}

    return (
        <div>
            <CreateForm onCreate={addToDom}/>
            {/* <h2> Porducts Page</h2> */}
            {/* <ProductTable productList={productList} onDelete={removeFromDom}/>       */}
            </div>
    )
}
export default Main;