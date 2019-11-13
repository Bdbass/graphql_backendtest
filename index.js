const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');
const GithubApi = require('./datasources/GithubApi');
const PeopleApi = require('./datasources/PeopleApi');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        GithubApi: new GithubApi(),
        PeopleApi: PeopleApi
    }),

});

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`);
});