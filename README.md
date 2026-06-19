# Online Bookstore Management API

## Web Technologies Assignment

**Course:** Web Technologies
**Course Code:** CS 224

---

## 1. Project Description

This project is an Online Bookstore Management API.

The system allows users to manage books in an online bookstore. Users can add, view, update, delete, search, and display books using REST API requests.

The backend is developed using:

* Node.js
* Express.js
* MongoDB
* Mongoose

The API follows REST architecture where the client communicates with the server using HTTP methods.

---

# 2. Features

The project provides the following features:

* Add new books
* View all books
* View single book
* Update book information
* Delete books
* Search books by author
* Search books by genre
* Search by author and genre together
* Pagination system
* Input validation
* Error handling

---

# 3. Technologies Used

## Node.js

Node.js is used to run JavaScript on the server side.

## Express.js

Express.js is used for creating routes and handling API requests.

## MongoDB

MongoDB is used to store book information.

## Mongoose

Mongoose is used to connect Node.js with MongoDB and create database schemas.

## Postman

Postman is used to test all API endpoints.

---

# 4. Project Structure

```
Online Bookstore

│
├── server.js
│
├── package.json
│
├── models
│     └── Book.js
│
├── routes
│     └── books.js
│
├── public
│     ├── index.html
│     ├── script.js
│     └── style.css
│
└── .env
```

---

# 5. Installation

First clone/download the project.

Install required packages:

```bash
npm install
```

Packages used:

```bash
npm install express mongoose dotenv nodemon
```

---

# 6. Running the Project

Start the server:

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

# 7. Database Configuration

MongoDB database name:

```
bookstore
```

Example book record:

```json
{
"title":"Node.js Basics",
"author":"Ali Khan",
"genre":"Programming",
"price":500,
"publishedDate":"2024-01-01",
"inStock":true
}
```

---

# 8. Book Schema

Each book contains:

| Field         | Type    |
| ------------- | ------- |
| title         | String  |
| author        | String  |
| genre         | String  |
| price         | Number  |
| publishedDate | Date    |
| inStock       | Boolean |

Required fields:

* Title
* Author
* Price

---

# 9. API Endpoints

Base URL:

```
http://localhost:5000
```

---

## 1. Get All Books

Method:

```
GET
```

URL:

```
/api/books
```

Example:

```
http://localhost:5000/api/books
```

Response:

```
200 OK
```

---

# 2. Add New Book

Method:

```
POST
```

URL:

```
/api/books
```

Body:

Choose:

```
Body → Raw → JSON
```

JSON:

```json
{
"title":"Node.js Basics",
"author":"Ali Khan",
"genre":"Programming",
"price":500,
"publishedDate":"2024-01-01",
"inStock":true
}
```

Response:

```
201 Created
```

---

# 3. Get Single Book

Method:

```
GET
```

URL:

```
/api/books/:id
```

Example:

```
http://localhost:5000/api/books/BOOK_ID
```

Response:

```
200 OK
```

---

# 4. Update Book

Method:

```
PUT
```

URL:

```
/api/books/:id
```

Body:

```json
{
"title":"Advanced Node.js",
"author":"Ali Khan",
"genre":"Programming",
"price":700
}
```

Response:

```
200 OK
```

---

# 5. Delete Book

Method:

```
DELETE
```

URL:

```
/api/books/:id
```

Response:

```json
{
"message":"Book deleted successfully"
}
```

Status:

```
200 OK
```

---

# 10. Search API

## Search by Author

```
GET

/api/books?author=Ali Khan
```

Example:

```
http://localhost:5000/api/books?author=Ali Khan
```

---

## Search by Genre

```
GET

/api/books?genre=Programming
```

---

## Search by Author and Genre

```
GET

/api/books?author=Ali Khan&genre=Programming
```

---

# 11. Pagination

Pagination displays books page by page.

Each page contains 8 books.

## Page 1

```
GET

/api/books?page=1&limit=8
```

Shows:

```
Book 1 - Book 8
```

---

## Page 2

```
GET

/api/books?page=2&limit=8
```

Shows:

```
Book 9 - Book 16
```

---

# 12. Validation Testing

## Invalid POST Request

Send:

```json
{
"title":"Test Book"
}
```

Expected:

```
400 Bad Request
```

Response:

```json
{
"message":"Title, Author and Price are required"
}
```

---

# 13. Error Handling

The API handles:

* Invalid routes
* Missing data
* Wrong book ID
* Database errors

Example:

```json
{
"message":"Book not found"
}
```

Status:

```
404 Not Found
```

---

# 14. Postman Testing Order

Test APIs in this order:

```
1. GET All Books

2. POST Add Book

3. GET Single Book

4. PUT Update Book

5. DELETE Book

6. Search Author

7. Search Genre

8. Search Author + Genre

9. Pagination Page 1

10. Pagination Page 2

11. Validation Test
```

---

# 15. HTTP Status Codes Used

| Code | Meaning            |
| ---- | ------------------ |
| 200  | Successful request |
| 201  | New record created |
| 400  | Invalid input      |
| 404  | Data not found     |

---

# 16. Frontend

A simple frontend interface is created using:

* HTML
* CSS
* JavaScript

Features:

* Add books
* Display books
* Book cards
* API connection

The frontend communicates with the backend using Fetch API.

---

# 17. Conclusion

The Online Bookstore Management API was successfully developed.

The project demonstrates backend development using Node.js, Express.js, and MongoDB.

The system supports CRUD operations, searching, pagination, validation, error handling, and frontend integration.

This project fulfills all requirements of the Web Technologies assignment.

---
