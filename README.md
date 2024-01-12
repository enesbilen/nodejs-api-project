# Node.js API Project

This project includes a simple API system built using Node.js. You can perform basic operations such as user registration, login and post management.

## Technologies Used

- Node.js
- Express
- MongoDB

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