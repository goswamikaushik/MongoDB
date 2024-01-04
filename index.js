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
    name: String,
    email: String,
    age: Number,
});

//creating model for our new collection 

const User = mongoose.model("User", userSchema);

//creating objct for oure collection and insert our data into that collection

//inserting data one by one


// const user1 = new User({
//     name : "kaushik",
//     email: "kaushik@gmail.com",
//     age : 21,
// });

// user1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// const user2 = new User({
//     name : "kumiko",
//     email: "kumiko@gmail.com",
//     age : 21,
// });

// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });




//inserting  multiple data at time
// User.insertMany([
//     { name: "manav", email: "manu@gmail.com", age: 23 },
//     { name: "kanu kaka", email: "kanu@gmail.com", age: 21 },
//     { name: "monika", email: "monika@gmail.com", age: 22 },
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });



//findig our document using model.find() method

// User.find({}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// User.find({age : {$gt : 21}}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// User.find({age : {$gt : 21}}).then((res) => {
//     console.log(res[0].name);
// }).catch((err) => {
//     console.log(err);
// });

// Update with model

// User.updateOne({ name: "kaushik" }, { age: 12 })

//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })


// User.updateMany({ age: {$gt : 10 } }, { age: 100 })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })


// User.findOneAndUpdate({ name : "kaushik" }, { age: 99 }, {new : true})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })


// delete using mongoose


// User.deleteOne({name : "kanu kaka"}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.deleteOne({name : "kanu kaka"}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// User.findOneAndDelete({name : "monika"}, {new : true}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findByIdAndDelete(659100a4a97d9d7e3cdbf22a).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

