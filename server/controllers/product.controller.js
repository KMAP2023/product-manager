const Product = require("../models/product.model")

//testing api 
module.exports.apiTest = (req, res)=>{
    res.json({message: "coffee is a key component to surviving humanity"})
}

// all product display (get) in an array
module.exports.allProducts = (req, res)=>{
    Product.find()
    .then(productList => res.json(productList))
    .catch(err=>res.json(err))

}

//one product display (get)
module.exports.oneProduct = (req, res)=>{
    Product.findOne({_id: req.params.id})
    .then(productList => res.json(productList))
    .catch(err=>res.status(400).json(err))
}

//create product(post)
module.exports.addProduct = (req, res)=>{
    Product.create(req.body)
    .then(newProduct => res.json(newProduct)) //response.json ---> status 200 or ok
    .catch(err=>res.status(400).json(err))

}
// update product(patch)
module.exports.updateProduct = (req, res)=>{
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators:true}
    )
    .then(updatedProduct => res.json
        (updatedProduct))
        .catch(err=>res.status(400).json(err))
}


// delete product (delete)
module.exports.deleteProduct = (req, res)=>{
    Product.deleteOne({_id: req.params.id})
    .then(status=> res.json(status))
    .catch(err=>res.status(400).json(err))
}
