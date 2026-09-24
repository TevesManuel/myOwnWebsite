import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
} from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { gsap } from 'gsap';
import { TranslationContent } from '../../translations';
import profilePhoto from '../../profilePhoto.jpeg';
import './Presentation.css';

interface HeroProps {
  t: TranslationContent['hero'];
}

const Presentation: React.FC<HeroProps> = ({ t }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        avatarRef.current,
        { opacity: 0, scale: 0.88, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.7'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75 },
          '-=0.6'
        )
        .fromTo(
          summaryRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.55'
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
          '-=0.4'
        );

      // Continuous gentle floating animation for the circular photo
      gsap.to(avatarRef.current, {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('proyectos-autonomos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      ref={containerRef}
      component="section"
      className="hero-section"
      sx={{
        backgroundColor: '#ffffff',
        pt: { xs: 14, md: 20 },
        pb: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Executive Bio & Hero Text */}
          <Grid item xs={12} lg={7} order={{ xs: 2, lg: 1 }}>
            {/* User requested name heading */}
            <Typography
              ref={titleRef}
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.4rem' },
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                mb: 1.2,
              }}
            >
              {t.name}
            </Typography>

            {/* User requested: "Software Architect - Teves Tech Founder" abajo en cursiva */}
            <Typography
              ref={subtitleRef}
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.6rem', md: '1.9rem' },
                fontStyle: 'italic',
                fontWeight: 600,
                color: '#003366',
                letterSpacing: '-0.015em',
                lineHeight: 1.3,
                mb: 3,
              }}
            >
              {t.roleItalic}
            </Typography>

            {/* Executive Bio Summary */}
            <Typography
              ref={summaryRef}
              variant="body1"
              sx={{
                fontSize: { xs: '1.05rem', md: '1.18rem' },
                color: '#475569',
                lineHeight: 1.75,
                maxWidth: '680px',
                mb: 5,
              }}
            >
              {t.summary}
            </Typography>

            {/* CTAs */}
            <Stack
              ref={ctaRef}
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              alignItems={{ xs: 'stretch', sm: 'center' }}
            >
              <Button
                variant="contained"
                href="https://meet.tvs.ar"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                startIcon={<CalendarMonthRoundedIcon />}
                sx={{
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  px: 3.4,
                  py: 1.6,
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 51, 102, 0.22)',
                  '&:hover': {
                    backgroundColor: '#002244',
                    boxShadow: '0 12px 30px rgba(0, 51, 102, 0.32)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {t.ctaSchedule}
              </Button>

              <Button
                variant="outlined"
                href="mailto:contacto@tvs.ar"
                size="large"
                startIcon={<EmailRoundedIcon />}
                sx={{
                  borderColor: '#cbd5e1',
                  color: '#1e293b',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  px: 3,
                  py: 1.6,
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  '&:hover': {
                    borderColor: '#003366',
                    color: '#003366',
                    backgroundColor: 'rgba(0, 51, 102, 0.04)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {t.ctaContact}
              </Button>

              <Button
                onClick={scrollToProjects}
                size="large"
                endIcon={<ArrowDownwardRoundedIcon />}
                sx={{
                  color: '#64748b',
                  fontWeight: 500,
                  fontSize: '0.94rem',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#003366',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {t.ctaProjects}
              </Button>
            </Stack>
          </Grid>

          {/* Right Column: Floating Avatar with border-radius: 100% */}
          <Grid item xs={12} lg={5} order={{ xs: 1, lg: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* Subtle ambient back glow */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 220, sm: 280, md: 320 },
                  height: { xs: 220, sm: 280, md: 320 },
                  borderRadius: '100%',
                  background: 'radial-gradient(circle, rgba(0, 51, 102, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
                  pointerEvents: 'none',
                }}
              />

              <Box
                component="img"
                ref={avatarRef}
                src={profilePhoto}
                alt="Manuel Tomas Teves"
                className="hero-floating-avatar"
                sx={{
                  width: { xs: 200, sm: 250, md: 290 },
                  height: { xs: 200, sm: 250, md: 290 },
                  borderRadius: '100%', // requested: border-radius 100%
                  objectFit: 'cover',
                  border: '3px solid rgba(0, 51, 102, 0.1)',
                  boxShadow: '0 25px 60px -10px rgba(0, 51, 102, 0.18)',
                  display: 'block',
                  position: 'relative',
                  zIndex: 2,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Presentation;
