// ListeDesGuides.jsx
import React from "react";
import { Link } from "react-router-dom";

const guides = [
  {
    id: 1,
    nom: "Diallo",
    prenom: "Amadou",
    zone: "Montagnes du Fouta",
    specialite: "Randonnée",
    commentaire: "Amadou est passionné par la nature et les sentiers reculés.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    nom: "Camara",
    prenom: "Fatou",
    zone: "Plages de la côte",
    specialite: "Culture et traditions",
    commentaire: "Fatou adore partager les histoires locales et les chants traditionnels.",
    photo: "https://via.placeholder.com/150"
  }
];

const Guide = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Nos Guides Touristiques</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={guide.photo}
                alt={`${guide.prenom} ${guide.nom}`}
                className="w-24 h-24 object-cover rounded-full border"
              />
              <div>
                <h2 className="text-xl font-semibold">{guide.prenom} {guide.nom}</h2>
                <p className="text-gray-600">Zone : {guide.zone}</p>
                <p className="text-gray-600">Spécialité : {guide.specialite}</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">"{guide.commentaire}"</p>
            <Link
              to={`/guides/${guide.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Voir le profil
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;



