const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI,{
            // Deprecated
            // useUnifiedTopology: true,
            // useNewUrlParser: true
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;