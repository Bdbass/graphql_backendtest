let db = require('../db');

let personSchema = new db.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    highscore: { type: Number, require: true, default: 0 }
});

let People = db.model("People", personSchema);

module.exports = People;