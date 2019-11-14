const { gql } = require('apollo-server');

const typeDefs = gql`
    
    type Query{
        books: [Book]
        user(username: String!): User
        person(name: String!): Person
    }

    type Book {
        title: String
        author: String
    }

    type User{
        name: String
        company: String
        avatar_url: String
        id: ID
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
