import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Link from '@mui/material/Link';
import "./MyExperienceTimeline.css";

const MyExperienceTimeline : React.FC = () => {
  return (
    <Timeline sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{'color': 'white'}}>
          <div style={{'display': 'flex'}}>
            <div style={{'flex': 5}}>
              <h2 className='inter'>
                UNITEC (UNLP)
              </h2>
              <h4 className='inter'>
                Software & electronic developer
              </h4>
              <h6 className='inter'>
                August 2024-October 2024
              </h6>
            </div>
            <div style={{'flex': 5}}>
              <h4>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was in charge of developing an AR experience where an interactive 3D model was rendered on a business card.
              </h4>
              <div className='multipleLinkContainer'>
                <Link href='https://github.com/TevesManuel/UNLP-UNITEC-RA' target="_blank" rel="noreferrer">More info</Link>
              </div>
              <h4>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was in charge of refactoring and optimizing the old code of a medical device for sensing diastolic pressure, systolic pressure, beats per minute and temperature and also migrated it from Arduino to PlatformIO. I developed the telemetry circuit together with a hardware abstraction for the SIM800L in order to facilitate the process of sending the collected data to the server via HTTP.
              </h4>
              <div className='multipleLinkContainer'>
                <Link href='https://github.com/TevesManuel/UNLP-UNITEC-electromedicina' target="_blank" rel="noreferrer">More information about the main project</Link>
                <Link href='https://github.com/TevesManuel/SIM800L-HAL' target="_blank" rel="noreferrer">More information about SIM800L hardware abstraction</Link>
              </div>
            </div>
            <div className='spaceBetweenTimelineContent'></div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  style={{'color': 'white'}}>
          <div style={{'display': 'flex'}}>
            <div style={{'flex': 5}}>
              <h2 className='inter'>
                Freelance
              </h2>
              <h4 className='inter'>
                Software developer
              </h4>
              <h6 className='inter'>
                2016-Now
              </h6>
            </div>
            <div style={{'flex': 5}}>
              <h4>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I developed multiple applications, mostly web-based client/server applications, so I have extensive experience in both sectors, using React for the front end in conjunction with other tools such as Bootstrap, Material UI (MUI), etc. On the other hand, in the back end I have a wider variety of technologies since I work with Rust, C#, and Javascript/Typescript.
              </h4>
              <h4>
                I also develop graphical applications in Unity, where I implement all kinds of technologies, thus carrying out interactive AR applications, special controls (whether they are custom controls for a more immersive experience, or for the adaptation of video games for people with limited or special abilities)
              </h4>
            </div>
          </div></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default MyExperienceTimeline;