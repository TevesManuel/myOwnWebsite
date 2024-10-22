import React, { useState } from "react";
import "./TSlider.css";
import TSliderElement from "./TSliderElement/TSliderElement";
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

interface TSliderProps {
    children: React.ReactNode;
}
  
const TSlider: React.FC<TSliderProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const elementsCount = React.Children.count(children);

    const slides = React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TSliderElement) {
            return <div className="TSliderItem">{child}</div>;
        }
        return null;
    }) || [];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : elementsCount - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < elementsCount - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div style={{'width': '100%', 'height': '100%'}}>
            <div style={{display: 'flex'}}>
                <button onClick={handlePrev} className="inter buttonSliderController"> &lt; </button>
                <div className="slider">
                    <div
                        className="slides-container"
                        style={{ transform: `translateX(-${currentIndex === (elementsCount-1) ? (currentIndex*75-25) : currentIndex > 0 ? (currentIndex*75-12.5) : 0}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slide ${index === currentIndex ? 'focus' : ''}`}
                            >
                                {slide}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleNext} className="inter buttonSliderController"> &gt; </button>
            </div>
            <div className="carouselIndicator">
                {slides.map((slide, index) => (
                    <CircleRoundedIcon key={index} style={{'color': `${currentIndex === index ? 'white' : 'rgb(100,100,100)'}`}} />
                ))}
            </div>
        </div>
    )
}

export default TSlider;