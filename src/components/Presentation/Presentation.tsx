import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Presentation.css";

const Presentation : React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current || !infoRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const sectionEl = sectionRef.current;
        const imageEl = imageRef.current;
        const infoEl = infoRef.current;

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
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            )
            .fromTo(
                imageEl,
                { opacity: 0, x: -30, scale: 0.9 },
                { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out" },
                "-=0.5"
            )
            .fromTo(
                Array.from(infoEl.children),
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" },
                "-=0.5"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="presentationMainContainer">
            <div className="presentationContainer">
                <div style={{'flex': 1, 'display': 'flex', 'alignItems': 'center'}}>
                    <img ref={imageRef} src="https://avatars.githubusercontent.com/u/111713870?v=4" alt="me" style={{'borderRadius': '100%', 'height': '200px'}}></img>
                </div>
                <div ref={infoRef} className="inter presentationInfoContainer">
                    <h1 style={{'margin': 0}}>Hi I'm Manuel Teves</h1>
                    <h4 style={{'marginTop': '10px'}}>Buenos Aires, Argentina 🇦🇷</h4>
                    <h4 style={{'marginTop': '10px'}}>💻 Software developer</h4>
                    <h4>🛠️ Scientific technician specialized in electronics</h4>
                    <h4>📗 Always learning</h4>
                    <h3 style={{'marginTop': '10px'}}>Featured skills:</h3>
                    <div>
                        <ul style={{'columnCount': 2, 'paddingLeft': '20px', 'gap': '30px'}}>
                            <li>Fullstack MERN</li>
                            <li>Rust</li>
                            <li>C/C++</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
