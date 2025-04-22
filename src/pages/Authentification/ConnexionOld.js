import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(value.includes('@'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      console.log('Email:', email, 'Password:', password);
      // Traitement de connexion
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative px-4"
      style={{ backgroundImage: "url('/images/bg-login.jpg')" }}
    >
      {/* Overlay bleu */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60 backdrop-blur-sm"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md sm:max-w-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-6">Connexion</h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                className={`w-full mt-1 p-2 border rounded-md focus:ring-2 ${
                  email && !isValidEmail ? "border-red-500 ring-red-300" : "focus:ring-blue-400"
                }`}
                value={email}
                onChange={handleEmailChange}
                required
              />
              {email && !isValidEmail && (
                <p className="text-xs text-red-600 mt-1">L'email doit contenir un @.</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full mt-1 p-2 pr-10 border rounded-md focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-blue-600 hover:text-blue-800"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
              disabled={!isValidEmail}
            >
              Se connecter
            </button>
          </form>

          <p className="text-xs text-gray-600 text-center mt-3">
            Pas encore de compte ?{" "}
            <a href="./Inscription" className="text-blue-600 font-medium hover:underline">Inscrivez-vous</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
