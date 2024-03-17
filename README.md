# MERN Boilerplate with MVC Architecture
This repository contains a MERN (MongoDB, Express.js, React.js, Node.js) boilerplate for building full-stack web applications following the MVC (Model-View-Controller) architecture. It includes separate directories for the backend and frontend components, allowing for modular development and easy deployment.

Don't forget to star⭐ this repository if you find it helpful! It helps to show appreciation for the work put into this project.

For more information about me, visit my [Portfolio](https://www.manankanani.in). You can also reach out to me directly through the contact form on my website.

## Technolgies Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E ) ![ReactJS](https://img.shields.io/badge/ReactJS-%23323330.svg?style=for-the-badge&logo=react ) ![NodeJS](https://img.shields.io/badge/NodeJS-%23323330.svg?style=for-the-badge&logo=nodedotjs ) ![Express](https://img.shields.io/badge/express-%23323330.svg?style=for-the-badge&logo=express ) ![MongoDB](https://img.shields.io/badge/MongoDB-%23323330.svg?style=for-the-badge&logo=mongodb )


# Installation Guide

1. **Clone the repository:**

```bash
git clone https://github.com/MananKanani5/mern-setup.git
```

2. **Navigate to the root directory mern-setup:**
```bash
cd mern-setup
```

3. **Install required modules for both running as single project**
```bash
npm install
```

4. **Navigate to the backend directory:**
```bash
cd backend
```

5. **Install backend dependencies:**
```bash
npm install
```

6. **Navigate back to the root directory:**
```bash
cd ../
```

7. **Navigate to the frontend directory:**
```bash
cd frontend
```

8. **Install frontend dependencies:**
```bash
npm install
```

7. **Change your MongoDB connection URI in the .env file located in the backend directory.**
```bash
MONGO_URI = "YOUR_MONGO_URI_STRING"
```


# How to Run the Project ?

1. **In the root directory mern-setup, start the application:**
```bash
npm run start
```
This command will concurrently run the Express server, frontend React app, and establish a connection with MongoDB.
