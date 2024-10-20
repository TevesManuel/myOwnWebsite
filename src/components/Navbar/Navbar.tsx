import React from "react";
import './Navbar.css';

const Navbar : React.FC = () => {
    return (
        <div className="navbarMainContainer">
            <div className="navbarContainer">
                <div className="navbarOption">
                    <p>Experiencia</p>
                </div>
                <div className="navbarOption">
                    <p>Proyectos</p>
                </div>
                <div className="navbarOption">
                    <p>Sobre mí</p>
                </div>
                <div className="navbarOption">
                    <p>Contacto</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;