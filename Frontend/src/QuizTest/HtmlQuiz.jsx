import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HtmlQuiz() {
    const questions = [
        {
            question: "What does HTML stand for?",
            options: {
                a: "Hyper Text Markup Language",
                b: "High Tech Modern Language",
                c: "Hyperlink and Text Management Language"
            },
            correct: "a"
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            options: {
                a: "<css>",
                b: "<style>",
                c: "<script>"
            },
            correct: "b"
        },
        {
            question: "Which attribute specifies an alternate text for an image?",
            options: {
                a: "title",
                b: "alt",
                c: "src"
            },
            correct: "b"
        },
        {
            question: "Which HTML element is used to create a line break?",
            options: {
                a: "<br>",
                b: "<hr>",
                c: "<lb>"
            },
            correct: "a"
        },
        {
            question: "Which tag is used to create a hyperlink in HTML?",
            options: {
                a: "<link>",
                b: "<a>",
                c: "<href>"
            },
            correct: "b"
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timer, setTimer] = useState(10);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            nextQuestion();
        }
    }, [timer]);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        if (answer === questions[currentQuestion].correct) {
            setScore((prev) => prev + 1);
        }
        setTimeout(() => nextQuestion(), 500);
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setTimer(10);
            setSelectedAnswer(null);
        } else {
            setQuizCompleted(true);
        }
    };

    return (
        <>
        <div className="flex justify-between items-center bg-gray-800 p-4 shadow-md">
            <h1 className="text-white font-bold text-2xl font-poppins">Wavy Quiz</h1>
            <Link to="/" className="text-white font-semibold text-lg hover:underline">Home</Link>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
                <h2 className="text-3xl font-bold text-gray-800">HTML Quiz</h2>
                {quizCompleted ? (
                    <>
                        <p className="text-lg mt-4">Quiz Completed!</p>
                        <p className="text-xl font-semibold">Your Score: {score}/{questions.length}</p>
                        <Link to="/getcertificate">
                        
                        <button 
                            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                            onClick={() => alert('Certificate generation coming soon!')}
                        >
                            Get Certificate
                        </button>
                        </Link>
                    </>
                ) : (
                    <>
                        <p className="text-lg mt-4">Time Left: <span className="font-semibold text-red-500">{timer} seconds</span></p>
                        <p className="text-xl font-semibold mt-2">{questions[currentQuestion].question}</p>
                        <ul className="mt-4 space-y-2">
                            {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
                                <li key={key}>
                                    <button 
                                        onClick={() => handleAnswerClick(key)} 
                                        disabled={selectedAnswer !== null}
                                        className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 disabled:bg-gray-400"
                                    >
                                        {key}. {value}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 font-semibold text-2xl">Score: {score}</p>
                    </>
                )}
            </div>
        </div>
        </>
    );
}

export default HtmlQuiz;
