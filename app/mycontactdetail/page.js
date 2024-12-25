import React from 'react'

const MycontactDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-white">
      <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Contact Details</h1>
        <div className="space-y-4">
          {/* Gmail */}
          <div className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
            
            <span className="font-medium text-lg">Email</span>
            <a
              href="mailto:suryaprasadsadige007@gmail.com"
              className="ml-auto font-bold text-blue-300 hover:underline"
            >
              Mail Now
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
            
            <span className="font-medium text-lg">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/surya-prasad-sadige-8a8594280/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-blue-300 hover:underline"
            >
              Check Linkedin
            </a>
          </div>

          {/* Contact Number */}
          <div className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
            
            <span className="font-medium text-lg">Phone</span>
            <a href="tel:+916300851794" className="ml-auto text-blue-300 hover:underline">
            Call Now
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
            
            <span className="font-medium text-lg">GitHub</span>
            <a
              href="https://github.com/Surya-Prasad06?tab=overview&from=2024-11-01&to=2024-11-30"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-blue-300 hover:underline"
            >
              Check GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MycontactDetails


export const metadata = {
  title: "MycontactDetails",
  description: "Created By S. Surya Prasad",
};
