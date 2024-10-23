# Full-Stack Logging System with Role-Based Access

This project implements a full-stack logging system with user action tracking and role-based access control (RBAC). The backend is built with **Node.js** and **Express.js**, and the frontend is powered by **Next.js** with **Zustand** for state management. Authentication is done via **JWT** and logs are stored in **MongoDB**.

**Note:** Intentionally, provided .env file

Deploy Link: 

**Admin** 
username: admin@gmail.com
password: 12345678

## Features

- User authentication with JWT.
- Role-based access control (admin/user).
- Logging of user actions (login, create, update, delete).
- Frontend log display with filtering and pagination.
- Soft deletion of logs.
- Global state management with Zustand (JWT token persistence).

## Tech Stack

- **Frontend**: Next.js, TypeScript, Zustand, Tailwind CSS
- **Backend**: Node.js, Express.js, JWT, MongoDB, Mongoose
- **Database**: MongoDB
- **State Management**: Zustand with persist for JWT token

---

## Backend Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/erpankajk4/Logger-Next.js-Node.js.git
cd fullstack-logging-system
````
Demo-
![login](https://github.com/user-attachments/assets/cc1e3235-4009-4b5a-a464-e95825d4bbab)
![register](https://github.com/user-attachments/assets/26aa9fb6-3821-428a-b73b-cd8d3d2e1eda)
![dasboard](https://github.com/user-attachments/assets/29c499ec-5747-443a-9202-0013ebc86b6a)


