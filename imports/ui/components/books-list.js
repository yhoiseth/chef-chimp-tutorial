import '../../api/books/books';

Template.booksList.helpers({
    books() {
        const books = Books.find();
        if ( books ) {
            return books;
        }
    }
});
