import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
function GetCertificate() {
const [username , setusername] = useState("");

useEffect(() => {
    const storeusername = localStorage.getItem("username");
    
        setusername(storeusername);
        
        }, []);


    return (
        <>

<div className="flex justify-between items-center bg-gray-800 p-4 shadow-md">
            <h1 className="text-white font-bold text-2xl font-poppins">Wavy Quiz</h1>
            <Link to="/" className="text-white font-semibold text-lg hover:underline">Home</Link>
        </div>



<div className="w-full max-w-[600px] h-auto md:h-[400px] border-4 border-yellow-500 rounded-2xl p-6 text-center bg-white shadow-xl mx-auto mt-10">
    <h1 className="text-2xl md:text-3xl font-bold text-gray-700">Certificate of Achievement</h1>
    <p className="text-lg text-gray-600 mt-4">This is proudly presented to</p>
    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mt-2">{username}</h2>
    <p className="text-gray-600 mt-4">For outstanding performance and dedication</p>
    <div className="mt-10 flex flex-col md:flex-row justify-between px-4 md:px-8">
        <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-800" style={{ fontFamily: "monospace" }}>WavyQuiz</p>
            <hr className="border-gray-400 w-40 mx-auto" />
            <p className="text-sm text-gray-600">Authorized Signature</p>
        </div>
        <div>
            <p className="text-sm text-gray-800" style={{ fontFamily: "monospace" }}>2025</p>
            <hr className="border-gray-400 w-40 mx-auto" />
            <p className="text-sm text-gray-600">Year</p>
        </div>
    </div>
</div>


        <h1 className="text-center font-bold mt-10">Now You Can Easily Get Your Certificate Using ScreenShot</h1>

        
        </>
    )
}
export default GetCertificate;









