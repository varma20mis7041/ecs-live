const Product = require('../models/Product')


const createProduct = async (req, res) => {
    try {
        const products = req.body; 
        
        if (!Array.isArray(products)) {
            return res.status(400).json({ message: "Expected an array of products" });
        }

        
        await Product.deleteMany({});

     
        const insertedProducts = await Product.insertMany(products);

       
        res.status(201).json(insertedProducts);
    } catch (error) {
        console.log("error :", error);
        res.status(500).json({ message: "Server error" });
    }
};



const getProducts = async(req,res)=>{
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(error){
        console.log("error : ",error)
        res.status(500).json({message:"Server error"})
    }
}


module.exports = {createProduct,getProducts}