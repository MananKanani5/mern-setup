# mern-setup
This repository contains a basic MERN (MongoDB, Express.js, React.js, Node.js) setup for building full-stack web applications following the MVC (Model-View-Controller) architecture.. It includes separate directories for the backend and frontend components, allowing for modular development and easy deployment.

Don't forget to star⭐ this repository if you find it helpful! It helps to show appreciation for the work put into this project.

For more information about me, visit my [Portfolio](https://www.manankanani.in). You can also reach out to me directly through the contact form on my website.

## Installation

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


## Running

1. **In the root directory mern-setup, start the application:**
```bash
npm run start
```
This command will concurrently run the Express server, frontend React app, and establish a connection with MongoDB.
