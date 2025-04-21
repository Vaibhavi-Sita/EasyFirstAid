import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import ChatbotPage from './pages/ChatbotPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const kidTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF9800', // Orange
      light: '#FFB74D',
      dark: '#F57C00',
    },
    secondary: {
      main: '#FF5722', // Deep Orange
      light: '#FF8A65',
      dark: '#E64A19',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"More Sugar", "More Sugar", cursive',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
          padding: '12px 24px',
          fontSize: '1.1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
  },
});

const elderlyTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9C27B0', // Violet
      light: '#BA68C8',
      dark: '#7B1FA2',
    },
    secondary: {
      main: '#673AB7', // Deep Purple
      light: '#9575CD',
      dark: '#512DA8',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Arial", sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.2rem',
      lineHeight: 1.6,
      fontWeight: 500,
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '12px 24px',
          fontSize: '1.2rem',
          minWidth: '120px',
          fontWeight: 600,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
  },
});

const lightKidTheme = createTheme({
  ...kidTheme,
  palette: {
    ...kidTheme.palette,
    mode: 'light',
    background: {
      default: '#FFF3E0',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
  },
  components: {
    ...kidTheme.components,
    MuiButton: {
      styleOverrides: {
        root: {
          ...kidTheme.components?.MuiButton?.styleOverrides?.root,
          boxShadow: '0 4px 6px rgba(255, 152, 0, 0.2)',
          '&:hover': {
            boxShadow: '0 6px 8px rgba(255, 152, 0, 0.3)',
          },
        },
      },
    },
  },
});

const lightElderlyTheme = createTheme({
  ...elderlyTheme,
  palette: {
    ...elderlyTheme.palette,
    mode: 'light',
    background: {
      default: '#F3E5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
  },
  components: {
    ...elderlyTheme.components,
    MuiButton: {
      styleOverrides: {
        root: {
          ...elderlyTheme.components?.MuiButton?.styleOverrides?.root,
          boxShadow: '0 4px 6px rgba(156, 39, 176, 0.2)',
          '&:hover': {
            boxShadow: '0 6px 8px rgba(156, 39, 176, 0.3)',
          },
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState<'kid' | 'elderly'>('kid');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const currentTheme = isDarkMode
    ? (mode === 'kid' ? kidTheme : elderlyTheme)
    : (mode === 'kid' ? lightKidTheme : lightElderlyTheme);

  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            minWidth: '100vw',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'background.default',
            transition: 'background-color 0.3s ease',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <IconButton
              onClick={() => setIsDarkMode(!isDarkMode)}
              sx={{
                position: 'fixed',
                top: 32,
                right: 32,
                color: 'text.primary',
                backgroundColor: 'background.paper',
                zIndex: 1200,
                '&:hover': {
                  backgroundColor: mode === 'kid' ? 'primary.light' : 'primary.dark',
                },
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Routes>
              <Route path="/" element={<HomePage setMode={setMode} />} />
              <Route path="/help" element={<HelpPage mode={mode} />} />
              <Route path="/chatbot" element={<ChatbotPage mode={mode} />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
