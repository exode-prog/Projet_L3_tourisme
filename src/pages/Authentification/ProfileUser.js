import React, { useState } from 'react';

const ProfileUser = ({ user = {} }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const toggleDetailVisibility = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  const {
    firstName = "Exode", 
    lastName = "NGAMENEDE", 
    address = "Senegal/Dakar", 
    email = "exode@gmail.com", 
    phone = "709098976"
  } = user;

  const handleLogout = () => {
    // Tu peux ici ajouter la logique de déconnexion (ex: nettoyage du token, redirection...)
    console.log("Déconnexion en cours...");
    alert("Vous êtes déconnecté !");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div
            className="cursor-pointer p-4 bg-blue-600 text-white rounded-md mb-4"
            onClick={toggleDetailVisibility}
          >
            <h2 className="text-lg font-semibold">Mon Profile</h2>
          </div>

          {isDetailVisible && (
            <div className="border p-6 rounded-lg shadow-sm bg-gray-50 mb-6">
              <div className="mb-4">
                <label className="text-gray-700 font-medium">Prénom:</label>
                <p className="text-gray-600">{firstName}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-700 font-medium">Nom:</label>
                <p className="text-gray-600">{lastName}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-700 font-medium">Email:</label>
                <p className="text-gray-600">{email}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-700 font-medium">Téléphone:</label>
                <p className="text-gray-600">{phone}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-700 font-medium">Adresse:</label>
                <p className="text-gray-600">{address}</p>
              </div>
            </div>
          )}

          {/* Bouton Se déconnecter */}
          <div className="text-right">
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
