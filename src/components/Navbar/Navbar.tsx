import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { Language, TranslationContent } from '../../translations';
import './Navbar.css';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationContent['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { id: 'teves-tech', label: t.tevesTech },
    { id: 'proyectos-autonomos', label: t.projects },
    { id: 'agendar-reunion', label: t.schedule },
    { id: 'redes-sociales', label: t.social },
    { id: 'trayectoria', label: t.trajectory },
    { id: 'estudios', label: t.education },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 3 : 0}
        className={`executive-navbar ${scrolled ? 'is-scrolled' : ''}`}
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid rgba(226, 232, 240, 0.6)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          color: '#0f172a',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: { xs: 68, md: 76 }, justifyContent: 'space-between' }}>
            {/* Brand Logo / Monogram */}
            <Box
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  letterSpacing: '0.04em',
                  boxShadow: '0 4px 12px rgba(0, 51, 102, 0.25)',
                }}
              >
                MT
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Box sx={{ fontWeight: 700, fontSize: '1rem', color: '#003366', lineHeight: 1.2 }}>
                  Manuel Tomas Teves
                </Box>
                <Box sx={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic' }}>
                  Software Architect
                </Box>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  sx={{
                    color: '#334155',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    px: 1.6,
                    py: 1,
                    borderRadius: '8px',
                    '&:hover': {
                      color: '#003366',
                      backgroundColor: 'rgba(0, 51, 102, 0.05)',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Right Side Actions: Language Selector & Meeting CTA */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {/* Language Switcher Pill */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 51, 102, 0.06)',
                  borderRadius: '999px',
                  p: '3px',
                  border: '1px solid rgba(0, 51, 102, 0.12)',
                }}
              >
                <LanguageRoundedIcon sx={{ fontSize: 16, color: '#003366', ml: 0.8, mr: 0.4 }} />
                <Button
                  size="small"
                  onClick={() => onLanguageChange('es')}
                  sx={{
                    minWidth: 'auto',
                    px: 1.2,
                    py: 0.3,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    borderRadius: '999px',
                    color: lang === 'es' ? '#ffffff' : '#475569',
                    backgroundColor: lang === 'es' ? '#003366' : 'transparent',
                    boxShadow: lang === 'es' ? '0 2px 6px rgba(0, 51, 102, 0.3)' : 'none',
                    '&:hover': {
                      backgroundColor: lang === 'es' ? '#002244' : 'rgba(0, 51, 102, 0.08)',
                    },
                  }}
                >
                  ES
                </Button>
                <Button
                  size="small"
                  onClick={() => onLanguageChange('en')}
                  sx={{
                    minWidth: 'auto',
                    px: 1.2,
                    py: 0.3,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    borderRadius: '999px',
                    color: lang === 'en' ? '#ffffff' : '#475569',
                    backgroundColor: lang === 'en' ? '#003366' : 'transparent',
                    boxShadow: lang === 'en' ? '0 2px 6px rgba(0, 51, 102, 0.3)' : 'none',
                    '&:hover': {
                      backgroundColor: lang === 'en' ? '#002244' : 'rgba(0, 51, 102, 0.08)',
                    },
                  }}
                >
                  EN
                </Button>
              </Box>

              {/* Primary Meeting CTA */}
              <Button
                variant="contained"
                href="https://meet.tvs.ar"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<CalendarMonthRoundedIcon />}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textTransform: 'none',
                  px: 2.2,
                  py: 1,
                  borderRadius: '10px',
                  boxShadow: '0 4px 14px rgba(0, 51, 102, 0.25)',
                  '&:hover': {
                    backgroundColor: '#002244',
                    boxShadow: '0 6px 18px rgba(0, 51, 102, 0.35)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {t.scheduleMeeting}
              </Button>

              {/* Mobile Menu Hamburger */}
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{
                  display: { xs: 'flex', lg: 'none' },
                  color: '#003366',
                  backgroundColor: 'rgba(0, 51, 102, 0.06)',
                  borderRadius: '10px',
                  p: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 51, 102, 0.12)',
                  },
                }}
                aria-label="Abrir menú"
              >
                <MenuRoundedIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '85%',
            maxWidth: 340,
            backgroundColor: '#ffffff',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                MT
              </Box>
              <Box sx={{ fontWeight: 700, color: '#003366' }}>Manuel Tomas Teves</Box>
            </Box>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#64748b' }}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>

          <List sx={{ pt: 1 }}>
            {navLinks.map((link) => (
              <ListItem key={link.id} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => scrollToSection(link.id)}
                  sx={{
                    borderRadius: '8px',
                    py: 1.2,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 51, 102, 0.06)',
                      color: '#003366',
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: '#334155',
                      fontSize: '1rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ pt: 2, borderTop: '1px solid #e2e8f0' }}>
          <Button
            fullWidth
            variant="contained"
            href="https://meet.tvs.ar"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<CalendarMonthRoundedIcon />}
            sx={{
              backgroundColor: '#003366',
              color: '#ffffff',
              fontWeight: 600,
              py: 1.4,
              borderRadius: '10px',
              textTransform: 'none',
              fontSize: '0.95rem',
              '&:hover': {
                backgroundColor: '#002244',
              },
            }}
          >
            {t.scheduleMeeting}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;