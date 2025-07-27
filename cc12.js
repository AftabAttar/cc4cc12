const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  
  addBook(book) {
    if (!book.title || !book.author || !book.year) {
      console.log("Book information is incomplete. Please provide title, author, and year.");
      return false;
    }
    
    
    if (this.findBookByTitle(book.title)) {
      console.log(Book "${book.title}" already exists in the library.);
      return false;
    }
    
    this.books.push(book);
    console.log(Added "${book.title}" to the library.);
    return true;
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(Removed "${removed.title}" from the library.);
      return true;
    } else {
      console.log(Book "${title}" not found.);
      return false;
    }
  }
};


console.log("Initial book count:", library.books.length); 


library.addBook({ author: "George Orwell", year: 1949 });


library.addBook({ title: "1984", author: "George Orwell", year: 1949 });


library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log("Current book count:", library.books.length); 


library.removeBook("The Hobbit");


library.removeBook("Non-existent Book");

console.log("Final book count:", library.books.length); 