// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String!
    publishedYear: Int
    author: Author
  }

  type Author {
    id: ID!
    name: String!
    books: [Book] 
  }
  
  # all the methods to get the data
  type Query {
    authors: [Author]
    books: [Book]
  }

  # all the methods to update the data
  type Mutation {
    addBook(title: String!, publishedYear: Int, authorId: ID!): Book!
  }
`;