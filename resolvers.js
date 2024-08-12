const data = {
    authors: [
        {id: 1, name: "Abhay Chauhan", bookIds: [101, 102]},
        {id: 2, name: "A Chauhan", bookIds: [103]}
    ],
    books: [
        {id: 101, title: "Book 1", publishedYear: 2020, authorId: 1},
        {id: 102, title: "Book 2", publishedYear: 2021, authorId: 1},
        {id: 103, title: "Book 3", publishedYear: 2022, authorId: 2}
    ]
}

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            return data.authors.find(authorDetails => authorDetails.id == parent.authorId);
        }
    },
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter(bookDetails =>  parent.bookIds.includes(bookDetails.id));
        }
    },
    Query: {
        authors: () => {
            return data.authors
        },
        books: () => {
            return data.books
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            const book = {...args, id: data.books.length + 1}
            data.books.push(book);
            return book
        }
    }
}