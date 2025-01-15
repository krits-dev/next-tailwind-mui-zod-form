import { SxProps } from '@mui/material';

export const containedBlueButton = {
  width: '100%',
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#ffffff',
  borderRadius: '0.5rem',
  textTransform: 'none',
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
  boxShadow: 'none',
  backgroundColor: '#526ed3',
  '&[type="button"]': {
    backgroundColor: '#526ed3',
  },
  '&[type="submit"]': {
    backgroundColor: '#526ed3',
  },
  '&:hover': {
    boxShadow: 'none',
  },
  '&:disabled': {
    backgroundColor: '#a1b1e7',
    color: '#ffffff',
  },
  '&:active': {
    top: '1px',
  },
} as SxProps;
