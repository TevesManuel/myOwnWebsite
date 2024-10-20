import React from "react";
import './Navbar.css';

const Navbar : React.FC = () => {
    return (
        <div className="navbarMainContainer">
            <div className="navbarContainer">
                <div className="navbarOption">
                    <p className="inter">Experiencia</p>
                </div>
                <div className="navbarOption">
                    <p className="inter">Proyectos</p>
                </div>
                <div className="navbarOption">
                    <p className="inter">Sobre mí</p>
                </div>
                <div className="navbarOption">
                    <p className="inter">Contacto</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;