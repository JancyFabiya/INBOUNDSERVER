const mongoose = require('mongoose')

const dbconnect = async () => {
    try {
        mongoose.set("useNewUrlParser",true);
        await mongoose.connect(process.env.MONGO_URL) 
        //     {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true

        // }
        console.log('Db is connected')


    } catch (error) {
        console.log(`Error ${error.message}`);
    }
}


module.exports = dbconnect
