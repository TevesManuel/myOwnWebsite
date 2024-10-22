import React from "react";
import "./MyExperience.css";
import MyExperienceTimeline from "./MyExperienceTimeline/MyExperienceTimeline";
import WorkOutlineRounded from '@mui/icons-material/WorkOutlineRounded';
const MyExperience : React.FC = () => {
    return (
        <div id="experienceSection" className='fw c'>
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