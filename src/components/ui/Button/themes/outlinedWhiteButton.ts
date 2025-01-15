import { SxProps } from '@mui/material';

export const outlinedWhiteButton = {
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  color: '#101112',
  border: '1px solid #a6abb0',
  borderRadius: '0.5rem',
  textTransform: 'none',
  padding: '0.5rem 0.75rem',
  letterSpacing: '-0.1px',
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&:active': {
    top: '1px',
  },
} as SxProps;
