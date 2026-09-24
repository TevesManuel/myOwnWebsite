import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslationContent } from '../../translations';
import './ScheduleSection.css';

gsap.registerPlugin(ScrollTrigger);

interface ScheduleProps {
  t: TranslationContent['scheduleSection'];
}

const ScheduleSection: React.FC<ScheduleProps> = ({ t }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      id="agendar-reunion"
      ref={sectionRef}
      component="section"
      className="schedule-gradient-section"
      sx={{
        background: 'linear-gradient(135deg, #02162e 0%, #003366 50%, #0a4f8f 100%)', // Degradado premium azul
        color: '#ffffff',
        py: { xs: 12, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <Box
        sx={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(0, 51, 102, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(2, 22, 46, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Paper
          ref={cardRef}
          elevation={0}
          sx={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '28px',
            p: { xs: 4, sm: 6, md: 8 },
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.35)',
          }}
        >
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            {/* Left Column: Heading and Reasons (No badge!) */}
            <Grid item xs={12} lg={7}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  mb: 2,
                  color: '#ffffff',
                }}
              >
                {t.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.05rem', md: '1.18rem' },
                  color: 'rgba(255, 255, 255, 0.92)',
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 620,
                }}
              >
                {t.subtitle}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  color: '#7dd3fc',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontSize: '0.82rem',
                  mb: 2,
                }}
              >
                {t.reasonsTitle}
              </Typography>

              <Stack spacing={1.6}>
                {t.reasons.map((reason, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircleRoundedIcon sx={{ fontSize: 20, color: '#38bdf8', mt: '3px', flexShrink: 0 }} />
                    <Typography
                      variant="body2"
                      sx={{ color: '#e2e8f0', fontSize: '0.98rem', lineHeight: 1.5 }}
                    >
                      {reason}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Right Column: High Impact Action Card */}
            <Grid item xs={12} lg={5}>
              <Box
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  p: { xs: 4, md: 5 },
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 68,
                    height: 68,
                    borderRadius: '18px',
                    backgroundColor: 'rgba(0, 51, 102, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <CalendarMonthRoundedIcon sx={{ fontSize: 36, color: '#003366' }} />
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: '#0f172a',
                    fontSize: '1.45rem',
                    mb: 1.5,
                  }}
                >
                  meet.tvs.ar
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748b',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    mb: 3.5,
                  }}
                >
                  Selecciona la fecha y hora que mejor se adapte a tu agenda. La confirmación y el enlace de videollamada se generan al instante.
                </Typography>

                <Button
                  variant="contained"
                  href={t.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  size="large"
                  endIcon={<NorthEastRoundedIcon />}
                  sx={{
                    backgroundColor: '#003366',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '1.02rem',
                    py: 1.7,
                    borderRadius: '12px',
                    textTransform: 'none',
                    boxShadow: '0 6px 20px rgba(0, 51, 102, 0.3)',
                    '&:hover': {
                      backgroundColor: '#002244',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 25px rgba(0, 51, 102, 0.4)',
                    },
                  }}
                >
                  {t.ctaButton}
                </Button>

                <Box sx={{ mt: 2.5 }}>
                  <Button
                    href="mailto:contacto@tvs.ar"
                    startIcon={<EmailRoundedIcon />}
                    sx={{
                      color: '#475569',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        color: '#003366',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {t.secondaryEmail}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ScheduleSection;
