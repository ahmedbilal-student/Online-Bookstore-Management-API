const API_URL = "/api/books";

const bookForm = document.getElementById("bookForm");
const booksList = document.getElementById("booksList");

loadBooks();

bookForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        genre: document.getElementById("genre").value,
        price: document.getElementById("price").value
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });

    if(response.ok){
        alert("Book Added Successfully");

        bookForm.reset();

        loadBooks();
    }
});

async function loadBooks(){

    const response = await fetch(API_URL);

    const books = await response.json();

    booksList.innerHTML = "";

    books.forEach(book => {

        booksList.innerHTML += `
            <div class="book">

                <h3>${book.title}</h3>

                <p><strong>Author:</strong> ${book.author}</p>

                <p><strong>Genre:</strong> ${book.genre}</p>

                <p><strong>Price:</strong> Rs. ${book.price}</p>

                <div class="actions">

                    <button
                        class="delete-btn"
                        onclick="deleteBook('${book._id}')"
                    >
                        Delete
                    </button>

                </div>

            </div>
        `;
    });
}

async function deleteBook(id){

    if(!confirm("Delete this book?")){
        return;
    }

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadBooks();
}