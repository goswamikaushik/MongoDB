const mongoose = require("mongoose");


main().then(() => {
    console.log("connection successful");
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.27017/amazon");
}


//when we have many constraints in database
const bookSchema = new mongoose.Schema({
    title : {
        type : String,
    },
    author: {
        type : String,
    },
    price: {
        type : Number,
    },
});