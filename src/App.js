//import logo from './logo.svg';
//import './App.css';

//Importation des routes 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";  //localisation 
import Dashboard from "./pages/dashboard"
import Home from "./pages/Home"

import Connexion from "./pages/Authentification/Connexion";
import Inscription from "./pages/Authentification/Inscription";
import ProfileUser from "./pages/Authentification/ProfileUser";

import Service from "./pages/service"
import Guide from "./pages/guide"
import Apropos from "./pages/apropos.js"
import Contact from "./pages/contact.js"

import Header from "./Components/Header"
import HeaderSite from "./Components/HeaderSite"
import Footer from "./Components/Footer"
import NotFound from "./pages/notFound";
import Acceuil from "./pages/acceuil";
import GuideDetail from "./pages/guidedetail";
/*
import Home from "./Components/Home"
import Home2 from "./Components/Home2"
import Inscription from "./Components/pages/Authentification/Inscription"
import Connexion from "./Components/pages/Authentification/Connexion"
import ProfileUser from "./Components/pages/Authentification/ProfileUser"
import Dashboard from "./Components/pages/dashboard"
*/

function App() {

  //Ici on cree une condition de redirection de l'utilisation de Header selon les routes: 
  //header pour Home, HeaderSites pour les autres pages
  //Sur les pages connexion et inscription pas de header et footer

  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const isHomePage = path === "/";
  const isAuthPage = path === "/authentification/connexion" || path === "/authentification/inscription";

  // Liste des routes connues
  const knownRoutes = [
    "/", 
    "/dashboard", 
    "/service", 
    "/guide", 
    "/apropos", 
    "/contact",
    "apropos", 
    "guide",
    "guidedetail",
    "/authentification/connexion", 
    "/authentification/inscription", 
    "/authentification/profileuser"
  ];

  const isKnownRoute = knownRoutes.includes(path);
  const isNotFoundPage = !isKnownRoute;

  const isNoLayoutPage = isAuthPage || isNotFoundPage;

  return (
    <> 
      {!isNoLayoutPage && (isHomePage ? <Header /> : <HeaderSite />)}

      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/service" element={<Service />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />

        {/* gestion des urls non trouvees avec la page non trouvees */ }
        <Route path="*" element={<NotFound />} />

        {/* ✅ Pages Authentification */}
        <Route path="/authentification/connexion" element={<Connexion />} />
        <Route path="/authentification/inscription" element={<Inscription />} />
        <Route path="/authentification/profileuser" element={<ProfileUser />} />

        {/* pour les guides */}
        <Route path="/guide" element={<Guide />} />
        <Route path="/guidedetail" element={<GuideDetail />} />
      </Routes>

      {!isNoLayoutPage && <Footer />}
    </>
  );
}

export default App;
