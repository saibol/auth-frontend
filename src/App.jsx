import { useState } from "react";
import "./App.css";

function App() {
  const [signInName, setSignInName] = useState("");

  const handleClick = () => {
    if (!signInName.trim()) {
      alert("Please enter your email or phone number");
      return;
    }
    // Handle sending verification code here
    alert(`Send verification code to: ${signInName}`);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Sign In
          </h1>

          <label
            htmlFor="signInName"
            className="block text-gray-700 mb-2 font-medium"
          >
            Email or Phone Number
          </label>
          <input
            type="text"
            id="signInName"
            name="signInName"
            value={signInName}
            onChange={(e) => setSignInName(e.target.value)}
            placeholder="Enter your email or phone"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleClick}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Verification Code
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
