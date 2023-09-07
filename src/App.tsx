import { Globalstyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <Globalstyle />
    </ThemeProvider>
  )
}
