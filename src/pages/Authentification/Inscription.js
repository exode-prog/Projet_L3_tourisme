import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    numero: '',
    email: '',
    adresse: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const isPasswordMatch = formData.password === formData.confirmPassword;
  const isValidEmail = formData.email.includes('@');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: name === 'numero' ? parseInt(value) || '' : value 
    });
  };
   

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordMatch || !isValidEmail) {
      setMessage("Vérifiez vos informations.");
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = formData;

      const response = await axios.post('http://192.168.1.99:4000/touriste', dataToSend);
      if (response.status === 201 || response.status === 200) {
        setMessage('Inscription réussie ! Redirection...');
        setTimeout(() => {
          navigate('/Connexion');
        }, 1500);
      }
    } catch (error) {
      if (error.response?.status === 409) {
        setMessage("Cet email est déjà utilisé.");
      } else {
        setMessage("Erreur lors de l'inscription.");
      }
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative px-4"
      style={{ backgroundImage: "url('/images/bg-register.jpg')" }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60 backdrop-blur-sm"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Créer un compte</h2>

          {message && <div className="text-center text-sm mb-3 text-red-600">{message}</div>}

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            {['prenom', 'nom', 'numero'].map((field) => (
              <div key={field}>
                <label className="block font-medium text-gray-700 capitalize">{field}</label>
                <input
                  type={field === 'numero' ? 'number' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-1 p-2 border rounded-md focus:ring-2 ${
                  formData.email && !isValidEmail
                    ? "border-red-500 ring-red-300"
                    : "focus:ring-blue-400"
                }`}
                required
              />
              {formData.email && !isValidEmail && (
                <p className="text-xs text-red-600 mt-1">L'email doit contenir un @.</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Adresse</label>
              <input
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 pr-10 border rounded-md focus:ring-2 focus:ring-blue-400"
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

            <div>
              <label className="block font-medium text-gray-700">Confirmer le mot de passe</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full mt-1 p-2 border rounded-md focus:ring-2 ${
                  formData.confirmPassword && !isPasswordMatch
                    ? "border-red-500 ring-red-300"
                    : "focus:ring-blue-400"
                }`}
                required
              />
              {!isPasswordMatch && formData.confirmPassword && (
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
            <a href="/Connexion" className="text-blue-600 font-medium hover:underline">
              Connectez-vous
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
