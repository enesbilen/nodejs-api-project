const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.MONGO, {
    }).then(() => {
        console.log("mongoDB connect");
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = db