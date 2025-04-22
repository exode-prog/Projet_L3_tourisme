import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ModifierAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get(`http://192.168.1.15:4000/admin/${id}`);
        setAdmin(res.data);
      } catch (err) {
        setMessage("Erreur lors de la récupération des données de l'administrateur.");
      }
    };
    fetchAdmin();
  }, [id]);

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://192.168.1.15:4000/admin/${id}`, admin);
      navigate("/Admin/detailAdmin"); // Redirection après mise à jour
    } catch (err) {
      setMessage("Erreur lors de la mise à jour des informations.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Modifier l'administrateur</h2>

        {message && <p className="text-red-500 mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="prenom"
            value={admin.prenom}
            onChange={handleChange}
            placeholder="Prénom"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="nom"
            value={admin.nom}
            onChange={handleChange}
            placeholder="Nom"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="telephone"
            value={admin.telephone}
            onChange={handleChange}
            placeholder="Téléphone"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={admin.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            disabled={!admin.prenom || !admin.nom || !admin.telephone || !admin.email}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            Valider les modifications
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModifierAdmin;
