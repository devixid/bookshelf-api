const { 
    getAllBooksHandler,
    getBooksByIdHandler,
    addBookHandler,
    editBooksByIdHandler,
    deleteBooksByIdHandler
 } = require('./handler');

const routes = [
    {
        method: "GET",
        path: "/",
        handler: () => {
            return `Hello welcome to bookshelf api backend`;
        }
    },
    {
        method: "GET",
        path: "/books",
        handler: getAllBooksHandler
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooksByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooksByIdHandler,
    },
];

module.exports = routes;