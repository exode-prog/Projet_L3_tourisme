import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const HeaderSite = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const toggleProfile = () => setProfileOpen(!profileOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (["plage", "montagne", "desert", "foretParc", "monument"].includes(query)) {
      navigate(`/typezone/${query}`);
    } else {
      alert("Type de zone non reconnu (plage, montagne, desert, foretParc, monument uniquement).");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get("http://192.168.3.11:4000/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        setError("Erreur de récupération du profil");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2">
          <img src="./Logo.png" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold">Tourisme-Travel</span>
        </Link>

        {/* Menu icon (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl text-white">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation + Search + Profile */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {/* Navigation */}
          <nav className="flex gap-6">
            <a href="/Zonestouristiques" className="hover:text-gray-300">Zones touristiques</a>
            <a href="/guide" className="hover:text-gray-300">Guides</a>
            <a href="/Services" className="hover:text-gray-300">Nos services</a>
            <a href="/apropos" className="hover:text-gray-300">À propos</a>
            <a href="/contact" className="hover:text-gray-300">Contacts</a>
          </nav>

          {/* Recherche */}
          <div className="relative w-40 sm:w-48 md:w-56">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Recherche..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-md text-black focus:outline-none"
            />
            <BiSearch
              className="absolute top-2.5 left-2 text-gray-500 text-base cursor-pointer"
              onClick={handleSearch}
            />
          </div>

          {/* Profil */}
          <div className="relative" ref={profileRef}>
            <button onClick={toggleProfile} className="text-xl">
              <FaUserCircle />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-xl z-50">
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-blue-600 mb-3 border-b pb-2">Mon Profil</h3>
                  {loading ? (
                    <p>Chargement...</p>
                  ) : error ? (
                    <p className="text-red-600">{error}</p>
                  ) : user ? (
                    <>
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={`https://ui-avatars.com/api/?name=${user.prenom}+${user.nom}&background=random&size=64`}
                          className="h-10 w-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{user.prenom} {user.nom}</p>
                          <p className="text-xs text-gray-500">Utilisateur connecté</p>
                        </div>
                      </div>
                      <Link
                        to="/authentification/ProfileUser"
                        className="block w-full bg-blue-600 text-white py-1.5 rounded-md text-center hover:bg-blue-700"
                      >
                        Profil
                      </Link>
                      <button
                        className="mt-2 w-full bg-red-600 text-white py-1.5 rounded-md hover:bg-red-700"
                        onClick={() => {
                          localStorage.removeItem("token");
                          setUser(null);
                          setProfileOpen(false);
                        }}
                      >
                        Déconnexion
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/authentification/Connexion"
                      className="block w-full bg-green-600 text-white py-1.5 rounded-md text-center hover:bg-green-700"
                    >
                      Se connecter
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    

      {/* Menu mobile */} 
{isMobileMenuOpen && (
  <div className="md:hidden px-4 pb-4 space-y-4 bg-gray-700 text-center rounded-b-md">
    <a href="/Zonestouristiques" className="block text-white hover:text-gray-300" onClick={handleLinkClick}>Zones touristiques</a>
    <a href="/guide" className="block text-white hover:text-gray-300" onClick={handleLinkClick}>Guides</a>
    <a href="/Services" className="block text-white hover:text-gray-300" onClick={handleLinkClick}>Nos services</a>
    <a href="/apropos" className="block text-white hover:text-gray-300" onClick={handleLinkClick}>À propos</a>
    <a href="/contact" className="block text-white hover:text-gray-300" onClick={handleLinkClick}>Contacts</a>

    {/* Barre de recherche sur mobile */}
    <div className="relative mx-auto w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Recherche..."
        className="w-full pl-9 pr-3 py-2 rounded-md text-sm text-black focus:outline-none"
      />
      <BiSearch
        className="absolute top-2.5 left-2 text-gray-500 text-base cursor-pointer"
        onClick={handleSearch}
      />
    </div>

    {/* Profil utilisateur sur mobile */}
    <div className="relative" ref={profileRef}>
      <button onClick={toggleProfile} className="text-xl text-white mt-2">
        <FaUserCircle />
      </button>
      {profileOpen && (
        <div className="absolute right-4 left-4 mt-2 bg-white text-black shadow-lg rounded-xl z-50">
          <div className="p-4">
            <h3 className="font-semibold text-lg text-blue-600 mb-3 border-b pb-2">Mon Profil</h3>
            {loading ? (
              <p>Chargement...</p>
            ) : error ? (
              <p className="text-red-600">{error}</p>
            ) : user ? (
              <>
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${user.prenom}+${user.nom}&background=random&size=64`}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.prenom} {user.nom}</p>
                    <p className="text-xs text-gray-500">Utilisateur connecté</p>
                  </div>
                </div>
                <Link
                  to="/authentification/ProfileUser"
                  className="block w-full bg-blue-600 text-white py-1.5 rounded-md text-center hover:bg-blue-700"
                >
                  Profil
                </Link>
                <button
                  className="mt-2 w-full bg-red-600 text-white py-1.5 rounded-md hover:bg-red-700"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setUser(null);
                    setProfileOpen(false);
                  }}
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link
                to="/authentification/Connexion"
                className="block w-full bg-green-600 text-white py-1.5 rounded-md text-center hover:bg-green-700"
              >
                Se connecter
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
)}

    </header>
  );
};

export default HeaderSite;
