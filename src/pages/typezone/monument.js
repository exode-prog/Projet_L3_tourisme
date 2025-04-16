import React from 'react';
import { useNavigate } from 'react-router-dom';

// Images locales ou URL temporaires
import Gizeh from '../../assets/Tourisme/eiffel.jpg';
import Karnak from '../../assets/Tourisme/eiffel.jpg';
import Meroe from '../../assets/Tourisme/eiffel.jpg';
import Djenne from '../../assets/Tourisme/eiffel.jpg';
import Renaissance from '../../assets/Tourisme/eiffel.jpg';
import Pretoria from '../../assets/Tourisme/eiffel.jpg';
import Colisee from '../../assets/Tourisme/eiffel.jpg';
import TajMahal from '../../assets/Tourisme/eiffel.jpg';
import Muraille from '../../assets/Tourisme/eiffel.jpg';
import Liberte from '../../assets/Tourisme/eiffel.jpg';
import Eiffel from '../../assets/Tourisme/eiffel.jpg';

const monuments = [
  {
    nom: 'Pyramides de Gizeh',
    pays: 'Égypte',
    description: "Les seules merveilles antiques encore debout, symboles de l'ingéniosité architecturale de l'Égypte ancienne.",
    image: Gizeh,
  },
  {
    nom: 'Temple de Karnak',
    pays: 'Égypte',
    description: 'Un vaste complexe religieux dédié au dieu Amon, témoignage de la grandeur égyptienne.',
    image: Karnak,
  },
  {
    nom: 'Tombeaux royaux de Méroé',
    pays: 'Soudan',
    description: "Nécropole illustrant l'histoire du royaume de Koush.",
    image: Meroe,
  },
  {
    nom: 'Cité historique de Djenné',
    pays: 'Mali',
    description: "Réputée pour sa grande mosquée en adobe, architecture soudano-sahélienne.",
    image: Djenne,
  },
  {
    nom: 'Monument de la Renaissance africaine',
    pays: 'Sénégal',
    description: 'Statue de 49 m symbolisant la renaissance du continent.',
    image: Renaissance,
  },
  {
    nom: "Mémorial de l’indépendance",
    pays: 'Afrique du Sud',
    description: 'À Pretoria, en hommage à la lutte pour la liberté et la démocratie.',
    image: Pretoria,
  },
  {
    nom: 'Colisée',
    pays: 'Italie',
    description: 'Symbole de l’ingénierie romaine et des spectacles antiques.',
    image: Colisee,
  },
  {
    nom: 'Taj Mahal',
    pays: 'Inde',
    description: "Chef-d'œuvre moghol, mausolée en marbre blanc.",
    image: TajMahal,
  },
  {
    nom: 'Grande Muraille',
    pays: 'Chine',
    description: 'Fortification mythique de plusieurs milliers de kilomètres.',
    image: Muraille,
  },
  {
    nom: 'Statue de la Liberté',
    pays: 'États-Unis',
    description: 'Symbole de liberté offert par la France.',
    image: Liberte,
  },
  {
    nom: 'Tour Eiffel',
    pays: 'France',
    description: "Icône parisienne, construite pour l'Exposition universelle de 1889.",
    image: Eiffel,
  }
];

const Monument = () => {
  const navigate = useNavigate();

  const handleReservation = (monument) => {
    navigate("../reservation", { state: monument });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Monuments Historiques à Découvrir</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {monuments.map((monument, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <img src={monument.image} alt={monument.nom} className="w-full h-60 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700">{monument.nom}, {monument.pays}</h2>
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
