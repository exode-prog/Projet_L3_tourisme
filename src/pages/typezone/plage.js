

import React from 'react';
import { useNavigate } from 'react-router-dom'; 
// Importez ici vos images locales ou utilisez des URLs temporaires si besoin
import PuntaCana from '../../assets/Tourisme/eau.jpg';
import Copacabana from '../../assets/Tourisme/la-plage-du-morne-a-l.jpg';
import BoraBora from '../../assets/Tourisme/plage1.jpg';
import Zanzibar from '../../assets/Tourisme/plage.jpg';


const plages = [
  {
    ville: 'Punta Cana',
    pays: 'République Dominicaine',
    type: 'Plages',
    description: 'Les plages de Punta Cana offrent des eaux turquoise, des sables blancs et une vie marine riche. Idéale pour la baignade, la plongée et le farniente.',
    image: PuntaCana
  },
  {
    ville: 'Bora Bora',
    pays: 'Polynésie Française',
    type: 'Plages',
    description: "Bora Bora est une île paradisiaque avec des lagons turquoise et des plages idylliques. C'est une destination populaire pour les lunes de miel et les séjours de luxe.",
    image: Copacabana
  },
  {
    ville: 'Copacabana',
    pays: 'Brésil',
    type: 'Plages',
    description: "La plage de Copacabana à Rio de Janeiro est célèbre pour son ambiance festive, ses sports de plage et sa vue imprenable sur le Pain de Sucre.",
    image: BoraBora
  },
  {
    ville: 'Whitehaven',
    pays: 'Australie',
    type: 'Plages',
    description: "Whitehaven Beach est connue pour son sable de silice d'une blancheur éclatante et ses eaux cristallines. Elle fait partie des Whitsundays en Australie.",
    image:  Zanzibar
  }
];

const TypePlage = () => {
  const navigate = useNavigate();

  const handleReservation = (plageData) => {
    navigate("../reservation", { state: plageData });
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Plages à visiter dans le monde</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {plages.map((plage, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <img src={plage.image} alt={plage.ville} className="w-full h-60 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-blue-600">{plage.ville}, {plage.pays}</h2>
            <p className="text-gray-700 mt-2 mb-4">{plage.description}</p>
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

export default TypePlage;
