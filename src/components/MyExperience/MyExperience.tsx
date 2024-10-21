import React from "react";
import "./MyExperience.css";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import MyExperienceTimeline from "./MyExperienceTimeline/MyExperienceTimeline";

const MyExperience : React.FC = () => {
    return (
        <div className='fw c'>
        <div className='mainExperienceCotainer'>
            <div className='titleExperience'>
                <CodeRoundedIcon style={{'fontSize': '50px'}}/> <h1 className='inter'>Work experience</h1>
            </div>
            <div style={{'display': 'flex', 'alignItems': 'left'}}>
                <MyExperienceTimeline />
            </div>
        </div>
    </div>
    );
}

export default MyExperience;