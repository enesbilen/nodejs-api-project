# Node.js API Project

Node.js RESTful API - Authentication & Post Management

## Introduction

This Node.js application provides a RESTful API for user authentication, post creation, updating, deletion, and searching. It utilizes MongoDB for data storage and features user registration and login functionalities, along with secure access to post-related operations.

## Features

#### User Authentication:

- Register: Allows users to create an account with a unique username, email, and password.
- Login: Enables users to securely log in using their registered credentials.

#### Post Management:

- Create Post: Authenticated users can create new posts with a title, description, and image.
- Get Posts: Retrieves a list of all posts available in the system.
- Get Post Detail: Provides detailed information about a specific post.
- Update Post: Allows users to modify the content of their posts.
- Delete Post: Authenticated users can delete their own posts.

#### Search Posts:

- Search by Title: Users can search for posts by specifying the title in the search query.

## Technologies Used

- Node.js: The backend is built using Node.js, a runtime environment for executing JavaScript code server-side.
- Express.js: A web application framework for Node.js, used to create robust APIs.
- MongoDB: A NoSQL database, used for storing user information and posts.
- JWT (JSON Web Tokens): Used for secure user authentication by generating tokens.
- bcrypt: A library for hashing passwords to enhance security.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Getting Started

Clone the project on your computer and install the necessary dependencies.

##### bash
git clone https://github.com/enesbilen/nodejs-api-project.git
cd nodejs-api-project
npm install

### Configuration
Create the .env file and add the following information to it:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key

#### Routes
- GET /getPosts: Retrieve all posts.
- POST /createPost: Create a new post. (For authenticated users)
- GET /getDetail/:id: Retrieve details of a specific post.
- PATCH /getUpdate/:id: Update a specific post. (For authenticated users)
- DELETE /deletePost/:id: Delete a specific post. (For authenticated users)
- GET /searchPost: Search for posts.