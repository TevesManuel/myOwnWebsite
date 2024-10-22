import React from "react";
import "./AboutMe.css";
import InfoIcon from '@mui/icons-material/Info';

const AboutMe : React.FC = () => {
    return (
        <div className="mainAboutMeContainer">
            <div className="aboutMeContainer">
                <div className="inter titleAboutMeContainer">
                    <InfoIcon style={{'fontSize': '50px'}}/>
                    <h1>About Me</h1>
                </div>
                <div style={{'display': 'flex'}}>
                    <div style={{'flex': 6}}>
                        <p>
                            My name is Manuel Teves. I started programming at the age of 10, and since then, I have learned various technologies in a self-taught manner, which has allowed me to excel not only in computer science but also in areas such as mathematics, physics, optics, and electronics. I love facing new challenges and continuously learning.
                        </p>
                        <p>
                            In 2023, I reached the regional stage of the OMA (Argentine Mathematical Olympiad), solving mathematical problems at the Faculty of Exact Sciences of UNLP (National University of La Plata).
                        </p>
                        <p>
                            I trained as a Specialized Scientific Technician in Electronics at EEST N°6 'Albert Thomas.' I am currently a student of Information Systems Engineering at UTN (National Technological University), where I plan to gain a broader perspective on software development to reach the next level.
                        </p>
                        <p>
                            Simultaneously, while studying at EEST N°6, I worked as a freelancer for several years, developing web projects, desktop applications, and embedded systems.
                        </p>
                    </div>
                    <div style={{'flex': 4, display: 'flex', justifyContent: 'center'}}>
                        <img src="https://avatars.githubusercontent.com/u/111713870?v=4" style={{'borderRadius': '25px', height: '50%'}} alt="me"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;