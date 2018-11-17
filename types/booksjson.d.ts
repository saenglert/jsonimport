declare module 'books.json' {
    const value: BooksDB;
    export default value;

    interface BooksDB {
        books: {author: string, title: string}[];
    }
}