const booksDiv = document.getElementById("books");


async function loadBooks(page) {


    let response = await fetch(
        `/api/books?page=${page}&limit=8`
    );


    let books = await response.json();


    booksDiv.innerHTML = "";


    books.forEach(book => {


        booksDiv.innerHTML += `

        <div class="card">

        <h3>${book.title}</h3>

        <p>Author: ${book.author}</p>

        <p>Genre: ${book.genre}</p>

        <p>Price: ${book.price}</p>

        </div>

        `;


    });


}



async function addBook(){


    let book = {

        title: document.getElementById("title").value,

        author: document.getElementById("author").value,

        genre: document.getElementById("genre").value,

        price: document.getElementById("price").value

    };



    await fetch("/api/books",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(book)

    });



    alert("Book Added");


    loadBooks(1);


}




function changePage(page){

    loadBooks(page);

}



loadBooks(1);