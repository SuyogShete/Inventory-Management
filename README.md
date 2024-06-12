## Deployed Link - https://adorable-gelato-33e1b7.netlify.app
## Click on the cart icon in header to visit https://adorable-gelato-33e1b7.netlify.app/cart

## Note : Wait for some time to start the server when you visit the site

## Screenshot of home page of deplyed app
![Screenshot 2024-06-12 105908](https://github.com/SuyogShete/Inventory-Management/assets/115652302/a08f03e6-8e2a-4527-ae7e-c06f4f7ba22b)

## Screenshot of cart page of deployed app
![Screenshot 2024-06-12 105845](https://github.com/SuyogShete/Inventory-Management/assets/115652302/6303b024-69fe-4596-898e-5889d447b2a8)


## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction
This is a full stack web application built using React, Node.js, and Express. It provides a robust and scalable foundation for building modern web applications. The front-end is built with React to ensure a dynamic and responsive user experience, while the back-end leverages Node.js and Express for efficient and reliable server-side operations.

## Features
- RESTful API integration
- Responsive design for mobile and desktop
- CRUD operations (Create, Read, Update, Delete)

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js, Express
- **Styling**: CSS, Bootstrap (or any other CSS framework)

## Installation

### Prerequisites
- Node.js (v12 or higher)
- MongoDB (running locally or a cloud instance)

### Clone the Repository
```bash
git clone https://github.com/SuyogShete/Inventory-Management/tree/main
cd Inventory-Management
```

### Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

## Running the Application

### Backend
1. Create a `.env` file in the `backend` directory and add the necessary environment variables (see [Environment Variables](#environment-variables)).
2. Start the server:
    ```bash
    cd backend
    npm start
    ```

### Frontend
1. Start the React application:
    ```bash
    cd frontend
    npm start
    ```

## Folder Structure
```
fullstack-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   ├── utils/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
│
└── README.md
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
