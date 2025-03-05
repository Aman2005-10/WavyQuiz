import Home from "./components/Home";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HtmlQuiz from "./QuizTest/HtmlQuiz";
import JsQuiz from "./QuizTest/JavaScript";
import CssQuiz from "./QuizTest/CssQuiz";
import ReactQuiz from "./QuizTest/ReactQuiz";
import PhpQuiz from "./QuizTest/PhpQuiz";
import GetCertificate from "./components/GetCertificate";

function App() {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLogged", isLogged);
  }, [isLogged]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogged ? <Home /> : <Form formLogged={setIsLogged} />} />
        <Route path="/htmlquiz" element={<HtmlQuiz />} />
        <Route path="/jsquiz" element={<JsQuiz />} />
        <Route path="/cssquiz" element={<CssQuiz />} />
        <Route path="/reactquiz" element={<ReactQuiz />} />
        <Route path="/phpquiz" element={<PhpQuiz />} />
        <Route path="/getcertificate" element={<GetCertificate />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
