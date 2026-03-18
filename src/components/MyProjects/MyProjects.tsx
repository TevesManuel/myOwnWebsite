import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MyProjects.css";
import TSlider from "../TSlider/TSlider";
import TSliderElement from "../TSlider/TSliderElement/TSliderElement";
import { Link } from "@mui/material";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

const MyProjects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const sectionEl = sectionRef.current;
    const titleEl = sectionEl.querySelector(".inter");
    const containerEl = sectionEl.querySelector(".projectsContainer");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(
        sectionEl,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" }
      );

      if (titleEl) {
        tl.fromTo(
          titleEl,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
          "-=0.45"
        );
      }

      if (containerEl) {
        tl.fromTo(
          containerEl,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.35"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="projectsSection" className="projectsMainContainer">
        <div style={{'width': '80%', 'color': 'white', 'display': 'flex', 'alignItems': 'center'}} className="inter">
            <CodeRoundedIcon style={{'fontSize': '50px'}} /><h1>Projects</h1>
        </div>
        <div className="projectsContainer">
            <TSlider>
                <TSliderElement>
                    <div className="fwh infoProjectsContainer">
                        <div className="projectsContainerImage">
                            <img src="https://raw.githubusercontent.com/TevesManuel/hospital-booking-app/refs/heads/main/doc/images/home-image.png" alt="home page of hospital booking app" style={{'width': '60%'}}/>
                        </div>
                        <div className="inter projectsContainerInfo">
                            <h1 style={{'marginBottom': 0}}>Hospital booking app</h1>
                            <p>  
                                Hospital Booking is a hospital reservation app that streamlines medical appointment management for patients and doctors. Patients can easily schedule and manage appointments while accessing their medical history, while doctors can organize their schedules and view appointments. The user-friendly interface provides a seamless experience for all users.
                            </p>
                            <Link href="https://github.com/TevesManuel/hospital-booking-app/" target="_blank" rel="noreferrer">More information</Link>
                        </div>
                    </div>
                </TSliderElement>
                <TSliderElement>
                    <div className="fwh infoProjectsContainer">
                        <div className="projectsContainerImage">
                            <img src="https://raw.githubusercontent.com/TevesManuel/hospital-booking-app/refs/heads/main/doc/images/home-image.png" alt="home page of hospital booking app" style={{'width': '60%'}}/>
                        </div>
                        <div className="inter projectsContainerInfo">
                            <h1 style={{'marginBottom': 0}}>Hospital booking app</h1>
                            <p>  
                                Hospital Booking is a hospital reservation app that streamlines medical appointment management for patients and doctors. Patients can easily schedule and manage appointments while accessing their medical history, while doctors can organize their schedules and view appointments. The user-friendly interface provides a seamless experience for all users.
                            </p>
                            <Link href="https://github.com/TevesManuel/hospital-booking-app/" target="_blank" rel="noreferrer">More information</Link>
                        </div>
                    </div>
                </TSliderElement>
                <TSliderElement>
                    <div className="fwh infoProjectsContainer">
                        <div className="projectsContainerImage">
                            <img src="https://raw.githubusercontent.com/TevesManuel/hospital-booking-app/refs/heads/main/doc/images/home-image.png" alt="home page of hospital booking app" style={{'width': '60%'}}/>
                        </div>
                        <div className="inter projectsContainerInfo">
                            <h1 style={{'marginBottom': 0}}>Hospital booking app</h1>
                            <p>  
                                Hospital Booking is a hospital reservation app that streamlines medical appointment management for patients and doctors. Patients can easily schedule and manage appointments while accessing their medical history, while doctors can organize their schedules and view appointments. The user-friendly interface provides a seamless experience for all users.
                            </p>
                            <Link href="https://github.com/TevesManuel/hospital-booking-app/" target="_blank" rel="noreferrer">More information</Link>
                        </div>
                    </div>
                </TSliderElement>
            </TSlider>
        </div>
    </div>
  );
};

export default MyProjects;
