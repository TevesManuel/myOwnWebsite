import React from "react";
import "./MyProjects.css";
import TSlider from "../TSlider/TSlider";
import TSliderElement from "../TSlider/TSliderElement/TSliderElement";

const MyProjects: React.FC = () => {


  return (
    <div className="projectsMainContainer">
      <div className="projectsContainer">
        <TSlider>
            <TSliderElement>
                <div className="fwh" style={{'backgroundColor': 'red'}}>
                    <h1>
                        Message 1
                    </h1>
                </div>
            </TSliderElement>
            <TSliderElement>
                <div className="fwh" style={{'backgroundColor': 'green'}}>
                    <h1>
                        Message 2
                    </h1>
                </div>
            </TSliderElement>
            <TSliderElement>
                <div className="fwh" style={{'backgroundColor': 'blue'}}>
                    <h1>
                        Message 3
                    </h1>
                </div>
            </TSliderElement>
        </TSlider>
      </div>
    </div>
  );
};

export default MyProjects;
