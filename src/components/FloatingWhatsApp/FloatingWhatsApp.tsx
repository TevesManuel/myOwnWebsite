import React from 'react';
import { Box, Tooltip, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Language } from '../../translations';
import './FloatingWhatsApp.css';

interface FloatingWhatsAppProps {
  lang: Language;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const tooltipText =
    lang === 'es'
      ? 'Escríbeme por WhatsApp (+54 11 23262861)'
      : 'Chat on WhatsApp (+54 11 23262861)';

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 28 },
        right: { xs: 20, md: 28 },
        zIndex: 1200,
      }}
    >
      <Tooltip title={tooltipText} placement="left" arrow>
        <IconButton
          href="https://wa.me/5491123262861"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label={tooltipText}
        >
          <Box className="floating-whatsapp-pulse" />
          <WhatsAppIcon sx={{ fontSize: { xs: 30, md: 34 }, color: '#ffffff' }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default FloatingWhatsApp;
