import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Head from 'next/head'

const theme = createTheme({ palette: { mode: 'light' } })

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>XOrithm — Server Status</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}