let myLibrary = [];

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
    this.toggle = () => {
        this.read = !this.read;
    }
};

function addBookToLibrary() {
    let title = prompt("Book Title:");
    let author = prompt("Book Author:");
    let pages = prompt("Number of Pages:");
    let read = prompt("Read it yet?");
    myLibrary.push(new Book(title, author, pages, read));
    displayBooks();
}

function displayBooks() {
    let sec = document.querySelector("#books")
    sec.innerHTML = ''
    myLibrary.forEach((book, index) => {
        let div = document.createElement("div")
        div.setAttribute("class", "card")
        div.dataset.index = myLibrary.indexOf(book)

        let title = document.createElement("h2")
        title.setAttribute("class", "title")
        title.textContent = book.title

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Remove"
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(index,1);
            displayBooks();
        })

        let toggleButton = document.createElement("button")
        toggleButton.textContent = "Read?"
        toggleButton.addEventListener("click", myLibrary[index].toggle)

        sec.appendChild(div);
        div.appendChild(title);
        div.appendChild(deleteButton);
        div.appendChild(toggleButton);
    });
}

displayBooks();