import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MyExperience from './components/MyExperience/MyExperience';
import Presentation from './components/Presentation/Presentation';
import MyProjects from './components/MyProjects/MyProjects';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

const App : React.FC = () => {
    return (
        <>
            <Navbar />        
            <div className='fwh'>
                <div className='initialSpace'></div>
                <Presentation />
                <MyExperience />
                <MyProjects />
                <AboutMe />
                <Footer />
            </div>
        </>
    );
}

export default App;