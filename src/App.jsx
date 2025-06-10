import { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [signInName, setSignInName] = useState('');
  const [page, setPage] = useState('signIn');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const existingSignInName = params.get('signInName');
    if (existingSignInName) {
      setSignInName(existingSignInName);
      setPage('verify');
    }
  }, []);

  const handleContinue = (name) => {
    setSignInName(name);
    setPage('verify');
  };

  return page === 'verify' ? (
    <VerifyPage signInName={signInName} />
  ) : (
    <SignInPage onContinue={handleContinue} />
  );
}

function SignInPage({ onContinue }) {
  const [signInName, setSignInName] = useState('');

  const handleContinue = () => {
    if (signInName) {
      onContinue(signInName);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Enter Sign-In Name</h1>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        placeholder="Enter email or phone number"
        value={signInName}
        onChange={(e) => setSignInName(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}

function VerifyPage({ signInName }) {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Verification Page</h1>
      {signInName ? (
        <p>Verifying for: <strong>{signInName}</strong></p>
      ) : (
        <p className="text-red-500">No signInName provided.</p>
      )}
    </div>
  );
}


export default App;
