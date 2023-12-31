const mongoose = require('mongoose');


//promises retrun
main().then((res) => {
        console.log("connection successful");
    }).catch((err) => console.log(err));


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//schema for database collegetion
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

//creating model for our new collection 

const User = mongoose.model("User",userSchema);