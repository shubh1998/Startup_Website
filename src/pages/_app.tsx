import '../assets/styles/globals.css'

import { ThemeProvider } from '@mui/material'
import { theme } from '@theme/theme'
import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
