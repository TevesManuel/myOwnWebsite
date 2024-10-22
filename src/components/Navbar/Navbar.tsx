import React from "react";
import './Navbar.css';

const Navbar : React.FC = () => {
    return (
        <div className="navbarMainContainer">
            <div className="navbarContainer">
                <div className="navbarOption">
                    <p className="inter">Experience</p>
                </div>
                <div className="navbarOption">
                    <p className="inter">Proyects</p>
                </div>
                <div className="navbarOption">
                    <p className="inter">About me</p>
                </div>
                <div className="navbarOption">
                    <p className="inter">Contact</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;