const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        let readYet
        if (this.read)
        {
            readYet = "already read."
        } else {
            readYet = "not yet read."
        };
        let summary = `${this.title} by ${this.author}, ${this.pages} pages, ` + readYet
        return summary
    };
};

function addBookToLibrary() {
    let title = prompt("Book Title:");
    let author = prompt("Book Author:");
    let pages = prompt("Number of Pages:");
    let read = prompt("Read it yet?");
    myLibrary.push(new Book(title, author, pages, read));
}