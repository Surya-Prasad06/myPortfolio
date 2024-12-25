import React from "react";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-12 text-center">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* HTML */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 text-center">
          <img
            src="images/html.png"
            alt="HTML"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">HTML</h3>
          <p className="text-gray-300">Markup language for building web pages.</p>
        </div>

        {/* CSS */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 text-center">
          <img
            src="images/csss.png"
            alt="CSS"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">CSS</h3>
          <p className="text-gray-300">Styling language for web pages layout.</p>
        </div>

        {/* JavaScript */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 text-center">
          <img
            src="images/jss.jpg"
            alt="JavaScript"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">JavaScript</h3>
          <p className="text-gray-300">Programming language for web interactivity.</p>
        </div>

        {/* Python */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 text-center">
          <img
            src="images/Python.png"
            alt="Python"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Python</h3>
          <p className="text-gray-300">Powerful language for backend.</p>
        </div>

        {/* Django */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 text-center">
          <img
            src="images/Django.png"
            alt="Django"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Django</h3>
          <p className="text-gray-300">High-level Python web framework.</p>
        </div>

        {/* React.Js */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 text-center">
          <img
            src="images/react.png"
            alt="React"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">React.Js</h3>
          <p className="text-gray-300">JavaScript library for building user interfaces.</p>
        </div>

        {/* Next.Js */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 text-center">
          <img
            src="images/nextjs.png"
            alt="Next.Js"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Next.Js</h3>
          <p className="text-gray-300">React framework for server-side rendering.</p>
        </div>
        {/* MySql */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 text-center">
          <img
            src="images/mysql.png"
            alt="MySql"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">MySql</h3>
          <p className="text-gray-300">Relational database management system.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

export const metadata = {
  title: "Skills",
  description: "Created By S. Surya Prasad",
};
