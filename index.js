const mongoose = require('mongoose');


//promises retrun
main().then((res) => {
        console.log("connection successful");
    }).catch((err) => console.log(err));


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//schema for database
