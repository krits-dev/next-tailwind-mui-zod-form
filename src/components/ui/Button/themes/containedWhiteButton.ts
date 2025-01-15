import { SxProps } from '@mui/material';

export const containedWhiteButton = {
  width: '100%',
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#101112',
  borderRadius: '0.75rem',
  textTransform: 'none',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  boxShadow: 'none',
  backgroundColor: '#ffffff',
  '&[type="button"]': {
    backgroundColor: '#ffffff',
  },
  '&[type="submit"]': {
    backgroundColor: '#ffffff',
  },
  '&:hover': {
    boxShadow: 'none',
  },
  '&:disabled': {
    backgroundColor: '#f4f4f4',
    color: '#a6abb0',
  },
} as SxProps;
