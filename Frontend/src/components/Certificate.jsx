import React from "react";

function Certificate() {
    return (
        <>
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Grab your certificate quickly</h1>

            <div className="w-full max-w-[600px] h-auto md:h-[400px] border-4 border-yellow-500 rounded-2xl p-6 text-center bg-white shadow-xl mx-auto mt-10">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-700">Certificate of Achievement</h1>
                <p className="text-lg text-gray-600 mt-4">This is proudly presented to</p>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mt-2">Aman</h2>
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

            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-center mt-10">How to Get Your Certificate</h2>
                <ul className="ml-6 md:ml-8 mt-4">
                    <li className="text-lg text-gray-600 text-center mb-2"> Complete the quiz</li>
                    <li className="text-lg text-gray-600 text-center mb-2"> Get your certificate instantly</li>
                </ul>
                <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-700 transition mx-auto block">
                  <a href="#" >Get Certificate</a>  
                </button>
            </div>
        </>
    );
}

export default Certificate;
