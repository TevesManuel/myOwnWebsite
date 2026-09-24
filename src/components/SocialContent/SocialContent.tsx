import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslationContent } from '../../translations';
import './SocialContent.css';

interface PlatformStyle {
  background: string;
  hoverBackground: string;
  borderColor: string;
  shadowColor: string;
}

const getPlatformStyle = (id: string): PlatformStyle => {
  // Instagram: unified color for all Instagram chips
  if (id.includes('ig')) {
    return {
      background: 'linear-gradient(135deg, #e1306c 0%, #c13584 50%, #833ab4 100%)',
      hoverBackground: 'linear-gradient(135deg, #ff387a 0%, #d43b92 50%, #9844cf 100%)',
      borderColor: 'rgba(255, 255, 255, 0.65)',
      shadowColor: 'rgba(225, 48, 108, 0.55)',
    };
  }
  // LinkedIn: unified official LinkedIn blue for all LinkedIn chips
  if (id.includes('linkedin')) {
    return {
      background: '#0a66c2',
      hoverBackground: '#0077b5',
      borderColor: 'rgba(255, 255, 255, 0.65)',
      shadowColor: 'rgba(10, 102, 194, 0.6)',
    };
  }
  // YouTube: official YouTube red
  if (id.includes('youtube')) {
    return {
      background: '#ff0000',
      hoverBackground: '#e60000',
      borderColor: 'rgba(255, 255, 255, 0.65)',
      shadowColor: 'rgba(255, 0, 0, 0.6)',
    };
  }
  // GitHub: official GitHub dark
  if (id.includes('github')) {
    return {
      background: '#181717',
      hoverBackground: '#24292f',
      borderColor: 'rgba(255, 255, 255, 0.55)',
      shadowColor: 'rgba(0, 0, 0, 0.65)',
    };
  }
  return {
    background: 'rgba(255, 255, 255, 0.2)',
    hoverBackground: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
  };
};

gsap.registerPlugin(ScrollTrigger);

interface SocialProps {
  t: TranslationContent['socialContent'];
}

const getPlatformIcon = (id: string) => {
  if (id.includes('ig')) {
    return <InstagramIcon sx={{ fontSize: 24 }} />;
  }
  if (id.includes('youtube')) {
    return <YouTubeIcon sx={{ fontSize: 24 }} />;
  }
  if (id.includes('linkedin')) {
    return <LinkedInIcon sx={{ fontSize: 24 }} />;
  }
  return <GitHubIcon sx={{ fontSize: 24 }} />;
};

const SocialContent: React.FC<SocialProps> = ({ t }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);

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
        headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      ).fromTo(
        hubRef.current?.children || [],
        { opacity: 0, y: 25, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
        '-=0.45'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      id="redes-sociales"
      ref={sectionRef}
      component="section"
      className="instagram-gradient-section"
      sx={{
        background: 'linear-gradient(135deg, #405DE6 0%, #5851DB 22%, #833AB4 45%, #C13584 68%, #E1306C 85%, #FD1D1D 100%)', // Degradé Instagram
        color: '#ffffff',
        py: { xs: 12, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background depth lighting */}
      <Box
        sx={{
          position: 'absolute',
          top: '-25%',
          right: '8%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 218, 117, 0.3) 0%, rgba(225, 48, 108, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box ref={headerRef} sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.4rem', md: '3.8rem' },
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
            }}
          >
            {t.subtitle}
          </Typography>
        </Box>

        {/* Interactive Social Bar: Each platform chip has its distinct brand color */}
        <Box
          ref={hubRef}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 2, md: 2.5 },
            maxWidth: 1100,
            mx: 'auto',
          }}
        >
          {t.channels.map((ch) => {
            const pStyle = getPlatformStyle(ch.id);

            return (
              <Button
                key={ch.id}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-hub-pill"
                startIcon={
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      mr: 0.5,
                    }}
                  >
                    {getPlatformIcon(ch.id)}
                  </Box>
                }
                endIcon={
                  <NorthEastRoundedIcon
                    sx={{
                      fontSize: 18,
                      color: 'rgba(255, 255, 255, 0.9)',
                      transition: 'transform 0.25s ease',
                    }}
                  />
                }
                sx={{
                  background: pStyle.background,
                  border: `1px solid ${pStyle.borderColor}`,
                  borderRadius: '999px',
                  px: { xs: 2.6, md: 3.2 },
                  py: { xs: 1.2, md: 1.5 },
                  color: '#ffffff',
                  textTransform: 'none',
                  boxShadow: `0 8px 24px ${pStyle.shadowColor}`,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    background: pStyle.hoverBackground,
                    borderColor: '#ffffff',
                    transform: 'translateY(-5px) scale(1.02)',
                    boxShadow: `0 16px 36px ${pStyle.shadowColor}`,
                  },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography
                      variant="body1"
                      className="social-pill-platform"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.96rem',
                        lineHeight: 1.2,
                        color: '#ffffff',
                      }}
                    >
                      {ch.platform}
                    </Typography>
                    <Typography
                      variant="caption"
                      className="social-pill-handle"
                      sx={{
                        fontSize: '0.8rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                      }}
                    >
                      {ch.handle}
                    </Typography>
                  </Box>
                </Stack>
              </Button>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default SocialContent;
