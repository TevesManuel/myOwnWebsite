import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MyExperience from './components/MyExperience/MyExperience';
import Footer from './components/Footer/Footer';
import Presentation from './components/Presentation/Presentation';
import MyProjects from './components/MyProjects/MyProjects';

const App : React.FC = () => {
    return (
        <>
            <Navbar />        
            <div className='fwh'>
                <div className='initialSpace'></div>
                <Presentation />
                <MyExperience />
                <MyProjects />
                <Footer />
            </div>
        </>
    );
}

export default App;
