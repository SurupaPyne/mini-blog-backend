# Mini Blog Backend

A simple Express.js + LowDB API to serve and manage blog posts.

---

## Features

- REST API for blog post CRUD
- Uses `lowdb` as a local JSON database
- CORS and JSON body support
- Clean folder structure with controllers and routes

---

## Tech Stack

- Node.js
- Express.js
- lowdb
- nanoid

---

## Getting Started
cd mini-blog-backend
node server.js

## Clone the repository

git clone https://github.com/SurupaPyne/mini-blog-backend.git

## Server will run at:
http://localhost:9001

## API Endpoints
All endpoints are prefixed with /admin/posts.

Method	Endpoint	Description
GET	/admin/posts	Get all blog posts
GET	/admin/posts/:id	Get a post by ID
POST	/admin/posts	Create a new blog post
PUT	/admin/posts/:id	Update an existing post
DELETE	/admin/posts/:id	Delete a post by ID

