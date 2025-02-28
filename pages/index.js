import { Suspense } from "react";

function FetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ message: "Hello from React 19!" }), 1000);
  }).then((data) => (
    <div className="text-lg font-semibold">{data.message}</div>
  ));
}

import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const popupState = localStorage.getItem("popupClosed");
    if (popupState === "true") {
      setShowPopup(false);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("popupClosed", "true");
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-[#f5f0e1] p-6 md:p-10 rounded-lg shadow-2xl border border-[#c2b8a3] w-[90%] max-w-2xl h-auto min-h-[200px] md:min-h-[300px] text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#5a4a42] mb-4 md:mb-6 font-serif">
          Contribute to Open Source
        </h2>
        <p className="text-[#7a6b5e] text-base md:text-lg font-serif">
          This blog is an open-source project! Fork the repository and make a pull request to contribute.
        </p>
        <a
          href="https://github.com/ITSASHISHGITHUB/Open-Source-Blog"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[#8b5e3b] font-semibold underline mt-4 text-base md:text-lg"
        >
          Fork & Contribute
        </a>
        <button
          onClick={handleClose}
          className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-[#8b5e3b] text-white rounded-lg shadow-md hover:bg-[#6f4630] transition-all text-base md:text-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function Blog() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <Navbar />
      <div className="w-full md:w-4/5 mx-auto p-4 md:p-6 bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-lg">
        <Popup />

        <div className="flex justify-end mb-4">
          <div className="bg-indigo-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md">
            {formattedDate}
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
          Exploring React 19 with Next.js
        </h1>

        <p className="text-gray-700 text-sm md:text-base mb-4">
          React 19 is the latest milestone in the evolution of the React
          ecosystem, bringing significant improvements in performance, developer
          experience, and new features. In this blog, we'll explore the key
          highlights of React 19 and how you can integrate it with Next.js for
          modern web development.
        </p>

        <div className="bg-amber-100 border-l-4 border-amber-500 p-3 md:p-4 mb-4 md:mb-6 rounded-r-lg">
          <h3 className="text-amber-800 font-semibold text-sm md:text-base">Breaking News</h3>
          <p className="text-amber-700 text-sm md:text-base">
            React 19 introduces groundbreaking performance improvements that could
            change how we think about component optimization.
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-emerald-700">
          What's New in React 19?
        </h2>
        <ul className="list-none text-gray-700 text-sm md:text-base mb-4 md:mb-6">
          {[
            "React Compiler for better performance",
            "New Server Components API",
            "Improved Suspense for data fetching",
            "Enhanced Hooks and state management",
            "Improved error handling",
          ].map((item, index) => (
            <li key={index} className="mb-2 flex items-center">
              <span className="inline-flex w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500 text-white mr-2 md:mr-3 items-center justify-center text-xs md:text-sm font-medium leading-none">
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-700">
          React Compiler: Automatic Performance Optimization
        </h2>
        <div className="bg-white p-4 md:p-5 rounded-lg shadow-md mb-4 md:mb-6 border-l-4 border-blue-500">
          <p className="text-gray-700 text-sm md:text-base">
            The React Compiler is one of the most exciting additions in React 19.
            It automatically analyzes your components and optimizes the generated
            code to eliminate unnecessary re-renders and improve performance.
            Unlike manual optimization techniques, the compiler works behind the
            scenes without requiring you to change your coding patterns.
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-purple-700">
          Server Components: A New Paradigm
        </h2>
        <div className="bg-white p-4 md:p-5 rounded-lg shadow-md mb-4 md:mb-6 border-l-4 border-purple-500">
          <p className="text-gray-700 text-sm md:text-base">
            React 19 brings a more refined Server Components API, allowing
            developers to build components that run exclusively on the server.
            This approach reduces the JavaScript bundle size sent to the client,
            improves initial page load performance, and enables direct access to
            server-side resources without additional API layers.
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-rose-700">
          Using React 19 in Next.js
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Next.js enhances React's capabilities by providing optimized routing,
          server-side rendering, and static site generation. Here's an example of
          using Suspense for data fetching:
        </p>

        <div className="p-4 md:p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-md mb-4 md:mb-6 border border-gray-300">
          <h3 className="text-rose-600 font-semibold mb-2 md:mb-3 text-sm md:text-base">Live Demo</h3>
          <Suspense
            fallback={
              <div className="bg-white p-3 md:p-4 rounded animate-pulse flex space-x-4">
                <div className="h-4 md:h-5 bg-gray-300 rounded w-1/2"></div>
              </div>
            }
          >
            <FetchData />
          </Suspense>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mt-4 md:mt-6 mb-2 text-teal-700">
          Enhanced Hooks Ecosystem
        </h2>
        <div className="bg-white p-4 md:p-5 rounded-lg shadow-md mb-4 md:mb-6 border-l-4 border-teal-500">
          <p className="text-gray-700 text-sm md:text-base">
            React 19 introduces new hooks and improves existing ones, making state
            management and side-effects handling more intuitive. The updated hook
            system provides better TypeScript integration and more predictable
            behavior in concurrent rendering scenarios.
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-orange-700">
          Improved Error Handling
        </h2>
        <div className="bg-white p-4 md:p-5 rounded-lg shadow-md mb-4 md:mb-6 border-l-4 border-orange-500">
          <p className="text-gray-700 text-sm md:text-base">
            Error boundaries have been revamped in React 19, offering more
            granular control over error handling and recovery strategies. Combined
            with the new debugging tools, developers can quickly identify and fix
            issues in their applications.
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-indigo-700">
          Practical Example: Data Fetching with Suspense
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Let's look at a more complex example of data fetching using React 19's
          Suspense:
        </p>

        <div className="bg-gray-900 text-white p-4 md:p-6 rounded-lg overflow-auto shadow-lg mb-4 md:mb-6 border border-gray-700">
          <div className="flex items-center mb-2 md:mb-3">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 mr-1 md:mr-2"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500 mr-1 md:mr-2"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 mr-1 md:mr-2"></div>
            <span className="text-gray-400 text-xs md:text-sm">UserProfile.js</span>
          </div>
          <pre className="text-xs md:text-sm font-mono">
            {`// UserProfile.js
function fetchUserData(userId) {
  const userPromise = fetch(\`/api/users/\${userId}\`)
    .then(res => res.json());
  
  return {
    read() {
      return userPromise;
    }
  };
}

const UserResource = fetchUserData('123');

function UserProfile() {
  const userData = UserResource.read();
  
  return (
    <div>
      <h3>{userData.name}</h3>
      <p>{userData.email}</p>
    </div>
  );
}

// App.js
function App() {
  return (
    <Suspense fallback={<div>Loading user profile...</div>}>
      <UserProfile />
    </Suspense>
  );
}`}
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow-md border-t-4 border-cyan-500">
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-cyan-700">
              Next.js Integration
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Next.js has been updated to fully support React 19's features,
              including server components and the React compiler. The integration
              is seamless, allowing developers to leverage the full power of React
              19 within the familiar Next.js framework.
            </p>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-lg shadow-md border-t-4 border-fuchsia-500">
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-fuchsia-700">
              Migration Guide
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Migrating from React 18 to React 19 is relatively straightforward
              for most applications. The React team has provided a comprehensive
              migration guide that outlines the necessary steps and potential
              breaking changes. Most existing code will continue to work with
              minimal modifications.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-4 md:p-6 rounded-lg shadow-lg mb-4 md:mb-6">
          <p className="font-medium text-sm md:text-lg">
            React 19 is a game-changer for modern web development, making it more
            efficient and powerful. When combined with Next.js, it provides an
            optimized workflow for building scalable applications. Start exploring
            React 19 today and take advantage of its new capabilities in your
            Next.js projects!
          </p>
        </div>

        <div className="border-t border-gray-300 pt-4 md:pt-6 mt-6 md:mt-8">
          <div className="flex justify-between items-center">
            <div className="text-xs md:text-sm text-gray-500">
              <p>This blog is made by Ashish Yadav</p>
            </div>
            <div className="flex space-x-2 md:space-x-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-sky-500 flex items-center justify-center text-white">
                <span className="text-xs">TW</span>
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-rose-500 flex items-center justify-center text-white">
                <span className="text-xs">IG</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200 bg-gray-50 rounded-lg shadow-inner">
          <div className="flex flex-col md:flex-row justify-between items-center p-3 md:p-4">
            <div className="mb-3 md:mb-0">
              <div className="text-lg md:text-xl font-bold text-blue-700">Ashish Blogs</div>
              <p className="text-gray-600 text-xs md:text-sm">
                Insights on modern web development
              </p>
              <p className="text-gray-500 text-xs mt-1">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>

            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/ashishyadav677/"
                className="flex items-center bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 md:px-4 md:py-2 rounded transition duration-300 text-xs md:text-sm"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}