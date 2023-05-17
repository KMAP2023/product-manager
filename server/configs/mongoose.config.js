const mongoose = require('mongoose')
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const dbName = "productdb"

const uri = `mongodb+srv://${username}:${pw}@maloexploration.quxvjr7.mongodb.net/${dbName}?retryWrites=true&w=majority`


mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));