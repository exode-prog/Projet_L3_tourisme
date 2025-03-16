import React from 'react'
import Style from './Style.css'
import {Fafacebook,FaTwitter,FaLinkedin,FaYoutube} from 'react-icons/fa'
import { DiJava } from 'react-icons/di'

function Footer(){

    return(
        <React.Fragment>
            <footer id="footerbg" className="p-4">
                <section className="d-flex justify-content-center">
                    <div className="me-5 d-none d-lg-block">
                        <span>Restez-connecter sur nos reseaux sociaux</span>
                        
                     </div>
                    <div>
                        <a href="">Fafacebook</a>
                        <a href="">FaTwitter</a>
                        <a href="">FaLinkedin</a>
                        <a href="">FaYoutube</a>
                    </div>

                </section>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-sm-4">
            <h5>Contacts</h5>
            <h5>A propos</h5>
            <p>L'informatique est une discipline basée sur le traitement d'informations via 
                des moyens électroniques (ordinateurs, systèmes numériques). 
                Le terme couvre deux branches : 
                l'une est théorique (définition de concepts et modèles),
                l'autre est pratique (techniques de mise en œuvre)</p>
                </div>
    
                

                <div className="col-sm-2">
                    <h5>Navigation</h5>
                    <p><a href="">home</a></p>
                    <p><a href="">Nous contacter</a></p>
                    <p><a href="">A propos de nous </a></p>
                </div>

                <div className="col-sm-2">
                    <h5>Services</h5>
                    <p><a href="">home</a></p>
                    <p><a href="">Nous contacter</a></p>
                    <p><a href="">A propos de nous </a></p>
                </div>


                <div className="col-sm-2">
                    <h5>Adresse</h5>
                    <p>Senegal</p>
                    <p>Dakar Sacre-coeur</p>
                    <p>+221 700987679</p>
                </div>



                </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer
