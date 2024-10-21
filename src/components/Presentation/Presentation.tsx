import React from "react";
import "./Presentation.css";

const Presentation : React.FC = () => {
    return (
        <div className="presentationMainContainer">
            <div className="presentationContainer">
                <div style={{'flex': 1, 'display': 'flex', 'alignItems': 'center'}}>
                    <img src="https://avatars.githubusercontent.com/u/111713870?v=4" style={{'borderRadius': '100%', 'height': '200px'}}></img>
                </div>
                <div className="inter presentationInfoContainer">
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