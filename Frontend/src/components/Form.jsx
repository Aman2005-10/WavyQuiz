import { useState } from "react";
import axios from "axios";

function Form({formLogged}) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  function toggleForm() {
    setIsSignUp(!isSignUp);
    setMessage("");
  }

  
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSignUp(e) {
    e.preventDefault();
    try {
    const response =   await axios.post("https://wavy-quiz-api.vercel.app//signup", user);
      setMessage("User Create Successfully");
    } catch (error) {
      console.error("Signup Error:", error);
      setMessage("Error creating user. Try again!");
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://wavy-quiz-api.vercel.app//login", {
        username: user.username,
        password: user.password,
      });

      const token = response.data.token; 
      localStorage.setItem("username" , user.username);
      localStorage.setItem("token",  token); 
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; 
      formLogged(true)
      setMessage("User logged in successfully!");

    } catch (error) {
      console.error("Login Error:", error);
      setMessage("Login failed. Check your credentials!");
    }
  }

  return (
<>
    <div className="flex justify-between items-center bg-gray-800 p-4 shadow-md">
            <h1 className="text-white font-bold text-2xl font-poppins">Wavy Quiz</h1>
           
        </div>


    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <form>
          {isSignUp ? (
            <div>
              <h1 className="text-2xl font-bold text-center text-gray-700 ">Sign Up</h1>

              <label className="block mt-4 text-gray-600">Username:</label>
              <input type="text" name="username" className="w-full p-2 border rounded-lg" onChange={handleChange} required />

              <label className="block mt-4 text-gray-600">Email:</label>
              <input type="email" name="email" className="w-full p-2 border rounded-lg" onChange={handleChange} required />

              <label className="block mt-4 text-gray-600">Password:</label>
              <input type="password" name="password" className="w-full p-2 border rounded-lg" onChange={handleChange} required />

              <p className="text-sm text-center mt-4 ">
                Already have an account?{" "}
                <button type="button" className="text-blue-600 " onClick={toggleForm}>
                  Log In
                </button>
              </p>

              <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-sky-900" onClick={handleSignUp}>
                Sign Up
              </button>

              <p className="text-center text-red-500 mt-2">{message}</p>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold text-center text-gray-700 ">Log In</h1>

              <label className="block mt-4 text-gray-600">Username:</label>
              <input type="text" name="username" className="w-full p-2 border rounded-lg" onChange={handleChange} required />

              <label className="block mt-4 text-gray-600">Password:</label>
              <input type="password" name="password" className="w-full p-2 border rounded-lg" onChange={handleChange} required />

              <p className="text-sm text-center mt-4">
                Don't have an account?{" "}
                <button type="button" className="text-blue-600" onClick={toggleForm}>
                  Sign Up
                </button>
              </p>

              <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-sky-900 cursor-pointer" onClick={handleLogin}>
                Log In
              </button>

              <p className="text-center text-red-500 mt-2">{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
    </>
  );
}

export default Form;
