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

//creating objct for oure collection and insert our data into that collection

const user1 = new User({
    name : "kaushik",
    email: "kaushik@gmail.com",
    age : 21,
});

user1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

const user2 = new User({
    name : "kumiko",
    email: "kumiko@gmail.com",
    age : 21,
});

user2.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});