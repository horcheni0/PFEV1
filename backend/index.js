const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");


app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://moemen:Pass123.@cluster0.jqrpxux.mongodb.net/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error("MongoDB connection error", err);
});

// Image storage
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating upload endpoint for images
app.use('/images', express.static('upload/images'));

// Image upload route
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema for creating products
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
});

const Product = mongoose.model("Product", productSchema);

app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id;
        if (products.length > 0) {
            let last_Product_array = products[products.length - 1];
            let last_product = last_Product_array; // Remove [0] as last_Product_array already contains the last product
            id = last_product.id + 1; // Access id property directly from last_product
        } else {
            id = 1;
        }

        const newProduct = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price
        });

        await newProduct.save();
        console.log("Product saved:", newProduct);
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// API for deleting a product
app.post('/removeproduct', async (req, res) => {
    try {
        const productId = req.body.id; 
        const deletedProduct = await Product.findOneAndDelete({ id: productId });
        
        if (deletedProduct) {
            console.log("Product removed:", deletedProduct);
            res.json({
                success: true,
                name: deletedProduct.name
            });
        } else {
            console.log("Product not found");
            res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
    } catch (error) {
        console.error("Error removing product:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// API for getting all products
app.get('/allproducts', async (req, res) => {
    try {
        let products = await Product.find({});
        console.log("All products:", products);
        res.json(products); // Sending response once
    } catch (error) {
        console.error("Error fetching all products:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});
// shema creation for user model


// Schema creation for user model
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    cartData: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Users = mongoose.model('Users', userSchema);


//creating fndpoint for registering the user
app.post('/signup',async (req,res)=>{

    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false,errors:"existing user found with same email adrees"})


    }
    let cart = {};
    for (let i= 0 ; i< 300; i++){
        cart[i]=0;

    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();
    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
     
})
//creating endpoint for user login 
app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user){
        const passCopare = req.body.password === user.password;
        if(passCopare){
            const data ={
                user:{
                    id:user.id

                }
              

            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"wrong password"});
        }
    }
    else{
        res.json({success:false,errors:"wrong email id"})
    }
})





// API creation
app.get("/", (req, res) => {
    res.send("Express app is running");
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port " + port);
    } else {
        console.log("error: " + error);
    }
});
