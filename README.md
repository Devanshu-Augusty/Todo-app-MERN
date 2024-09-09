# Todo App (MERN)

A simple full-stack Todo application built using the MERN (MongoDB, Express, React, Node.js) stack with Zod for validation.

## Features

- Add new todos
- Mark todos as completed
- Basic backend validation with Zod

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Validation:** Zod

## How to Start the Project

1. **Backend:**
   - Open your terminal and navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install the necessary libraries:
     ```bash
     npm install
     ```
   - Go to `backend/db.js` and enter your MongoDB connection string inside `mongoose.connect()`.
   - Start the backend server:
     ```bash
     node index.js
     ```

2. **Frontend:**
   - Open another terminal and navigate to the frontend folder:
     ```bash
     cd frontend
     ```
   - Install the necessary libraries:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm run dev
     ```

3. Now, open your browser and go to [http://localhost:5173](http://localhost:5173/) to check out the app.
