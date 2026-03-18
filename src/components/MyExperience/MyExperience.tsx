import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MyExperience.css";
import MyExperienceTimeline from "./MyExperienceTimeline/MyExperienceTimeline";
import WorkOutlineRounded from '@mui/icons-material/WorkOutlineRounded';

const MyExperience : React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const sectionEl = sectionRef.current;
        const titleEl = sectionEl.querySelector(".titleExperience");
        const timelineEl = sectionEl.querySelector(".mainExperienceCotainer > div:last-child");

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
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            );

            if (titleEl) {
                tl.fromTo(
                    titleEl,
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
                    "-=0.45"
                );
            }

            if (timelineEl) {
                tl.fromTo(
                    timelineEl,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    "-=0.35"
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} id="experienceSection" className='fw c'>
            <div className='mainExperienceCotainer'>
                <div className='titleExperience'>
                    <WorkOutlineRounded style={{'fontSize': '50px'}}/> <h1 className='inter'>&nbsp;Work experience</h1>
                </div>
                <div style={{'display': 'flex', 'alignItems': 'left', 'width': '100%'}}>
                    <MyExperienceTimeline />
                </div>
            </div>
        </div>
    );
}

export default MyExperience;
