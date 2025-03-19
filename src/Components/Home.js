import React from "react";
import { useState } from "react";
import first from '../assets/Tourisme/desert.jpg';
import second from '../assets/Tourisme/nature.jpg';
import third from '../assets/Tourisme/egypte.jpg';
import fourth from '../assets/Tourisme/eau.jpg';
import fifth from '../assets/Tourisme/plage.jpg';
import sixth from '../assets/Tourisme/rocher.jpg';

import "./Style.css"; 
import image1 from "../assets/Tourisme/avion.jpg";
import image2 from  "../assets/Tourisme/camera.jpg";
import image3 from  "../assets/Tourisme/christ_bresil.webp";
import image4 from  "../assets/Tourisme/egypte.jpg";
import image5 from "../assets/Tourisme/girafe.jpg";
import image6 from  "../assets/Tourisme/eiffel.jpg";
import image7 from  "../assets/Tourisme/un-gorille-dans-la-foret-de-bwindi.jpg";
import image8 from "../assets/Tourisme/goree_il2.jpg";


//pour le defilement d images

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data2 = [
  {
    image: image1,
    description: "Informatique théorique et quantique",
  },
  {
    image: image2,
    description: "Génie logiciel et développement",
  },
  {
    image: image3,
    description: "Recherche opérationnelle et IA",
  },
  {
    image: image4,
    description: "Bio-informatique et vision 3D",
  },
  {
    image: image5,
    description: "Une girafe dans la nature",
  },
  {
    image: image6,
    description: "La merveille de la tour Eiffel",
  },
  {
    image: image7,
    description: "Le gorille un animal fantastique",
  },
  {
    image: image8,
    description: "L'ile de Goree un endroit historique",
  },
];


  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Change d'image toutes les 3 secondes
  };



const containerStyles = {
  width: "80%", // Réduction de la largeur pour l'espace à gauche et à droite
  height: "300px",
  margin: "20px auto", // Espacement uniforme en haut et sur les côtés
  marginBottom: "20px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
 
};

const sliderStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "10px", // Ajustement pour rester sur l'image
  fontSize: "50px",
  color: "#dfdfdf",
  zIndex: 2,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "10px", // Ajustement pour rester sur l'image
  fontSize: "50px",
  color: "#dfdfdf",
  zIndex: 2,
  cursor: "pointer",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

const dotStyle = ({ currentIndex, slideIndex }) => ({
  margin: "0 5px",
  cursor: "pointer",
  fontSize: "20px",
  color: currentIndex === slideIndex ? 'lightblue' : '#580101',
});

const Home = () => {
  const slides = [
    { imagePath: first, title: "Slide 1" },
    { imagePath: second, title: "Slide 2" },
    { imagePath: third, title: "Slide 3" },
    { imagePath: fourth, title: "Slide 4" },
    { imagePath: fifth, title: "Slide 5" },
    { imagePath: sixth, title: "Slide 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  // Constante pour nos images
  const data = [
    {
      image: image1,
      title: "Le Département d'informatique et de recherche opérationnelle de l'Université de Montréal est composé d'une quarantaine ",
      link: "#plage",
    },
    {
      image: image2,
      title: "Le Département d'informatique et de recherche opérationnelle de l'Université de Montréal est composé d'une quarantaine ",
      link: "#monument",
    },
    {
      image: image3,
      title: "Le Département d'informatique et de recherche opérationnelle de l'Université de Montréal est composé d'une quarantaine ",
      link: "#parc",
    },
    {
      image: image4,
      title: "Le Département d'informatique et de recherche opérationnelle de l'Université de Montréal est composé d'une quarantaine ",
      link: "#parc",
    },
    {
      image: image5,
      title: "Le Département d'informatique et de recherche opérationnelle de l'Université de Montréal est composé d'une quarantaine ",
      link: "#parc",
    }
  ];
  

  return (

      <React.Fragment>

{/*<div
        id="body"
        style={{
          //backgroundImage: `url(${backgroundImage})`,
          //backgroundSize: "cover",
          backgroundColor: "	#4199F3",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
</div>*/}

<div id="body">
<div className="container " >
        <section className="py-3 text-center">
          <div className="container">
          <h1 className="display-2 fw-bold text-white p-3 title-main">
           TOURISME-TRAVEL
</h1>

          </div>
        </section>
        </div>

    
    <div style={containerStyles}>
      <div style={sliderStyles}>
        <div onClick={goToPrevious} style={leftArrowStyles}>❰</div>
        <div onClick={goToNext} style={rightArrowStyles}>❱</div>
        <div
          style={{
            ...slideStyles,
            backgroundImage: `url(${slides[currentIndex].imagePath})`,
          }} className="slide-image"
        ></div>
        <div style={dotsContainerStyles}>
          {slides.map((_, index) => (
            <div
              key={index}
              style={dotStyle({ currentIndex, slideIndex: index })}
              onClick={() => goToSlide(index)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
    <div style={{ height: "30px" }}></div>

    </div>

    <div className="container py-5 text-center">
      <h1 className="fw-bold text-uppercase mb-4">Découvrir le monde </h1>
      </div>



      <div className="container part text-center py-5">
  <h2 className="fw-bold text-primary mb-4">🌍 Explorez le monde avec nous ! ✈️</h2>
  
  <p className="lead text-dark">
    Découvrez des paysages à couper le souffle, des monuments historiques fascinants et des expériences uniques 
    qui rendront votre voyage inoubliable !  
  </p>

  <div className="border-start border-4 border-primary ps-3 my-4">
    <p className="text-muted fst-italic">
      "Que vous soyez amateur d’aventure, de culture ou de détente, nos destinations vous réservent des moments exceptionnels."
    </p>
  </div>

  <p className="lead text-dark">
    🌟 Réservez dès maintenant votre <span className="text-primary fw-bold">visite guidée</span>, 
    trouvez <span className="text-primary fw-bold">l’hébergement idéal</span> et 
    laissez-vous emporter par la magie de l’exploration.  
  </p>

  <button className="btn btn-primary btn-lg mt-3 shadow-sm">🌍 Planifiez votre voyage</button>
</div>


<div className="mt-4">
  <Slider {...settings}>
    {data2.map((item, index) => (
      <div key={index} className="position-relative">
        <img
          src={item.image}
          alt={`Slide ${index + 1}`}
          className="img-fluid rounded hover-zoom"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out",
          }}
        />
        <p className="text-center mt-2 bg-dark text-white px-3 py-2 rounded-3 opacity-75">
          {item.description}
        </p>
      </div>
    ))}
  </Slider>
</div>

<div className="container text-center py-5">
  <h2 className="fw-bold text-success mb-4">
    🌍 Laissez-vous séduire par ces destinations d’exception ! ✨
  </h2>

  <p className="lead text-dark">
    Envie d’évasion, de découvertes culturelles ou d’aventures inoubliables ?  
    Ces lieux magiques vous attendent pour une expérience hors du commun.  
  </p>

  <div className="border-start border-4 border-success ps-3 my-4">
    <p className="text-muted fst-italic">
      "Du sable doré des plages exotiques aux merveilles architecturales, chaque destination a une histoire à vous raconter."
    </p>
  </div>

  <p className="lead text-dark">
    🌟 Explorez, goûtez, ressentez et laissez-vous envoûter par la beauté et l’authenticité de ces endroits exceptionnels.  
    Préparez-vous à vivre des <span className="text-success fw-bold">moments inoubliables</span> et à repartir avec des souvenirs gravés à jamais !  
  </p>

  <button className="btn btn-success btn-lg mt-3 shadow-sm">
    📍 Découvrez ces lieux maintenant
  </button>
</div>

<div className="py-3" style={{ margin: "20px" }}>
  <div className="text-center">
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div
            className="card border border-light shadow-sm h-100 position-relative overflow-hidden"
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="card-img-top hover-zoom"
              style={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
              }}
            />
            <div
              className="card-body text-white text-center"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
                padding: "15px",
              }}
            >
              <p className="card-text fw-bold">{item.title}</p>
              <a
                href={item.link}
                className="text-warning text-decoration-none fw-bold"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<style jsx>{`
  .hover-zoom:hover {
    transform: scale(1.05);
  }
`}</style>



    </React.Fragment>
  );
};

export default Home;
