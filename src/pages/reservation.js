import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Reservation = () => {
  const { state } = useLocation(); // Données depuis la page précédente
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    date: "",
    duree: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ici on enverra les données vers un backend plus tard
    console.log("Réservation envoyée :", { ...form, ...state });
    alert("Réservation enregistrée !");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Formulaire de réservation</h1>

        {/* Détails du lieu visité */}
        {state && (
          <div className="bg-blue-50 p-4 rounded-md mb-6">
            <p><strong>Type :</strong> {state.type}</p>
            <p><strong>Ville :</strong> {state.ville}</p>
            <p><strong>Pays :</strong> {state.pays}</p>
            <p><strong>Description :</strong> {state.description}</p>
          </div>
        )}

        {/* Formulaire de réservation */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" name="nom" placeholder="Nom" required onChange={handleChange}
              className="w-full border p-2 rounded-md" />
            <input type="text" name="prenom" placeholder="Prénom" required onChange={handleChange}
              className="w-full border p-2 rounded-md" />
          </div>

          <input type="email" name="email" placeholder="Adresse e-mail" required onChange={handleChange}
            className="w-full border p-2 rounded-md" />

          <input type="tel" name="telephone" placeholder="Téléphone" required onChange={handleChange}
            className="w-full border p-2 rounded-md" />

          <div className="flex flex-col md:flex-row gap-4">
            <input type="date" name="date" required onChange={handleChange}
              className="w-full border p-2 rounded-md" />
            <input type="text" name="duree" placeholder="Durée (ex: 3 jours)" required onChange={handleChange}
              className="w-full border p-2 rounded-md" />
          </div>

          <button type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Envoyer la réservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
