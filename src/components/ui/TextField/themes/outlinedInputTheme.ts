import { SxProps } from '@mui/material';

export const outlinedInputTheme = {
  width: '100%',
  // Label
  '& .MuiInputLabel-root': {
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    color: '#a6abb0',
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&.Mui-error': {
      color: '#ef4e57',
    },
    '@media (max-width: 768px)': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
  },
  // Label(focused)
  '& .MuiInputLabel-root.Mui-focused': {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    color: '#a6abb0',
    transform: 'translate(1rem, 0.375rem)',
    '&.Mui-error': {
      color: '#ef4e57',
    },
  },
  // Label(filled)
  '& .MuiInputLabel-root.MuiFormLabel-filled': {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    color: '#a6abb0',
    transform: 'translate(1rem, 0.375rem)',
    '&.Mui-error': {
      color: '#ef4e57',
    },
  },

  '& .MuiOutlinedInput-root': {
    // Input
    '& .MuiOutlinedInput-input': {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
      color: '#101112',
      padding: '1.625rem 1rem 0.375rem 1rem',
      height: '1.5rem',
      '@media (max-width: 768px)': {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        height: '1.25rem',
        padding: '1.4375rem 1rem 0.3125rem 1rem',
      },
    },
    // Border
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #e1e1e1',
      borderRadius: '0.5rem',
      marginTop: '0.3125rem',
      padding: 0,
      '& legend': {
        display: 'none',
      },
    },
    // Border(hovered)
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e1e1e1',
    },
    // Border(focused)
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #526ed3',
    },
    // Border(error)
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ef4e57',
    },
  },
  // Helper text
  '.MuiFormHelperText-root': {
    marginLeft: 0,
    '&.Mui-error': {
      color: '#ef4e57',
    },
  },
} as SxProps;
