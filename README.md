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
## Get all blog posts
## GET	       http://localhost:9001/admin/posts	
## Get a post by ID
## GET	       http://localhost:9001/admin/posts/:id
## Create a new blog post	
## POST	       http://localhost:9001/admin/posts	
## Update an existing post
## PUT	       http://localhost:9001/admin/posts/:id	
## Delete a post by ID
## DELETE      http://localhost:9001/admin/posts/:id	

