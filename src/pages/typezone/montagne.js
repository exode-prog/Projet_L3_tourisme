// src/components/Tourisme/TypeMontagne.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Kilimandjaro from '../../assets/Tourisme/mont_blanc.jpg'; 
import Alpes from '../../assets/Tourisme/mont_blanc.jpg'; 
import Everest from '../../assets/Tourisme/mont_blanc.jpg'; 
import Drakensberg from '../../assets/Tourisme/mont_blanc.jpg';  
const montagnes = [
  {
    ville: 'Kilimandjaro',
    pays: 'Tanzanie',
    type: 'Montagnes',
    description: 'Le plus haut sommet d\'Afrique, emblème naturel spectaculaire aux neiges éternelles.',
    image: Kilimandjaro
  },
  {
    ville: 'Alpes',
    pays: 'France / Suisse / Italie',
    type: 'Montagnes',
    description: 'Chaine montagneuse emblématique d\'Europe, idéale pour le ski et les randonnées.',
    image: Alpes
  },
  {
    ville: 'Everest',
    pays: 'Népal / Chine',
    type: 'Montagnes',
    description: 'Le toit du monde, attirant les alpinistes du monde entier.',
    image: Everest
  },
  {
    ville: 'Drakensberg',
    pays: 'Afrique du Sud',
    type: 'Montagnes',
    description: 'Massif montagneux inscrit au patrimoine mondial de l’UNESCO, connu pour ses paysages impressionnants.',
    image: Drakensberg
  }
];

const Montagne = () => {
  const navigate = useNavigate();

  const handleReservation = (data) => {
    navigate("../reservation", { state: data });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Montagnes à explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {montagnes.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <img src={item.image} alt={item.ville} className="w-full h-60 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700">{item.ville}, {item.pays}</h2>
            <p className="text-gray-600 mt-2 mb-4">{item.description}</p>
            <button
              onClick={() => handleReservation(item)}
              className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              Réserver une visite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Montagne;
