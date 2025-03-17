import React from 'react'
import Style from './Style.css'

function Header(){

    return(
        <React.Fragment>
    
    <nav className="navbar navbar-expand-lg ">
        <div className="col-1 ">Salut je suis le logo  </div>
        <div className="container col-11" id="headerbg">
  <a className="navbar-brand text-warning fw-bold fs-2" href="#">Tableau de bord</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse"  id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link"  id="navbarSupportedContent"  href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"   id="navbarSupportedContent">Reservation</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#"   id="navbarSupportedContent">Hebergement</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#"   id="navbarSupportedContent">Visites</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"   id="navbarSupportedContent">Articles</a>
      </li>
  
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Recherche" aria-label="Search"/>
      <button className="btn btn-outline-dark my-2 my-sm-0 " type="submit">Rechercher</button>
      
    </form>
  </div>
  </div>
</nav>
    
        </React.Fragment>
    )
}
export default Header
