import React from "react";
import './Navbar.css';

const Navbar : React.FC = () => {
    const handleScroll = (id : string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
      
    return (
        <div className="navbarMainContainer">
            <div className="navbarContainer">
                <div className="navbarOption">
                    <p className="inter" onClick={()=>handleScroll("experienceSection")}>Experience</p>
                </div>
                <div className="navbarOption">
                    <p className="inter" onClick={()=>handleScroll("projectsSection")}>Projects</p>
                </div>
                <div className="navbarOption">
                    <p className="inter" onClick={()=>handleScroll("aboutMeSection")}>About me</p>
                </div>
                <div className="navbarOption">
                    <p className="inter" onClick={()=>window.location.href = 'mailto:manuel.tomas.teves@gmail.com'}>Contact</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;