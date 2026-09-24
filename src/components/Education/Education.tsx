import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import { TranslationContent } from '../../translations';
import './Education.css';

interface EducationProps {
  t: TranslationContent['education'];
}

const getEducationIcon = (index: number) => {
  switch (index) {
    case 0:
      return <SchoolRoundedIcon sx={{ fontSize: 28, color: '#003366' }} />;
    case 1:
      return <TerminalRoundedIcon sx={{ fontSize: 28, color: '#003366' }} />;
    case 2:
      return <VerifiedRoundedIcon sx={{ fontSize: 28, color: '#003366' }} />;
    case 3:
      return <MemoryRoundedIcon sx={{ fontSize: 28, color: '#003366' }} />;
    case 4:
    default:
      return <EmojiEventsRoundedIcon sx={{ fontSize: 28, color: '#003366' }} />;
  }
};

const Education: React.FC<EducationProps> = ({ t }) => {
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
    checkScroll();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = 350;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      id="estudios"
      component="section"
      className="education-section"
      sx={{
        backgroundColor: '#f0f6fd', // Fondo celeste claro (Zebra)
        py: { xs: 8, md: 12 },
        position: 'relative',
        borderTop: '1px solid #d2e4f7',
        borderBottom: '1px solid #d2e4f7',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header with Horizontal Scroll Controls */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2.5,
            mb: 5,
          }}
        >
          <Box sx={{ maxWidth: 760 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                mb: 1,
                color: '#0f172a',
              }}
            >
              {t.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.12rem' },
                color: '#475569',
                lineHeight: 1.6,
              }}
            >
              {t.subtitle}
            </Typography>
          </Box>

          {/* Navigation Controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexShrink: 0 }}>
            <IconButton
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              sx={{
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#003366',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                '&:hover': {
                  backgroundColor: '#f8fafc',
                  borderColor: '#003366',
                },
                '&.Mui-disabled': {
                  opacity: 0.35,
                },
              }}
              aria-label="Retroceder estudios"
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
              aria-label="Avanzar estudios"
            >
              <ArrowForwardRoundedIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Content with Continuous Horizontal Scroll Track */}
        <Box
          ref={trackRef}
          className="education-scroll-track"
          sx={{
            display: 'flex',
            gap: 3.5,
            overflowX: 'auto',
            pt: 2,
            pb: 3,
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': {
              height: 8,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#cbd5e1',
              borderRadius: '999px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#e2e8f0',
              borderRadius: '999px',
            },
          }}
        >
          {t.items.map((item, idx) => (
            <Card
              key={idx}
              elevation={0}
              className="education-card-horizontal"
              sx={{
                flex: '0 0 auto',
                width: { xs: 280, sm: 340, md: 360 },
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                border: '1px solid #d2e4f7',
                borderRadius: '20px',
                p: { xs: 1, md: 1.5 },
                boxShadow: '0 8px 24px rgba(0, 51, 102, 0.04)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  borderColor: '#003366',
                  boxShadow: '0 20px 45px rgba(0, 51, 102, 0.12)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      backgroundColor: '#f0f6fd',
                      border: '1px solid #d2e4f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getEducationIcon(idx)}
                  </Box>

                  <Chip
                    label={item.periodOrBadge}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(0, 51, 102, 0.06)',
                      color: '#003366',
                      fontWeight: 700,
                      fontSize: '0.76rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(0, 51, 102, 0.12)',
                    }}
                  />
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: '#0f172a',
                    fontSize: { xs: '1.18rem', md: '1.25rem' },
                    mb: 0.8,
                    lineHeight: 1.3,
                  }}
                >
                  {item.institution}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#003366',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: '0.94rem',
                    mb: 2,
                  }}
                >
                  {item.degree}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#475569',
                    lineHeight: 1.65,
                    fontSize: '0.92rem',
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
