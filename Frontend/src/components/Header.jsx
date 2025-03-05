import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


function Header() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [username, setUsername] = useState("");

  const mystyle = {
    fontFamily: "Poppins, sans-serif",
  };


  useEffect(() => {
    const usernameStore = localStorage.getItem("username");
    setUsername(usernameStore);
  }, []); // Component mount hone par sirf ek baar chalega

  function handleLogout() {
    window.location.reload(false);
    localStorage.clear(); // Logout hone par localStorage se username remove karenge
  
    

    
    
  }

  return (
    <div className="bg-gray-900 text-white p-4 w-full shadow-md" style={mystyle}>
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-xl cursor-progress">WavyQuiz</h2>

        <ul className="hidden md:flex space-x-8 cursor-pointer">
          {["Home", "HTML", "CSS", "JavaScript", "React"].map((item, index) => (
            <li key={index} className="hover:text-sky-800">{item}</li>
          ))}

          {username && (
            <li
              className="relative underline cursor-pointer"
              onMouseEnter={() => setProfile(true)} // Mouse enter par profile open hoga
               // Mouse leave par profile close hoga
            >
              {username}
              {profile && (
                
                <ul className="absolute right-0 mt-2 bg-gray-800 text-white shadow-md p-2 rounded-lg" onMouseLeave={() => setProfile(false)}>
                  <li className="hover:bg-gray-700 p-2 cursor-pointer">Account</li>
                  <li className="hover:bg-gray-700 p-2 cursor-pointer" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-gray-900 text-white space-y-3 p-4 absolute w-full left-0 top-14 shadow-lg">
          {username && (
            <li
              className="underline cursor-pointer relative"
              onClick={() => setProfile(true)}
             
            >
              {username}
              {profile && (
                <ul className="absolute right-0 mt-2 bg-gray-800 text-white shadow-md p-2 rounded-lg">
                  <li className="hover:bg-gray-700 p-2 cursor-pointer" onMouseLeave={() => setProfile(false)}>Account</li>
                  <li className="hover:bg-gray-700 p-2 cursor-pointer" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              )}
            </li>
          )}
          {["Home", "HTML", "CSS", "JavaScript", "React"].map((item, index) => (
            <li key={index} className="hover:text-yellow-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Header;
