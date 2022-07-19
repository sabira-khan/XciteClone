const productdata = require("./constant/data");
const Products = require("./models/productsSchema");

const DefaultData = async()=>{
    try {
        //stop repeatition
        await Products.deleteMany({});


        //mongodb method to insert data
        const storeData = await Products.insertMany(productdata);
        console.log(storeData);
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;