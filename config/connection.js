const mongoose = require('mongoose')

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            reconnectTries:30,
            reconnectInterval:1000

        }
        )
        console.log('Db is connected')


    } catch (error) {
        console.log(`Error ${error.message}`);
    }
}


module.exports = dbconnect
