import React from 'react';
import { useNavigate } from 'react-router-dom';

// Importation des images
import RCA from '../../assets/Tourisme/la-plage-du-morne-a-l.jpg';
import Nigeria from '../../assets/Tourisme/la-plage-du-morne-a-l.jpg';
import Maroc from '../../assets/Tourisme/la-plage-du-morne-a-l.jpg';
import Inde from '../../assets/Tourisme/la-plage-du-morne-a-l.jpg';

const cultures = [
  {
    pays: 'République Centrafricaine',
    description: "La culture centrafricaine est riche et variée, avec des traditions orales, des danses, de la musique traditionnelle (balafon, tam-tam), et des vêtements colorés.",
    image: RCA
  },
  {
    pays: 'Nigeria',
    description: "Le Nigeria est connu pour sa diversité culturelle avec plus de 250 ethnies. Le cinéma Nollywood, les tissus Ankara, et la musique afrobeat sont des piliers culturels.",
    image: Nigeria
  },
  {
    pays: 'Maroc',
    description: "La culture marocaine mélange les influences berbères, arabes, africaines et européennes. Elle est riche en artisanat, cuisine épicée, musiques et traditions religieuses.",
    image: Maroc
  },
  {
    pays: 'Inde',
    description: "L'Inde possède une culture millénaire avec des danses classiques, la cuisine aux épices, des fêtes comme Diwali, et un fort héritage spirituel et artistique.",
    image: Inde
  }
];

const Culture = () => {
  const navigate = useNavigate();

  const handleReservation = (cultureData) => {
    navigate("../reservation", { state: cultureData });
  };

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-10">Cultures à découvrir dans le monde</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {cultures.map((culture, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <img src={culture.image} alt={culture.pays} className="w-full h-60 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-orange-600">{culture.pays}</h2>
            <p className="text-gray-700 mt-2 mb-4">{culture.description}</p>
            <button
              onClick={() => handleReservation(culture)}
              className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
            >
              Réserver une visite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;
