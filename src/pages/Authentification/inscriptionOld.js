import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const isPasswordMatch = password === confirmPassword;
  const isValidEmail = email.includes('@');

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative px-4"
      style={{ backgroundImage: "url('/images/bg-register.jpg')" }}
    >
      {/* Overlay bleu transparent */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60 backdrop-blur-sm"></div>

      {/* Contenu centré */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md sm:max-w-sm md:max-w-sm lg:max-w-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-4">Créer un compte</h2>

          <form className="space-y-3 text-sm">
            <div>
              <label className="block font-medium text-gray-700">Prénom</label>
              <input type="text" className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Nom</label>
              <input type="text" className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Téléphone</label>
              <input type="number" className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                className={`w-full mt-1 p-2 border rounded-md focus:ring-2 ${
                  email && !isValidEmail ? "border-red-500 ring-red-300" : "focus:ring-blue-400"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && !isValidEmail && (
                <p className="text-xs text-red-600 mt-1">L'email doit contenir un @.</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Adresse</label>
              <input type="text" className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full mt-1 p-2 pr-10 border rounded-md focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div>
              <label className="block font-medium text-gray-700">Confirmer le mot de passe</label>
              <input
                type={showPassword ? "text" : "password"}
                className={`w-full mt-1 p-2 border rounded-md focus:ring-2 ${
                  confirmPassword && !isPasswordMatch
                    ? "border-red-500 ring-red-300"
                    : "focus:ring-blue-400"
                }`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!isPasswordMatch && confirmPassword && (
                <p className="text-xs text-red-600 mt-1">Les mots de passe ne correspondent pas.</p>
              )}
            </div>

            

            <button
              type="submit"
              className="w-full py-2 mt-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
              disabled={!isPasswordMatch || !isValidEmail}
            >
              S'inscrire
            </button>
          </form>

          <p className="text-xs text-gray-600 text-center mt-3">
            Vous avez déjà un compte ?{" "}
            <a href="./Connexion" className="text-blue-600 font-medium hover:underline">
              Connectez-vous
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
