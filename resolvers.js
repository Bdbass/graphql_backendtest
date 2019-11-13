
const books = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        authr: 'J.K. Rowling',
        extraField: "WE don't need"
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton'
    }
]

module.exports = {
    Query: {
        books: () => books,
        user: (_, { name }, { dataSources }) =>
            dataSources.GithubApi.getUser(name),
        person: async (_, { name }, { dataSources }) => {
            const { getPerson } = dataSources.PeopleApi();
            const p = await getPerson(name);
            return p;
        }
    }
};


