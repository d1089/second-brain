![Python Version](https://img.shields.io/badge/python-3.x-brightgreen)
![React Version](https://img.shields.io/badge/react-%5E18.3.1-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-%3E%3D%200.68.0-orange)
<!-- ![TDD Passing](https://img.shields.io/github/workflow/status/d1089/second-brain/CI?label=TDD%20Passing&logo=jest) -->


# Second Brain: New Age Todo List App

This is a simple **Todo List** project that demonstrates creating a todo list application using **React.js** for the frontend and **FastAPI** for the backend. 
The project includes features such as adding todos, marking them as completed, and integrates backend API with frontend using **Axios**. 
We have adopted **TDD (Test-Driven Development)** in this project.

---

## Commit History and Descriptions

### 1. `setup/fastapi-server-initialize`

- **Description**: 
  - Set up the **FastAPI server** with necessary configurations and directories.
  - Initialized basic routes and data models to support the todo list functionality.
  
### 2. `test/failing-test-add-todo`

- **Description**: 
  - Wrote the first test for the frontend to verify the "Add Todo" functionality.
  - The test initially failed as the backend was not yet integrated.
  - This test served as the foundation for creating the frontend feature.

### 3. `feature/adding-input-field-with-placeholder`

- **Description**: 
  - Introduced an input field in the React component to allow users to enter new todo items.
  - Added placeholder text "Enter todo" for better user experience.
  - The input field captures user input for new todos.

### 4. `test/todolist-item-mark-as-completed`

- **Description**: 
  - Added a test to verify that a todo item can be marked as completed.
  - The test ensures that clicking a todo item triggers the completion status change.

### 5. `feature/mark-todo-list-item-as-completed`

- **Description**: 
  - Implemented functionality to mark todo items as completed.
  - Clicking on a todo item will toggle its completion status.
  - Added a strikethrough effect for completed todos.

### 6. `feature/create-todo-api`

- **Description**: 
  - Developed the **FastAPI backend** to handle the creation of todo items.
  - Created a `POST` API endpoint (`/todos`) to accept new todos and return the created todo.

### 7. `test/server-todo-create-api`

- **Description**: 
  - Created a test for the FastAPI server's todo creation endpoint.
  - Ensured that the `POST` request to `/todos` creates a todo correctly and returns the expected response.

### 8. `feature/integrating-create-todo-api`

- **Description**: 
  - Integrated the **FastAPI backend API** with the **React frontend**.
  - Added logic in React to send a `POST` request to the backend when the user adds a new todo.
  - On successful API response, the new todo is added to the todo list in the frontend.

---

## Project Setup

### Prerequisites

Ensure you have the following tools installed:

- **Node.js** (for React frontend)
- **Python 3.x** (for FastAPI backend)
- **Axios** (for making HTTP requests in React)
- **Vitest** (for testing)

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/d1089/second-brain.git
cd second-brain
```

### 2. Backend Setup (FastAPI)

#### Install Python Dependencies

Navigate to the backend directory (`/server`) and install the required Python dependencies using `pip`:

```bash
pip install -r requirements.txt
```

#### Run FastAPI Server

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

The backend API should now be running at `http://localhost:8000`.

### 3. Frontend Setup (React)

#### Install npm Dependencies

Navigate to the frontend directory (`/client`) and install the required npm dependencies:

```bash
npm install
```

#### Run React Development Server

Start the React development server:

```bash
npm run dev
```

The frontend application should now be running at `http://localhost:3000`.

---

## Testing

We use **Vitest** for testing the frontend and backend integration. Tests are written in **Test-Driven Development (TDD)** style to ensure that features work correctly.

### Run all Tests

To run all tests:

```bash
npm run test
```

### Test Files:

- **Frontend Tests**:
  - Located in: `src/component/TodoList.test.jsx`
  - Contains tests for adding a todo, marking a todo as completed, etc.

- **Backend Tests**:
  - Located in: `tests/test_todo.py`
  - Contains tests for the FastAPI backend's todo creation endpoint.
 
### Future Improvements

  - **Authentication**: Implement user authentication to allow multiple users to have their own todo lists.
  - **Persistence**: Integrate a database (e.g., PostgreSQL) to persist todos.
  - **UI Enhancements**: Add features such as drag-and-drop for ordering todos, due dates, and priority levels.

---
