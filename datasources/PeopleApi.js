const People = require('../models/people');

const PeopleApi = () => {

    const getPerson = async (name) => {
        const person = await People.findOne({ name: name });
        return person;
    }

    const getAll = () => {
        People.find({}, function (err, people) {
            if (err || !person) {
                return {};
            } else {
                return people;
            }
        });
    }
    return { getAll, getPerson };
}

module.exports = PeopleApi;