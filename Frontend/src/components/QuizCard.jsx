
import { Link } from "react-router-dom";
function QuizCard() {


    const cardData = [
        {
            name:"HTML",
          description: "Improve Your HTML Skills Here. Take Your First Test And Grab Certificate",
          totalQuestions: 5,
          path:"/htmlquiz",

        },
        {
          name: "JavaScript",
          description: "Test your JS skills with fundamental and advanced questions.",
          totalQuestions: 5,
          path:"/jsquiz",
        },
        {
          name: "CSS",
          description: "Improve your styling knowledge with CSS questions.",
          totalQuestions: 5,
          path:"/cssquiz",
        },
        {
          name: "React",
          description: "Check your understanding of React concepts and hooks.",
          totalQuestions: 5,
          path:"/reactquiz",
        },
        {
          name: "PHP",
          description: "Evaluate your PHP skills with backend-focused questions.",
          totalQuestions: 5,
          path:"/phpquiz",
          
        },
      ];
      
      
      

    return (
        <>
       <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold  mb-6">Take Quiz</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 w-80 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <p className="text-gray-700 font-medium mt-4">
              Questions: <span className="text-sky-500">{item.totalQuestions}</span>
            </p>

            <Link to={item.path}>
            
            <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-900 transition">
            Start Quiz
            </button>
            </Link>
            
          </div>
        ))}
      </div>
    </div>

        
        
        </>
    )
}

export default QuizCard;