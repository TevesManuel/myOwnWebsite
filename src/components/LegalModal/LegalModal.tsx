import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  Box,
  Typography,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import { LegalModalContent, LegalTabContent } from '../../translations';
import './LegalModal.css';

interface LegalModalProps {
  open: boolean;
  onClose: () => void;
  initialTab?: number;
  t: LegalModalContent;
}

const LegalModal: React.FC<LegalModalProps> = ({
  open,
  onClose,
  initialTab = 0,
  t,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState<number>(initialTab);

  useEffect(() => {
    if (open) {
      setActiveTab(initialTab);
    }
  }, [open, initialTab]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const getActiveTabContent = (): LegalTabContent => {
    switch (activeTab) {
      case 0:
        return t.privacy;
      case 1:
        return t.terms;
      case 2:
        return t.cookies;
      default:
        return t.privacy;
    }
  };

  const currentContent = getActiveTabContent();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      scroll="paper"
      aria-labelledby="legal-dialog-title"
      PaperProps={{
        sx: {
          borderRadius: { xs: '12px', sm: '20px' },
          backgroundColor: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(0, 51, 102, 0.25)',
          overflow: 'hidden',
          m: { xs: 1.5, sm: 3 },
          maxHeight: { xs: '90vh', sm: '85vh' },
        },
      }}
    >
      {/* Dialog Header */}
      <DialogTitle
        id="legal-dialog-title"
        sx={{
          p: { xs: 2.5, sm: 3 },
          pb: 1.5,
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: '10px',
                backgroundColor: 'rgba(0, 51, 102, 0.08)',
                color: '#003366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {activeTab === 0 && <ShieldOutlinedIcon sx={{ fontSize: 22 }} />}
              {activeTab === 1 && <GavelRoundedIcon sx={{ fontSize: 22 }} />}
              {activeTab === 2 && <CookieOutlinedIcon sx={{ fontSize: 22 }} />}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: '#003366',
                fontSize: { xs: '1.05rem', sm: '1.25rem' },
                lineHeight: 1.2,
              }}
            >
              {t.modalTitle}
            </Typography>
          </Box>
          <IconButton
            onClick={onClose}
            aria-label={t.closeBtn}
            sx={{
              color: '#64748b',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              '&:hover': {
                backgroundColor: '#f1f5f9',
                color: '#0f172a',
              },
            }}
          >
            <CloseRoundedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* Navigation Tabs */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant={isMobile ? 'scrollable' : 'standard'}
          scrollButtons={isMobile ? 'auto' : false}
          allowScrollButtonsMobile
          sx={{
            minHeight: 42,
            '& .MuiTabs-indicator': {
              backgroundColor: '#003366',
              height: 3,
              borderRadius: '3px 3px 0 0',
            },
          }}
        >
          <Tab
            label={t.tabs.privacy}
            icon={<ShieldOutlinedIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              textTransform: 'none',
              minHeight: 42,
              color: '#64748b',
              '&.Mui-selected': {
                color: '#003366',
              },
            }}
          />
          <Tab
            label={t.tabs.terms}
            icon={<GavelRoundedIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              textTransform: 'none',
              minHeight: 42,
              color: '#64748b',
              '&.Mui-selected': {
                color: '#003366',
              },
            }}
          />
          <Tab
            label={t.tabs.cookies}
            icon={<CookieOutlinedIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              textTransform: 'none',
              minHeight: 42,
              color: '#64748b',
              '&.Mui-selected': {
                color: '#003366',
              },
            }}
          />
        </Tabs>
      </DialogTitle>

      {/* Dialog Body Content */}
      <DialogContent
        dividers
        className="legal-modal-content"
        sx={{
          p: { xs: 2.5, sm: 4 },
          backgroundColor: '#ffffff',
          color: '#1e293b',
          lineHeight: 1.7,
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: '#003366',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              mb: 1,
            }}
          >
            {currentContent.title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'inline-block',
              fontWeight: 600,
              color: '#64748b',
              backgroundColor: '#f1f5f9',
              px: 1.5,
              py: 0.5,
              borderRadius: '6px',
            }}
          >
            {currentContent.lastUpdated}
          </Typography>
          {currentContent.intro && (
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: '#334155',
                fontSize: { xs: '0.92rem', sm: '1rem' },
                fontStyle: 'italic',
                backgroundColor: 'rgba(0, 51, 102, 0.03)',
                borderLeft: '3px solid #003366',
                pl: 2,
                py: 1,
                borderRadius: '0 8px 8px 0',
              }}
            >
              {currentContent.intro}
            </Typography>
          )}
        </Box>

        <Divider sx={{ my: 3, borderColor: '#e2e8f0' }} />

        {/* Policy Sections */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
          {currentContent.sections.map((sec, index) => (
            <Box
              key={index}
              sx={{
                p: { xs: 2, sm: 2.5 },
                borderRadius: '12px',
                backgroundColor: '#fafafc',
                border: '1px solid #eef2f6',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 800,
                  color: '#003366',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  mb: 1.25,
                }}
              >
                {sec.heading}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: '#334155',
                  fontSize: { xs: '0.88rem', sm: '0.95rem' },
                  lineHeight: 1.75,
                  whiteSpace: 'pre-line',
                }}
              >
                {sec.content}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Modal Bottom Reference */}
        <Box
          sx={{
            mt: 4,
            pt: 2.5,
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 500 }}>
            Teves Tech · tvs.ar · Manuel Tomas Teves
          </Typography>
          <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 500 }}>
            contacto@tvs.ar · La Plata, Argentina
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;
