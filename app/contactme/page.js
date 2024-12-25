import React from "react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center space-y-6">
        <div>
          <p className="text-lg md:text-2xl">You can reach me by filling out my contact form.</p>
          <Link href="/contactform">
            <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              Contact Form
            </button>
          </Link>
        </div>
        </div>
        <p className="text-lg md:text-2xl">Or</p>
        <div className="w-full max-w-lg bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center space-y-6">
          <div>
          <p className="text-lg md:text-2xl">You can also reach me by checking my contact details.</p>
          <Link href="/mycontactdetail">
            <button className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              My Contact Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
export const metadata = {
  title: "ContactUs",
  description: "Created By S. Surya Prasad",
};
