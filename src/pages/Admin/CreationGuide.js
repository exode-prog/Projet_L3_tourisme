import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreationGuide = () => {
  const navigate = useNavigate();  // Hook pour la redirection
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    numero: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialite: "",
    commentaire: "",
    photo: null, // Contiendra le fichier de l'image
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Si c'est un fichier, on prend le premier fichier
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "confirmPassword") {
        data.append(key, formData[key]);
      }
    });

    try {
      const res = await axios.post("http://192.168.3.11:4000/guide/", data);
      setMessage("Guide ajouté avec succès !");
      setFormData({
        prenom: "",
        nom: "",
        numero: "",
        email: "",
        password: "",
        confirmPassword: "",
        specialite: "",
        commentaire: "",
        photo: "",
      });

      // Redirection vers le dashboard admin après un ajout réussi
      navigate('/admin/dashboardAdmin');
    } catch (err) {
      setError("Erreur lors de l'ajout du guide.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">
        Ajouter un Guide Touristique
      </h2>
      {message && <p className="text-green-600 mb-4">{message}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            value={formData.prenom}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="numero"
            placeholder="Numéro"
            value={formData.numero}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmer mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>

        <input
          type="text"
          name="specialite"
          placeholder="Spécialité"
          value={formData.specialite}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />

        <textarea
          name="commentaire"
          placeholder="Commentaire"
          value={formData.commentaire}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        {/* Champ photo */}
        <div className="flex flex-col items-center">
          <label htmlFor="photo" className="mb-2">Ajouter une photo</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          {formData.photo && (
            <div className="mt-4">
              <img
                src={URL.createObjectURL(formData.photo)}
                alt="Aperçu de la photo"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Ajouter le guide
        </button>
      </form>
    </div>
  );
};

export default CreationGuide;
