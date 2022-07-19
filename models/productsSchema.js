const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    id:String,
    category:String,
    url:String,
    detailUrl:String,
    title:String,
    price:Object,
    description:String,
    tagline:String
});


const Products = new mongoose.model("products",productsSchema);

module.exports = Products;