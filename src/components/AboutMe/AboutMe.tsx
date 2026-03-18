import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutMe.css";
import InfoIcon from '@mui/icons-material/Info';

const AboutMe : React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const sectionEl = sectionRef.current;
        const titleEl = sectionEl.querySelector(".titleAboutMeContainer");
        const textBlocks = sectionEl.querySelectorAll("p");
        const imageEl = sectionEl.querySelector("img");

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
                    { opacity: 0, x: -18 },
                    { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
                    "-=0.45"
                );
            }

            if (textBlocks.length > 0) {
                tl.fromTo(
                    Array.from(textBlocks),
                    { opacity: 0, y: 14 },
                    { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out" },
                    "-=0.35"
                );
            }

            if (imageEl) {
                tl.fromTo(
                    imageEl,
                    { opacity: 0, x: 20, scale: 0.96 },
                    { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power2.out" },
                    "-=0.45"
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} id="aboutMeSection" className="mainAboutMeContainer">
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
                            I trained as a Specialized Scientific Technician in Electronics at EEST N°6 'Albert Thomas.' I am currently a Computer Engineering student at UNLP (Universidad Nacional de La Plata), where I plan to gain a broader perspective on software development to reach the next level.
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
