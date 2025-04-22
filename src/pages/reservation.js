import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Reservation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({ date: "", duree: "" });
  const [idTouriste, setIdTouriste] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reservationType, setReservationType] = useState("simple"); // "simple" ou "guide"
  const [guides, setGuides] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIdTouriste(decoded.id);
      } catch (err) {
        console.error("Token invalide :", err);
      }
    }

    if (reservationType === "guide") {
      axios
        .get("http://localhost:4000/guide")
        .then((res) => setGuides(res.data))
        .catch((err) => console.error("Erreur de chargement des guides :", err));
    }
  }, [reservationType]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idTouriste || !state?.id_visite) {
      alert("Erreur d'identification ou de visite.");
      return;
    }

    if (reservationType === "guide" && !selectedGuide) {
      alert("Veuillez sélectionner un guide.");
      return;
    }

    const data = {
      id_touriste: idTouriste,
      id_visite: state.id_visite,
      date_depart: form.date,
      duree: form.duree,
      ...(reservationType === "guide" && { id_guide: selectedGuide }),
    };

    try {
      await axios.post("http://localhost:4000/activite_touristique", data);
      setShowModal(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Une erreur est survenue.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-4 md:px-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-blue-200">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-8">Réserver votre visite</h1>

        {state && (
          <div className="bg-blue-50 p-5 rounded-xl shadow mb-6 border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Détails de la visite</h2>
            <p><strong>🌍 Type :</strong> {state.type}</p>
            <p><strong>📍 Ville :</strong> {state.ville}</p>
            <p><strong>🗺️ Pays :</strong> {state.pays}</p>
            <p><strong>📝 Description :</strong> {state.description}</p>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Type de réservation</label>
          <select
            value={reservationType}
            onChange={(e) => setReservationType(e.target.value)}
            className="w-full border border-blue-300 p-3 rounded-md focus:outline-none"
          >
            <option value="simple">Visite simple</option>
            <option value="guide">Visite guidée</option>
          </select>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">📅 Date de départ</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-blue-500" />
              <input
                type="date"
                name="date"
                required
                onChange={handleChange}
                className="pl-10 w-full border border-blue-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">⏱️ Durée de la visite</label>
            <div className="relative">
              <FaClock className="absolute left-3 top-3 text-blue-500" />
              <input
                type="text"
                name="duree"
                placeholder="ex: 3 jours"
                required
                onChange={handleChange}
                className="pl-10 w-full border border-blue-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          {reservationType === "guide" && (
            <div>
              <label className="block text-gray-700 font-medium mb-4 text-lg">🧑‍✈️ Choisissez un guide</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {guides.map((guide) => (
                  <div
                    key={guide.id_guide}
                    className={`border rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 
                    ${selectedGuide === guide.id_guide ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={guide.photo}
                        alt={`${guide.nom} ${guide.prenom}`}
                        className="w-16 h-16 rounded-full object-cover border"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-700">
                          {guide.prenom} {guide.nom}
                        </h3>
                        <p className="text-sm text-gray-600">📍 {guide.ville}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedGuide(guide.id_guide)}
                      className={`w-full mt-2 py-2 px-4 rounded-md text-white font-medium transition ${
                        selectedGuide === guide.id_guide ? "bg-blue-600" : "bg-gray-500 hover:bg-blue-500"
                      }`}
                    >
                      {selectedGuide === guide.id_guide ? "✅ Guide sélectionné" : "Choisir ce guide"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Confirmer la réservation
          </button>
        </form>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Réservation réussie !</h2>
              <p className="text-gray-700 mb-6">Merci pour votre réservation. Nous vous attendons avec impatience !</p>
              <button
                onClick={handleCloseModal}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Retour au tableau de bord
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reservation;
