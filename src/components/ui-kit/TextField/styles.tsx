import { styled, TextField } from '@mui/material'

export const StyledTextField = styled(TextField)(({ theme, error }) => ({
  '& .MuiInputBase-root': {
    // backgroundColor: 'gray'
    borderColor: error ? 'red' : theme.palette.primary.main,
    borderWidth: '3px',
    borderRadius: 12,
  },
  '& .MuiInputBase-input': {
    // padding: 20
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      // border: 'none',
      borderColor: error ? 'red' : theme.palette.primary.main,
      borderWidth: '2px',
    },

    '&:hover fieldset': {
      borderColor: error ? 'red' : theme.palette.primary.main,
      borderWidth: '2px',
    },
    '&.Mui-focused fieldset': {
      borderColor: error ? 'red' : theme.palette.primary.main,
      borderWidth: '2px',
    },
  },
}))
