import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from '@mui/material';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslationContent } from '../../translations';
import './TevesTech.css';

gsap.registerPlugin(ScrollTrigger);

interface TevesTechProps {
  t: TranslationContent['tevesTech'];
}

const TevesTech: React.FC<TevesTechProps> = ({ t }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const logoColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        leftColRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      ).fromTo(
        logoColRef.current,
        { opacity: 0, scale: 0.92, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out' },
        '-=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      id="teves-tech"
      ref={sectionRef}
      component="section"
      className="teves-tech-night-section"
      sx={{
        backgroundColor: '#06080f', // Fondo negro noche
        color: '#ffffff',
        position: 'relative',
        py: { xs: 12, md: 18 },
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '15%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 51, 102, 0.4) 0%, rgba(6, 8, 15, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Half: Story, Focus & Highlights (No cards!) */}
          <Grid item xs={12} lg={6}>
            <Box ref={leftColRef}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2.8rem', sm: '3.6rem', md: '4.2rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.08,
                  mb: 1.2,
                  color: '#ffffff',
                }}
              >
                {t.title}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: '#38bdf8',
                  fontWeight: 600,
                  fontSize: { xs: '1.15rem', md: '1.35rem' },
                  fontStyle: 'italic',
                  mb: 3,
                }}
              >
                {t.role}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  color: '#cbd5e1',
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                {t.description}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.02rem', md: '1.1rem' },
                  color: '#94a3b8',
                  lineHeight: 1.7,
                  mb: 4,
                }}
              >
                {t.description2}
              </Typography>

              {/* Clean inline highlights list without heavy cards */}
              <Stack spacing={1.6} sx={{ mb: 4.5 }}>
                {t.highlights.map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircleOutlineRoundedIcon sx={{ fontSize: 20, color: '#38bdf8', mt: '3px', flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: '#e2e8f0', fontSize: '0.98rem', lineHeight: 1.5 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  href={t.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  endIcon={<NorthEastRoundedIcon />}
                  sx={{
                    backgroundColor: '#ffffff',
                    color: '#06080f',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    px: 3.5,
                    py: 1.5,
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: '#f1f5f9',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {t.viewSiteBtn}
                </Button>

                <Button
                  variant="outlined"
                  href="https://meet.tvs.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  startIcon={<CalendarMonthRoundedIcon />}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    px: 3.2,
                    py: 1.5,
                    borderRadius: '12px',
                    '&:hover': {
                      borderColor: '#38bdf8',
                      color: '#38bdf8',
                      backgroundColor: 'rgba(56, 189, 248, 0.08)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {t.scheduleBtn}
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Right Half: Official Teves Tech Logo (En la otra mitad horizontal) */}
          <Grid item xs={12} lg={6}>
            <Box
              ref={logoColRef}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: { xs: 3, md: 6 },
                position: 'relative',
              }}
            >
              {/* Backlight halo behind logo */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(0, 51, 102, 0.1) 50%, transparent 75%)',
                  filter: 'blur(35px)',
                  pointerEvents: 'none',
                }}
              />

              <Box
                component="img"
                src="/teves-tech-logo.svg"
                alt="Teves Tech Logo"
                className="teves-tech-display-logo"
                sx={{
                  maxWidth: '100%',
                  width: { xs: '85%', sm: '75%', md: '80%' },
                  height: 'auto',
                  display: 'block',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 15px 35px rgba(0, 51, 102, 0.45))',
                  transition: 'transform 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TevesTech;
