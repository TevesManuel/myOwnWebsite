import React from "react"

interface TSliderElementProps {
    children: React.ReactNode;
}

const TSliderElement : React.FC<TSliderElementProps> = ({ children }) => {
    return (
        <div className="TSliderElement">
            {children}
        </div>
    );
}
export default TSliderElement;