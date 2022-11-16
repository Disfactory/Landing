import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

//reset & setting basic styled component
import { ResetStyle, GlobalStyle } from '../styles/global-style'

//components
import Main from '../components/landing/main'

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
        <ResetStyle />
        <GlobalStyle />
        <Main />
    </ThemeProvider>
  )
}
