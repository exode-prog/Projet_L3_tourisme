import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const ChoixGuide = () => {
  const [guides, setGuides] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

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
    axios
      .get("http://192.168.3.11:4000/guide")
      .then((res) => setGuides(res.data))
      .catch((err) => console.error("Erreur chargement guides", err));
  }, []);

  const choisirGuide = (guideId) => {
    navigate("/reservation", {
      state: {
        ...location.state,
        id_guide: guideId,
        fromGuide: true,
      },
    });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Choisissez un guide
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <div
            key={guide.id_guide}
            className="border rounded-xl p-4 bg-white shadow"
          >
            <img
              src={`data:image/jpeg;base64,${bufferToBase64(guide.photo)}`}
              alt={guide.nom}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">
              {guide.prenom} {guide.nom}
            </h3>
            <p className="text-gray-600"> {guide.ville}</p>
            <button
              onClick={() => choisirGuide(guide.id_guide)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Choisir ce guide
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoixGuide;
