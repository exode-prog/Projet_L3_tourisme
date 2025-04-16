import React from "react";
import { useParams } from "react-router-dom";

const cultureDetails = {
  centrafrique: {
    name: "République Centrafricaine",
    image: "https://example.com/centrafrique.jpg",
    description: "La République Centrafricaine possède une riche diversité culturelle, mêlant traditions autochtones et influences coloniales.",
    detailedDescription: "La République Centrafricaine est un pays d'Afrique centrale... [Détails supplémentaires sur les coutumes, festivals, etc.]."
  },
  nigeria: {
    name: "Nigeria",
    image: "https://example.com/nigeria.jpg",
    description: "Le Nigeria est un carrefour de cultures ethniques et religieuses, avec une forte influence musicale et artistique.",
    detailedDescription: "Le Nigeria abrite de nombreuses tribus comme les Yoruba, les Igbo et les Hausa, chacune ayant sa propre langue et culture. [Détails sur les traditions locales, festivals, etc.]"
  },
  // Ajoute les autres pays ici selon le même modèle
};

const CultureDetail = () => {
  const { cultureId } = useParams();
  const culture = cultureDetails[cultureId];

  if (!culture) {
    return <p>Culture non trouvée</p>;
  }

  return (
    <div className="bg-white min-h-screen p-6 md:p-12">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src={culture.image}
          alt={culture.name}
          className="w-full h-96 object-cover rounded-md mb-6"
        />
        <h1 className="text-4xl font-bold text-blue-700 mb-6">{culture.name}</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{culture.detailedDescription}</p>
      </div>
    </div>
  );
};

export default CultureDetail;
