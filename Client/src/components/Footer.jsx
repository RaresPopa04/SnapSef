import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import "../styles/components/Footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Despre noi</h4>
                    <p>Suntem dedicați să vă oferim cele mai bune rețete pentru a vă bucura de gătit acasă. Descoperiți noi rețete și împărtășiți pasiunea pentru gătit!</p>
                </div>
                <div className="footer-flex">
                    <div className="footer-section">
                        <h4>Link-uri rapide</h4>
                        <ul className='linkList'>
                            <li><a href="#">Acasă</a></li>
                            <li><a href="#">Rețete</a></li>
                            <li><a href="#">Despre noi</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <a href='mailto:support@recipeapp.com'><FontAwesomeIcon icon={faEnvelope} /> support@recipeapp.com</a>
                        <div className="social-icons">
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 RecipeApp. Toate drepturile rezervate.</p>
            </div>
        </footer>
    );
};

export default Footer;