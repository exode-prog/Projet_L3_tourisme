// src/components/Tourisme/TypeForetParc.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Amazonie from '../../assets/Tourisme/parc-national-des-virunga.jpg';
import Virunga from '../../assets/Tourisme/parc-national-des-virunga.jpg';
import Yosemite from '../../assets/Tourisme/parc-national-des-virunga.jpg';
import Bwindi from '../../assets/Tourisme/parc-national-des-virunga.jpg';

const forets = [
  {
    ville: 'Amazonie',
    pays: 'Brésil / Pérou / Colombie',
    type: 'Forêts et Parcs',
    description: 'La plus grande forêt tropicale du monde, riche en biodiversité.',
    image: Amazonie
  },
  {
    ville: 'Parc national des Virunga',
    pays: 'RD Congo',
    type: 'Forêts et Parcs',
    description: 'Habitat naturel des gorilles de montagne, classé au patrimoine mondial.',
    image: Virunga
  },
  {
    ville: 'Parc national de Yosemite',
    pays: 'États-Unis',
    type: 'Forêts et Parcs',
    description: 'Célèbre pour ses chutes d’eau, falaises de granit et séquoias géants.',
    image: Yosemite
  },
  {
    ville: 'Parc de Bwindi',
    pays: 'Ouganda',
    type: 'Forêts et Parcs',
    description: 'Réserve naturelle dense abritant de nombreuses espèces menacées.',
    image: Bwindi
  }
];

const ForetParc = () => {
  const navigate = useNavigate();

  const handleReservation = (data) => {
    navigate("../reservation", { state: data });
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Forêts et Parcs à explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {forets.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <img src={item.image} alt={item.ville} className="w-full h-60 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-green-800">{item.ville}, {item.pays}</h2>
            <p className="text-gray-700 mt-2 mb-4">{item.description}</p>
            <button
              onClick={() => handleReservation(item)}
              className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition"
            >
              Réserver une visite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForetParc;
