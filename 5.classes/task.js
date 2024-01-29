class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix () {
        this.state *= 1.5;
    }

    set state (newState) {
        if (newState <= 0) {
            this._state = 0;
        } 
        if (newState >= 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        super (name, releaseDate, pagesCount, state, type);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = "magazine";        
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super (name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = "book";
    }

}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type ) {
        super (author, name, releaseDate, pagesCount, state, type); 
        this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; 
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type ) {
        super (author, name, releaseDate, pagesCount, state, type); 
        this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; 
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type ) {
        super (author, name, releaseDate, pagesCount, state, type); 
        this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; 
        this.type = "detective";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy (type, value) { 
        let searthBook = this.books.find((elem) => elem[type] === value);

        if (searthBook) {
            return searthBook;
        } else {
            return null;
        }
    }

    giveBookByName (bookName) {
    debugger
      
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        let book = this.books[i];
        this.books.splice(i, 1);            
        return book;
      } 
    }      
    return null;
    }
}