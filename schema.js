const { gql } = require('apollo-server');

const typeDefs = gql`
    
    type Query{
        books: [Book]
        user(name: String!): User
        person(name: String!): Person
    }

    type Book {
        title: String
        author: String
    }

    type User{
        name: String
        company: String
        public_repos: Int
        email: String
        location: String
    }

    type Person{
        highscore: Int
        _id: ID
        id: String
        name: String
    }
`;

module.exports = typeDefs;
