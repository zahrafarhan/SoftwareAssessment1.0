## Overview

The assignment was to implement warehouse software. I chose JavaScript as the programming language for this project to build both the frontend and backend components.

## Technologies Used

- **Node.js**: Used for building the backend server, handling API requests, and managing application logic.
- **MongoDB**: Used as the NoSQL database. It handles JSON objects well.
- **Express**: A web application framework for Node.js, used to build the RESTful API endpoints.
- **React**: Used for building the frontend of the application.
- **Docker**: Could not containerize. 
- **Postman**: Used for testing the REST APIs.

## Getting Started

### Project Structure

- **Backend**: Implements the server-side logic, API endpoints, and connects to MongoDB.
- **Frontend**: Provides the user interface and interacts with the backend services.

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/zahrafarhan/TaskAssessment.git
    ```

2. **Navigate to the Backend directory:**

    ```bash
    cd backend
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Load the JSON file using the script:**

    ```bash
    node importNode.js
    ```

5. **Run the server:**

    ```bash
    npm start
    ```

### Frontend Setup

1. **Navigate to the Frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

## Postman Commands

- **To get the products:**
  - **REQUEST:** GET
  - **URL:** `http://localhost:5000/products`
  
- **To get the articles:**
  - **REQUEST:** GET
  - **URL:** `http://localhost:5000/articles`
  
- **To sell the dining chair:**
  - **REQUEST:** PUT
  - **URL:** `http://localhost:5000/products/sell/Dining%20Chair`

## Known Issues

- Few bugs that need further debugging.
- Docker could not be containerized. Added Dockerfile, .dockerignore, and docker-compose.yaml files. The image was built successfully, but the container could not be run on localhost.

## Missing

- Unit tests for source code.
