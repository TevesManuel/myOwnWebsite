import React from "react";
import "./MyProjects.css";
import TSlider from "../TSlider/TSlider";
import TSliderElement from "../TSlider/TSliderElement/TSliderElement";
import { Link } from "@mui/material";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

const MyProjects: React.FC = () => {

  return (
    <div className="projectsMainContainer">
        <div style={{'width': '80%', 'color': 'white', 'display': 'flex', 'alignItems': 'center'}} className="inter">
            <CodeRoundedIcon style={{'fontSize': '50px'}} /><h1>Projects</h1>
        </div>
        <div className="projectsContainer">
            <TSlider>
                <TSliderElement>
                    <div className="fwh infoProjectsContainer">
                        <div className="projectsContainerImage">
                            <img src="https://raw.githubusercontent.com/TevesManuel/hospital-booking-app/refs/heads/main/doc/images/home-image.png" style={{'width': '60%'}}/>
                        </div>
                        <div className="inter projectsContainerInfo">
                            <h1 style={{'marginBottom': 0}}>Hospital booking app</h1>
                            <p>  
                                Hospital Booking is a hospital reservation app that streamlines medical appointment management for patients and doctors. Patients can easily schedule and manage appointments while accessing their medical history, while doctors can organize their schedules and view appointments. The user-friendly interface provides a seamless experience for all users.
                            </p>
                            <Link href="https://github.com/TevesManuel/hospital-booking-app/" target="_blank">More information</Link>
                        </div>
                    </div>
                </TSliderElement>
                <TSliderElement>
                    <div className="fwh infoProjectsContainer">
                        <div className="projectsContainerImage">
                            <img src="https://raw.githubusercontent.com/TevesManuel/hospital-booking-app/refs/heads/main/doc/images/home-image.png" style={{'width': '60%'}}/>
                        </div>
                        <div className="inter projectsContainerInfo">
                            <h1 style={{'marginBottom': 0}}>Hospital booking app</h1>
                            <p>  
                                Hospital Booking is a hospital reservation app that streamlines medical appointment management for patients and doctors. Patients can easily schedule and manage appointments while accessing their medical history, while doctors can organize their schedules and view appointments. The user-friendly interface provides a seamless experience for all users.
                            </p>
                            <Link href="https://github.com/TevesManuel/hospital-booking-app/" target="_blank">More information</Link>
                        </div>
                    </div>
                </TSliderElement>
                <TSliderElement>
                    <div className="fwh infoProjectsContainer">
                        <div className="projectsContainerImage">
                            <img src="https://raw.githubusercontent.com/TevesManuel/hospital-booking-app/refs/heads/main/doc/images/home-image.png" style={{'width': '60%'}}/>
                        </div>
                        <div className="inter projectsContainerInfo">
                            <h1 style={{'marginBottom': 0}}>Hospital booking app</h1>
                            <p>  
                                Hospital Booking is a hospital reservation app that streamlines medical appointment management for patients and doctors. Patients can easily schedule and manage appointments while accessing their medical history, while doctors can organize their schedules and view appointments. The user-friendly interface provides a seamless experience for all users.
                            </p>
                            <Link href="https://github.com/TevesManuel/hospital-booking-app/" target="_blank">More information</Link>
                        </div>
                    </div>
                </TSliderElement>
            </TSlider>
        </div>
    </div>
  );
};

export default MyProjects;
