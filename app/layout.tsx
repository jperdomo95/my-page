import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import './globals.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#707070',
    },
    secondary: {
      main:'#E4E4E4'
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ffeb3b',
    },
    info: {
      main: ''
    },
    success: {
      main: ''
    },
    mode: PaletteMode,
    tonalOffset: PaletteTonalOffset,
    contrastThreshold: number,
    common: Partial<CommonColors>,
    grey: ColorPartial,
    text: Partial<TypeText>,
    divider: string,
    action: Partial<TypeAction>,
    background: Partial<TypeBackground>,
    
  },
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
