import React from "react";

function LearnData() {
  const data = [
    {
      name: "HTML",
      description: "HTML (HyperText Markup Language) is the backbone of web pages.",
      concepts: [
        "Basic Elements (div, p, h1-h6, span)",
        "Forms & Inputs (text, radio, checkbox, submit)",
        "Tables (thead, tbody, tr, td, th)",
        "Semantic HTML (header, footer, section, article)",
        "Multimedia (audio, video, canvas, svg)",
        "Meta Tags (SEO, Open Graph, Charset, Viewport)"
      ]
    },
    {
      name: "CSS",
      description: "CSS (Cascading Style Sheets) is used for styling web pages.",
      concepts: [
        "Selectors (Class, ID, Attribute, Pseudo-classes)",
        "Box Model (Margin, Padding, Border, Content)",
        "Flexbox (Justify, Align, Grow, Shrink, Basis)",
        "Grid Layout (Rows, Columns, Auto-fit, Auto-fill)",
        "Animations & Transitions (keyframes, transform, delay)",
        "Responsive Design (Media Queries, Mobile-first Design)",
        "CSS Preprocessors (SCSS, SASS, LESS)"
      ]
    },
    {
      name: "JavaScript",
      description: "JavaScript is a powerful programming language for web interactivity.",
      concepts: [
        "Data Types & Variables (let, const, var)",
        "Functions (Arrow, Anonymous, Callback, Hoisting)",
        "DOM Manipulation (getElementById, querySelector, createElement)",
        "Event Handling (addEventListener, Bubbling & Capturing)",
        "Asynchronous JS (setTimeout, setInterval, Promises, Async/Await)",
        "ES6 Features (Spread Operator, Destructuring, Template Literals)",
        "LocalStorage & SessionStorage",
        "Fetch API & AJAX",
        "Error Handling (try, catch, finally)"
      ]
    },
    {
      name: "React",
      description: "React is a JavaScript library for building dynamic UIs.",
      concepts: [
        "JSX (JavaScript XML)",
        "Components (Functional & Class-based)",
        "Props & State Management",
        "React Hooks (useState, useEffect, useContext, useRef)",
        "React Router (Navigation, Route, Link, useNavigate)",
        "Redux (Store, Actions, Reducers, Dispatch)",
        "API Calls in React (Fetching data using useEffect)",
        "Context API vs Redux",
        "Optimizing Performance (Memoization, Lazy Loading, Code Splitting)"
      ]
    },
    {
      name: "PHP",
      description: "PHP is a server-side scripting language for dynamic web applications.",
      concepts: [
        "Variables & Data Types",
        "Forms Handling (POST & GET Requests)",
        "File Handling (Upload, Read, Write, Delete)",
        "Cookies & Sessions",
        "Database Connection (MySQL, PDO, MySQLi)",
        "CRUD Operations (Create, Read, Update, Delete)",
        "PHP Security (XSS, CSRF, SQL Injection Prevention)",
        "OOP in PHP (Classes, Objects, Inheritance, Polymorphism)",
        "Laravel Basics (Routing, Middleware, Controllers, Blade Templates)"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Learning Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((topic, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-900">{topic.name}</h2>
            <p className="text-gray-700 mb-3">{topic.description}</p>
            <ul className="list-disc pl-5 text-gray-600">
              {topic.concepts.map((concept, i) => (
                <li key={i}>{concept}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearnData;
