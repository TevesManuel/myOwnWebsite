import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { TranslationContent } from '../../translations';
import './Footer.css';

interface FooterProps {
  t: TranslationContent['footer'];
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      className="executive-footer"
      sx={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        py: { xs: 6, md: 8 },
        color: '#0f172a',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Brand & Subline */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                }}
              >
                MT
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#003366', lineHeight: 1 }}>
                Manuel Tomas Teves
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#003366', fontStyle: 'italic', fontWeight: 500 }}>
              {t.subline}
            </Typography>
          </Box>

          {/* Social Icons */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <IconButton
              href="https://www.instagram.com/teves_manu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              sx={{
                color: '#475569',
                backgroundColor: 'rgba(0, 51, 102, 0.04)',
                border: '1px solid #e2e8f0',
                '&:hover': {
                  color: '#c13584',
                  backgroundColor: 'rgba(193, 53, 132, 0.1)',
                  borderColor: '#c13584',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 20 }} />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/tevesmanuel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{
                color: '#475569',
                backgroundColor: 'rgba(0, 51, 102, 0.04)',
                border: '1px solid #e2e8f0',
                '&:hover': {
                  color: '#0a66c2',
                  backgroundColor: 'rgba(10, 102, 194, 0.1)',
                  borderColor: '#0a66c2',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 20 }} />
            </IconButton>

            <IconButton
              href="https://github.com/TevesManuel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{
                color: '#475569',
                backgroundColor: 'rgba(0, 51, 102, 0.04)',
                border: '1px solid #e2e8f0',
                '&:hover': {
                  color: '#0f172a',
                  backgroundColor: 'rgba(15, 23, 42, 0.1)',
                  borderColor: '#0f172a',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: 20 }} />
            </IconButton>

            <IconButton
              href="https://www.youtube.com/@teves_tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              sx={{
                color: '#475569',
                backgroundColor: 'rgba(0, 51, 102, 0.04)',
                border: '1px solid #e2e8f0',
                '&:hover': {
                  color: '#ef4444',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderColor: '#ef4444',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <YouTubeIcon sx={{ fontSize: 20 }} />
            </IconButton>

            <IconButton
              href="mailto:contacto@tvs.ar"
              aria-label="Email"
              sx={{
                color: '#475569',
                backgroundColor: 'rgba(0, 51, 102, 0.04)',
                border: '1px solid #e2e8f0',
                '&:hover': {
                  color: '#003366',
                  backgroundColor: 'rgba(0, 51, 102, 0.1)',
                  borderColor: '#003366',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <EmailRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>
        </Box>

        <Divider sx={{ my: 3, borderColor: '#f1f5f9' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
            {t.copyright}
          </Typography>

          <Button
            onClick={scrollToTop}
            endIcon={<ArrowUpwardRoundedIcon sx={{ fontSize: 16 }} />}
            sx={{
              color: '#003366',
              fontWeight: 600,
              fontSize: '0.85rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(0, 51, 102, 0.05)',
              },
            }}
          >
            {t.backToTop}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;