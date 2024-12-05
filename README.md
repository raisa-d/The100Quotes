# The 100 Quotes CRUD App

This is my first CRUD (Create, Read, Update, Delete) application built using **Node.js**, **Express**, and **MongoDB**. The app allows users to upload, view, edit, and delete quotes from *The 100*, a post-apocalyptic science fiction series.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Lessons Learned](#lessons-learned)
- [Contact](#contact)

## Features
- **Upload quotes**: Submit your favorite quotes from *The 100* to the database.
- **View all quotes**: Display all quotes in an organized list.
- **Edit quotes**: Update existing quotes with new information.
- **Delete quotes**: Remove quotes from the database.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for handling routes and HTTP methods.
- **MongoDB Atlas**: Cloud-based NoSQL database for storing quotes.

## Lessons Learned
- **Using Express**: This was my first time importing and using Express. I learned how to set up routes and handle GET and POST requests.
- **Connecting to MongoDB Atlas**: Initially, I struggled with errors when connecting to MongoDB Atlas. I discovered that my database password contained special characters, which required encoding. After fixing this, I successfully established the connection.
- **CRUD Operations**: Implementing Create, Read, Update, and Delete functionality with MongoDB Atlas helped me understand how to interact with a database from an Express server and what build in methods with MongoDB Atlas are necessary. I will likely learn Mongoose in the future.
- **Connecting to localhost**: I kept having an issue where my server would work, I wouldn't change the code at all but would close it and come back to it. When I came back the server wouldn't load. In the end, it was solved by deleting the node_modules folder and reinstalling it. This may mean node_modules had corrupted or there were incompatible dependencies.
- **Practice with Async/Await**: Reworking my code from using promise chaining to async/await syntax helped me get in the flow of using async/await.
- **Encountering EJS/Template Engines For The First Time** 

## Contact
<p> 
  <a href="https://raisadorzback.netlify.app/" target="blank">
    <img src="https://img.shields.io/badge/Website-563d7c?&style=for-the-badge" alt="Website">
  </a>
  <a href="https://www.linkedin.com/in/raisa-d/">
    <img src="https://img.shields.io/badge/LinkedIn-046E6D?logo=linkedin&style=for-the-badge">
  </a>
  <a href="https://twitter.com/rai__bread" target="blank">
    <img src="https://img.shields.io/badge/Twitter-563d7c?logo=twitter&style=for-the-badge&logoColor=white" alt="rai__bread" />
  </a> 
</p>