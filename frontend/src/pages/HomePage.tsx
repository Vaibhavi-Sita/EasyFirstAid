import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  setMode: (mode: 'kid' | 'elderly') => void;
}

const ModeButton = styled(Button)(({ theme }) => ({
  width: '200px',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderRadius: '20px',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '& .emoji': {
    fontSize: '4rem',
  },
}));

const HomePage = ({ setMode }: HomePageProps) => {
  const navigate = useNavigate();

  const handleModeSelect = (mode: 'kid' | 'elderly') => {
    setMode(mode);
    navigate('/help', { state: { mode } });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        p: { xs: 2, sm: 4 },
        background: 'linear-gradient(135deg, #FF9B9B 0%, #FF5733 100%)',
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        align="center"
        sx={{
          color: 'white',
          fontWeight: 700,
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          mb: 4,
        }}
      >
        First Aid Assistant
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{
          color: 'white',
          mb: 6,
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        }}
      >
        Choose your mode:
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 3, sm: 6 },
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ModeButton
          onClick={() => handleModeSelect('kid')}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'white',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            },
          }}
        >
          <span className="emoji">🧒🏻</span>
          <Typography variant="h6" component="span">
            Kid Mode
          </Typography>
        </ModeButton>
        <ModeButton
          onClick={() => handleModeSelect('elderly')}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'white',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            },
          }}
        >
          <span className="emoji">👵🏼</span>
          <Typography variant="h6" component="span">
            Elderly Mode
          </Typography>
        </ModeButton>
      </Box>
    </Box>
  );
};

export default HomePage; 