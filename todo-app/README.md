To-Do App – React Project
    Project Description

        This is a scalable and maintainable To-Do application built with React. The app allows users to manage their daily tasks by adding, editing, deleting, and marking them as completed or pending. The UI is clean, responsive, and built using Tailwind CSS, with persistent storage using localStorage.

        The goal of this project was to practice:
        -React state management using useReducer
        -Routing with React Router
        -Clean, modular project structure
        -Building a production-ready UI

Features Implemented
    Core Features
        -Add new tasks with title, description, and priority
        -Edit existing tasks
        -Delete tasks individually
        -Mark tasks as Completed or Pending
        -Filter tasks by status: All, Completed, Pending
        -Search tasks by title

    State Management
    Tasks are managed using React’s useReducer
    State is persisted to localStorage to survive page reloads

Routing
/ → Home / To-Do List
/add → Add Task Page
/edit/:id → Edit Task Page

Styling & UI
    -Clean card-based design for tasks
    -Completed/Pending status displayed below task title
    -Responsive layout for mobile and desktop
    -Buttons with readable colors and hover effects
    -Task priority indicated via colored border (High / Medium / Low)

Project Structure
/src
  /components
    Header.jsx
    TodoItem.jsx
    TodoList.jsx
  /pages
    Home.jsx
    AddTodo.jsx
    EditTodo.jsx
  App.jsx
  index.js

Installation & Running Locally

    Clone the repository:
    -git clone <your-repo-url>
    -cd <your-project-folder>


    Install dependencies:
    -npm install

    Start the development server:
    -npm start

    Open the app in your browser at:
    -http://localhost:3000

Notes
-All task data is saved in the browser’s local storage.
-App is fully responsive and works on desktop and mobile.
-Buttons and labels are designed for clarity and readability.