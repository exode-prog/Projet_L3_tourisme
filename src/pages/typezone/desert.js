import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sahara from '../../assets/Tourisme/sable.jpg';
import Namib from '../../assets/Tourisme/sable.jpg';
import Gobi from '../../assets/Tourisme/sable.jpg';
import Atacama from '../../assets/Tourisme/sable.jpg';
import Antarctique from '../../assets/Tourisme/sable.jpg';
import Arctique from '../../assets/Tourisme/sable.jpg';

const deserts = [
  {
    nom: 'Désert du Sahara',
    pays: 'Afrique du Nord',
    description: "Le plus grand désert chaud du monde, couvrant plusieurs pays d'Afrique. Connu pour ses dunes immenses, ses oasis et son histoire nomade.",
    image: Sahara
  },
  {
    nom: 'Désert du Namib',
    pays: 'Namibie',
    description: "Ancien désert côtier avec des dunes rouges emblématiques, des paysages lunaires et la célèbre 'forêt morte' de Sossusvlei.",
    image: Namib
  },
  {
    nom: 'Désert du Gobi',
    pays: 'Mongolie & Chine',
    description: "Un désert froid caractérisé par des paysages arides, des montagnes rocheuses et une riche faune sauvage.",
    image: Gobi
  },
  {
    nom: 'Désert d’Atacama',
    pays: 'Chili',
    description: "Considéré comme le désert le plus sec du monde, l'Atacama offre des paysages martiens, des lagunes et un ciel parfait pour l’astronomie.",
    image: Atacama
  },
  {
    nom: 'Désert Antarctique',
    pays: 'Antarctique',
    description: "Le plus grand désert du monde en superficie, composé de glace. C’est un désert polaire, inhabité sauf par des chercheurs.",
    image: Antarctique
  },
  {
    nom: 'Désert Arctique',
    pays: 'Régions polaires nord',
    description: "Un désert froid situé au nord du cercle polaire arctique, composé de toundra gelée et de glace permanente.",
    image: Arctique
  }
];

const Desert = () => {
  const navigate = useNavigate();

  const handleReservation = (desert) => {
    navigate("../reservation", { state: desert });
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10">Déserts à explorer dans le monde</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {deserts.map((desert, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <img src={desert.image} alt={desert.nom} className="w-full h-60 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-yellow-700">{desert.nom}, {desert.pays}</h2>
            <p className="text-gray-700 mt-2 mb-4">{desert.description}</p>
            <button
              onClick={() => handleReservation(desert)}
              className="bg-yellow-700 text-white py-2 px-4 rounded-md hover:bg-yellow-800 transition"
            >
              Réserver une visite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desert;
