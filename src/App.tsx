import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Language, translations } from './translations';
import Navbar from './components/Navbar/Navbar';
import Presentation from './components/Presentation/Presentation';
import TevesTech from './components/TevesTech/TevesTech';
import MyProjects from './components/MyProjects/MyProjects';
import ScheduleSection from './components/ScheduleSection/ScheduleSection';
import SocialContent from './components/SocialContent/SocialContent';
import MyExperience from './components/MyExperience/MyExperience';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import './App.css';

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#003366',
      dark: '#002244',
      light: '#004c99',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#38bdf8',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('mtt_preferred_lang');
    return saved === 'en' || saved === 'es' ? saved : 'es';
  });

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('mtt_preferred_lang', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="executive-app">
        {/* Navigation Bar */}
        <Navbar lang={lang} onLanguageChange={handleLanguageChange} t={t.nav} />

        {/* Main Content Sections with Zebra + 3 Disruptive Layouts */}
        <main>
          {/* 1. Hero / Presentation (Zebra 1: Blanco Puro) */}
          <Presentation t={t.hero} />

          {/* 2. Teves Tech Spotlight (Disruptivo 1: Fondo Negro Noche) */}
          <TevesTech t={t.tevesTech} />

          {/* 3. Proyectos Autónomos (Zebra 2: Fondo Celeste Claro) */}
          <MyProjects t={t.projects} />

          {/* 4. Agendar Reunión (Disruptivo 2: Degradado Premium Azul) */}
          <ScheduleSection t={t.scheduleSection} />

          {/* 5. Redes Sociales & Contenido (Disruptivo 3: Degradado Estilo Instagram) */}
          <SocialContent t={t.socialContent} />

          {/* 6. Trayectoria Profesional Horizontal (Zebra 3: Fondo Blanco Puro) */}
          <MyExperience t={t.trajectory} />

          {/* 7. Estudios & Reconocimientos (Zebra 4: Fondo Celeste Claro) */}
          <Education t={t.education} />
        </main>

        {/* Footer */}
        <Footer t={t.footer} />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp lang={lang} />
      </div>
    </ThemeProvider>
  );
};

export default App;