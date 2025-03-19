import React from "react";
import backgroundImage from "./Tourisme.jpg";
import "./Style.css"; 
import image1 from "./imge1.jpg";
import image2 from "./imge2.jpg";
import image3 from "./imge3.jpg";
import image4 from "./imge4.jpg";
import image5 from "./imge5.jpg";

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

function Home() {
  return (
    <React.Fragment>
      {/* 🏞️ Section principale avec l’image de fond */}
      <div
        id="body"
        style={{
          //backgroundImage: `url(${backgroundImage})`,
          //backgroundSize: "cover",
          backgroundColor: "	#4199F3",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        {/* 🏷️ Titre principal */}
        <div className="container">
        <section className="py-5 text-center">
          <div className="container">
            <h1
              className="display-2 fw-bold text-white p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              TOURISME-LINE
            </h1>

        

          </div>
        </section>
        </div>

        
        
      </div>

      <div className="container py-5 text-center">
      <h1 className="fw-bold text-uppercase mb-4">Découvrir le monde </h1>
      </div>
      <div className=" container part">
        <p>Le Département d'informatique et de recherche opérationnelle de l'Université de Montréal est composé d'une quarantaine de professeurs dynamiques et passionnés travaillant dans différents domaines de l'informatique allant de l'informatique théorique et quantique au génie logiciel en passant par la recherche opérationnelle, la bio-informatique, l'infographie, la vision 3D, le traitement de l'image, la linguistique informatique et plus encore.</p>
        <p>Le Département d'informatique et de recherche opérationnelle de l'Université de Montréal est composé d'une quarantaine de professeurs dynamiques et passionnés travaillant dans différents domaines de l'informatique allant de l'informatique théorique et quantique au génie logiciel en passant par la recherche opérationnelle, la bio-informatique, l'infographie, la vision 3D, le traitement de l'image, la linguistique informatique et plus encore.</p>
        <p>Le Département d'informatique et de recherche opérationnelle de l'Université de Montréal est composé d'une quarantaine de professeurs dynamiques et passionnés travaillant dans différents domaines de l'informatique allant de l'informatique théorique et quantique au génie logiciel en passant par la recherche opérationnelle, la bio-informatique, l'infographie, la vision 3D, le traitement de l'image, la linguistique informatique et plus encore.</p>
        <p>Le Département d'informatique et de recherche opérationnelle de l'Université de Montréal est composé d'une quarantaine de professeurs dynamiques et passionnés travaillant dans différents domaines de l'informatique allant de l'informatique théorique et quantique au génie logiciel en passant par la recherche opérationnelle, la bio-informatique, l'infographie, la vision 3D, le traitement de l'image, la linguistique informatique et plus encore.</p>

</div>



<div className="py-3" style={{ margin: "20px" }}>
  <div className=" text-center">
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card border border-light shadow-sm h-100">
            {/* Image intégrée dans la carte */}
            <img
              src={item.image}
              alt={item.title}
              className="card-img-top"
              style={{ width: "100%", height: "450px", objectFit: "cover" }}
            />
            {/* Corps de la carte avec description et lien */}
            <div className="card-body" >
              <p className="card-text">{item.title}</p>
              <a
                href={item.link}
                className="text-primary text-decoration-none fw-bold"
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


    </React.Fragment>
  );
}

export default Home;
