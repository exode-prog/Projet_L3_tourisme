import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Monument = () => {
  const [monuments, setMonuments] = useState([]);
  const navigate = useNavigate();

  // Fonction pour convertir un buffer en base64
  const bufferToBase64 = (buffer) => {
    if (!buffer || !buffer.data) return "";
    return btoa(
      new Uint8Array(buffer.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
  };

  useEffect(() => {
    axios.get("http://192.168.3.11:4000/monument")
      .then(response => setMonuments(response.data))
      .catch(error => console.error("Erreur de chargement :", error));
  }, []);

  const handleReservation = (monument) => {
    navigate("../reservation", { state: monument });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Monuments Historiques à Découvrir</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {monuments.map((monument, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <img
              src={`data:image/jpeg;base64,${bufferToBase64(monument.image)}`}
              alt={monument.nom}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700">{monument.ville}, {monument.pays}</h2>
            <p className="text-gray-600 mt-2 mb-4">{monument.description}</p>
            <button
              onClick={() => handleReservation(monument)}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            >
              Réserver une visite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monument;
