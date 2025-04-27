import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReservationListe = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState({ nom: "", ville: "", type: "" });

  useEffect(() => {
    fetchReservations();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const fetchReservations = async () => {
    setLoading(true);
    try {
      let res;
      if (search.nom || search.ville || search.type) {
        res = await axios.get("http://192.168.3.11:4000/reservation/search", {
          params: search,
        });
      } else {
        res = await axios.get("http://192.168.3.11:4000/reservation");
      }
      setReservations(res.data);
    } catch (err) {
      console.error("Erreur de récupération des réservations", err);
      setMessage("Erreur lors du chargement des réservations.");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Confirmer la suppression de cette réservation ?")) return;
    try {
      await axios.delete(`http://192.168.3.11:4000/reservation/${id}`);
      setReservations((prev) =>
        prev.filter((r) => r.id_activite_touristique !== id)
      );
      setMessage("Réservation supprimée avec succès.");
    } catch (err) {
      console.error("Erreur de suppression", err);
      setMessage("Erreur lors de la suppression.");
    }
  };

  const handleInputChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchReservations();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-800">Liste des réservations</h2>
        </div>

        <form onSubmit={handleSearch} className="mb-4 flex flex-wrap gap-2">
          <input
            type="text"
            name="nom"
            placeholder="Nom du touriste"
            value={search.nom}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="ville"
            placeholder="Ville"
            value={search.ville}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="type"
            placeholder="Type de visite"
            value={search.type}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Rechercher
          </button>
        </form>

        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded text-white ${
              message.includes("succès") ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {message}
          </div>
        )}

        {loading ? (
          <p>Chargement...</p>
        ) : reservations.length === 0 ? (
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded shadow text-center">
            Aucune réservation trouvée.
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
            <table className="min-w-full text-sm text-gray-800">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Durée</th>
                  <th className="px-4 py-3">Touriste</th>
                  <th className="px-4 py-3">Visite</th>
                  <th className="px-4 py-3">Guide</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation.id_activite_touristique} className="border-b hover:bg-blue-50 transition">
                    <td className="px-4 py-2">{reservation.id_activite_touristique}</td>
                    <td className="px-4 py-2">{reservation.date}</td>
                    <td className="px-4 py-2">{reservation.duree}</td>
                    <td className="px-4 py-2">{reservation.touriste_prenom} {reservation.touriste_nom}</td>
                    <td className="px-4 py-2">{reservation.viste_pays} - {reservation.viste_ville} ({reservation.viste_type})</td>
                    <td className="px-4 py-2">{reservation.guide_nom}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                        title="Voir"
                      >
                        <FaEye />
                      </button>
                      <Link
                        to={`/admin/modifierReservation/${reservation.id_activite_touristique}`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded"
                        title="Modifier"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded"
                        title="Supprimer"
                        onClick={() => handleDelete(reservation.id_activite_touristique)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationListe;
