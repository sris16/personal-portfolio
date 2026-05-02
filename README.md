# Personal Portfolio

A full-stack, responsive personal portfolio built to showcase projects, skills, and experience. It features a modern, premium UI with a dark theme and a fully functional backend to handle contact form submissions.

## Features

- **Responsive Design**: Looks stunning on mobile, tablet, and desktop.
- **Modern UI**: Implements a dark mode theme with glassmorphism, fluid typography, and CSS micro-animations.
- **Scroll Animations**: Smooth fade-in effects as elements enter the viewport.
- **Functional Backend**: Express.js server to handle incoming POST requests.
- **Database Integration**: MongoDB integration using Mongoose to securely store contact form messages.

## Tech Stack

**Frontend:**
- HTML5
- CSS3 / Variables (Custom Properties)
- JavaScript (ES6+)
- Google Fonts (Outfit)
- Phosphor Icons

**Backend:**
- Node.js
- Express.js
- MongoDB / Mongoose
- CORS
- dotenv

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running locally (or a MongoDB Atlas URI)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sris16/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Setup the Backend:**
   Navigate into the `backend` directory and install the dependencies:
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the `backend` folder (optional) and add your MongoDB connection string if it differs from the default:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
   ```

### Running the Application

1. **Start the Backend Server:**
   In the `backend` directory, run:
   ```bash
   node server.js
   ```
   *The server should now be running on `http://localhost:5000`.*

2. **Start the Frontend:**
   Open the `frontend/index.html` file in your browser. For the best experience, use a local server like the **Live Server** extension in VS Code to run the frontend.

## Project Structure

```text
personal-portfolio/
├── frontend/
│   ├── index.html       # Main HTML structure
│   ├── style.css        # Premium UI design and layout styles
│   └── script.js        # Scroll animations and fetch API logic
└── backend/
    ├── server.js        # Express server entry point
    ├── package.json     # Node.js dependencies
    ├── models/
    │   └── Contact.js   # Mongoose schema for contact messages
    └── routes/
        └── contact.js   # API endpoint routes for the contact form
```

## License

This project is open-source and available under the MIT License.
