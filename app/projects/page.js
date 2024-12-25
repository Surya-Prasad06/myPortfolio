import React from "react";

const Project = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Projects
      </h1>
      <div className="flex items-center justify-center ">
        <div className=" max-w-lg bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center space-y-6">
          <div>
            <p className="text-lg md:text-2xl j">
            These are the projects I have worked on so far. I am continually working on more to enhance my skills and expand my knowledge.
            </p>
          </div>
        </div>
      </div>
      <br /><br />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* project1 */}

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            To-Do List Application
          </h2>
          <img
            src="images/to-do_list.png"
            alt="Project 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="p-4 bg-black bg-opacity text-white rounded-lg ">
            <h2 className="text-xl font-bold  mb-2">Technologies Used:</h2>
            <p>HTML, CSS, JavaScript</p>
          </div>

          <p className="text-gray-600 mb-4">
            Developed a user-friendly to-do list application using JavaScript,
            HTML, and CSS to help users manage their tasks efficiently.
          </p>
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <a
              href="https://to-do-list-ssp.netlify.app"
              className="text-center"
            >
              View Project
            </a>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Weather Application
          </h2>
          <img
            src="images/weather_app.png"
            alt="Project 3"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="p-4 bg-black bg-opacity text-white rounded-lg ">
            <h2 className="text-xl font-bold  mb-2">Technologies Used:</h2>
            <p>HTML, CSS, JavaScript</p>
          </div>
          <p className="text-gray-600 mb-4">
            Built a weather application that fetches real-time weather data
            using APIs, and displays it with a visually appealing interface.
          </p>
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <a href="https://weather-ssp.netlify.app" className="text-center">
              View Project
            </a>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Calculator
          </h2>
          <img
            src="images/calculator.png"
            alt="Project 4"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="p-4 bg-black bg-opacity text-white rounded-lg ">
            <h2 className="text-xl font-bold  mb-2">Technologies Used:</h2>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>
          <p className="text-gray-600 mb-4">
            Created a functional calculator with basic arithmetic operations
            using JavaScript, HTML, and CSS, demonstrating practical use of
            event handling.
          </p>
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <a
              href="https://calculator-ssp.netlify.app"
              className="text-center"
            >
              View Project
            </a>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Stopwatch
          </h2>
          <img
            src="images/stopwatch.png"
            alt="Project 5"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="p-4 bg-black bg-opacity text-white rounded-lg ">
            <h2 className="text-xl font-bold  mb-2">Technologies Used:</h2>
            <p>HTML, CSS, JavaScript</p>
          </div>
          <p className="text-gray-600 mb-4">
            Developed a stopwatch application using JavaScript, HTML, and CSS,
            showcasing skills in timing events and updating the UI dynamically.
          </p>
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <a
              href="https://stop-watch-ssp.netlify.app"
              className="text-center"
            >
              View Project
            </a>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Quiz App
          </h2>
          <img
            src="images/quiz-app.png"
            alt="Project 6"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="p-4 bg-black bg-opacity text-white rounded-lg ">
            <h2 className="text-xl font-bold  mb-2">Technologies Used:</h2>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>
          <p className="text-gray-600 mb-4">
            Developed a quiz application using JavaScript, HTML, and CSS,
            showcasing skills in creating interactive quizzes.
          </p>
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <a href="https://quiz-app-ssp.netlify.app" className="text-center">
              View Project
            </a>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-2xl  font-semibold text-gray-800 mb-4">
            Rock-Paper-Scissors Game
          </h2>
          <img
            src="images/rock-paper-scissors.png"
            alt="Project 7"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="p-4 bg-black bg-opacity text-white rounded-lg ">
            <h2 className="text-xl font-bold  mb-2">Technologies Used:</h2>
            <p>HTML, CSS, JavaScript</p>
          </div>
          <p className="text-gray-600 mb-4">
            Developed a simple Rock Paper Scissors game using JavaScript, HTML,
            and CSS, demonstrating basic game development concepts.
          </p>
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <a
              href="https://rock-paper-scissors-ssp.netlify.app/"
              className="text-center"
            >
              View Project
            </a>
          </button>
        </div>

        {/* project 7  */}

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-2xl  font-semibold text-gray-800 mb-4">
            Ask Your Problem
          </h2>
          <img
            src="images/django_project.png"
            alt="Project 7"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="p-4 bg-black bg-opacity text-white rounded-lg ">
            <h2 className="text-xl font-bold  mb-2">Technologies Used:</h2>
            <h2 className="text-xl font-bold  mb-2">Backend:</h2>
            <p> Django (Python Framework)</p>
            <h2 className="text-xl font-bold  mb-2">Frontend:</h2>
            <p> HTML, CSS, JavaScript</p>
            <h2 className="text-xl font-bold  mb-2">DataBase:</h2>
            <p> SQLite</p>
          </div>
          <p className="text-gray-600 mb-4">
            Ask Your Problem is a web-based application built with Django that
            enables users to post their problems and get solutions from others.
            The application provides a structured backend for managing problems,
            a user-friendly interface for submissions, and dynamic rendering of
            content.
          </p>
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <a
              href="https://github.com/Surya-Prasad06/ask-your-problem.git"
              className="text-center"
            >
              GitHub Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;

export const metadata = {
  title: "Projects",
  description: "Created By S. Surya Prasad",
};
