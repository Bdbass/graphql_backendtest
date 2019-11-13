let mongoose = require("mongoose");

try {
    mongoose.connect("mongodb://localhost:27017/test",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    console.log('Connected')
} catch (exception) {
    console.log(exception);
}

module.exports = mongoose;