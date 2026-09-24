import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  IconButton,
  Stack,
} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import SwipeRoundedIcon from '@mui/icons-material/SwipeRounded';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslationContent } from '../../translations';
import './MyExperience.css';

gsap.registerPlugin(ScrollTrigger);

interface TrajectoryProps {
  t: TranslationContent['trajectory'];
}

const MyExperience: React.FC<TrajectoryProps> = ({ t }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = 390;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.trajectory-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.trajectory-timeline-card',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      id="trayectoria"
      ref={sectionRef}
      component="section"
      className="trajectory-horizontal-section"
      sx={{
        backgroundColor: '#ffffff', // Fondo blanco puro (Zebra)
        py: { xs: 12, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Header & Controls Row */}
        <Box
          className="trajectory-header"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            mb: { xs: 5, md: 7 },
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 700 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.6rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                mb: 1.5,
                color: '#0f172a',
              }}
            >
              {t.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.02rem', md: '1.14rem' },
                color: '#475569',
                lineHeight: 1.65,
              }}
            >
              {t.subtitle}
            </Typography>
          </Box>

          {/* Navigation controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Chip
              icon={<SwipeRoundedIcon sx={{ fontSize: 18, color: '#003366 !important' }} />}
              label={t.scrollHint}
              size="small"
              sx={{
                display: { xs: 'none', lg: 'inline-flex' },
                backgroundColor: 'rgba(0, 51, 102, 0.05)',
                color: '#003366',
                fontWeight: 600,
                fontSize: '0.78rem',
                border: '1px solid rgba(0, 51, 102, 0.12)',
              }}
            />

            <IconButton
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              sx={{
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#003366',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                '&:hover': {
                  backgroundColor: '#f1f5f9',
                  borderColor: '#003366',
                },
                '&.Mui-disabled': {
                  opacity: 0.35,
                },
              }}
              aria-label="Retroceder"
            >
              <ArrowBackRoundedIcon />
            </IconButton>

            <IconButton
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              sx={{
                backgroundColor: '#003366',
                border: '1px solid #003366',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(0, 51, 102, 0.25)',
                '&:hover': {
                  backgroundColor: '#002244',
                },
                '&.Mui-disabled': {
                  backgroundColor: '#cbd5e1',
                  borderColor: '#cbd5e1',
                  color: '#ffffff',
                  opacity: 0.5,
                },
              }}
              aria-label="Avanzar"
            >
              <ArrowForwardRoundedIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Horizontal Timeline Track */}
        <Box
          ref={trackRef}
          className="trajectory-scroll-track"
          sx={{
            display: 'flex',
            gap: 3.5,
            overflowX: 'auto',
            pb: 4,
            pt: 2,
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': {
              height: 8,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#cbd5e1',
              borderRadius: '999px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f5f9',
              borderRadius: '999px',
            },
          }}
        >
          {t.items.map((item, idx) => (
            <Card
              key={idx}
              elevation={0}
              className="trajectory-timeline-card"
              sx={{
                flex: '0 0 auto',
                width: { xs: 300, sm: 380, md: 410 },
                scrollSnapAlign: 'start',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '22px',
                p: { xs: 1, md: 1.5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0, 51, 102, 0.05)',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  borderColor: '#003366',
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 45px rgba(0, 51, 102, 0.12)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                {/* 1. Empresa (con número de hito a la derecha) */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.8, gap: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: '#0f172a',
                      fontSize: { xs: '1.35rem', md: '1.5rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    {item.company}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0 }}>
                    {String(idx + 1).padStart(2, '0')}
                  </Typography>
                </Box>

                {/* 2. Cargo */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#003366',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    mb: 1.6,
                  }}
                >
                  {item.role}
                </Typography>

                {/* 3. Duración */}
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={item.period}
                    size="small"
                    sx={{
                      backgroundColor: '#003366',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      borderRadius: '6px',
                      boxShadow: '0 2px 6px rgba(0, 51, 102, 0.2)',
                    }}
                  />
                </Box>

                {/* Ubicación / Modalidad */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#64748b', mb: 2 }}>
                  <PlaceRoundedIcon sx={{ fontSize: 16 }} />
                  <Typography variant="caption" sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                    {item.location}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#475569',
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>

              {/* Links if available */}
              {item.links && item.links.length > 0 && (
                <Box sx={{ px: { xs: 3, md: 3.5 }, pb: { xs: 3, md: 3.5 }, pt: 0 }}>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {item.links.map((link, lIdx) => (
                      <Button
                        key={lIdx}
                        variant="outlined"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        endIcon={<NorthEastRoundedIcon sx={{ fontSize: 14 }} />}
                        sx={{
                          borderColor: '#cbd5e1',
                          color: '#003366',
                          fontWeight: 600,
                          fontSize: '0.82rem',
                          borderRadius: '8px',
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: '#003366',
                            backgroundColor: 'rgba(0, 51, 102, 0.06)',
                          },
                        }}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Stack>
                </Box>
              )}
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MyExperience;
