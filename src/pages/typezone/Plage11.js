import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Plage = () => {
  const [plages, setPlages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Extraction de l'id_touriste depuis location.state
  const idTouriste = location.state?.id_touriste;

  const bufferToBase64 = (buffer) => {
    if (!buffer || !buffer.data) return '';
    return btoa(
      new Uint8Array(buffer.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
  };

  useEffect(() => {
    axios
      .get('http://192.168.3.11:4000/plage')
      .then((response) => {
        setPlages(response.data);
      })
      .catch((error) => console.error('Erreur de chargement :', error));
  }, []);

  const handleReservation = (plage) => {
    if (!idTouriste) {
      console.error('❌ ID du touriste non disponible !');
      return;
    }

    navigate('../reservation', {
      state: {
        id_touriste: idTouriste,
        id_visite: plage.id_visite,
        ...plage, // Inclure d'autres informations sur la plage si nécessaire
      },
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Plages Magnifiques à Découvrir
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plages.map((plage, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <img
              src={`data:image/jpeg;base64,${bufferToBase64(plage.image)}`}
              alt={plage.nom}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700">
              {plage.ville}, {plage.pays}
            </h2>
            <p className="text-gray-600 mt-2 mb-4">{plage.description}</p>
            <button
              onClick={() => handleReservation(plage)}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Réserver une visite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plage;
