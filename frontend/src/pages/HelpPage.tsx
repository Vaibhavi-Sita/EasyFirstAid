import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Container, IconButton, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';

interface HelpPageProps {
  mode: 'kid' | 'elderly';
}

const categories = [
  { emoji: '🩸', name: 'Bleeding and Wounds' },
  { emoji: '🔥', name: 'Burns and Scalds' },
  { emoji: '🤕', name: 'Head Injuries' },
  { emoji: '🦴', name: 'Fractures and Sprains' },
  { emoji: '😵', name: 'Fainting and Unconsciousness' },
  { emoji: '😮‍💨', name: 'Breathing Difficulties' },
  { emoji: '❤️‍🩹', name: 'Chest Pain and Heart Attack' },
  { emoji: '🧊', name: 'Heatstroke and Hypothermia' },
  { emoji: '🤢', name: 'Poisoning' },
  { emoji: '🐝', name: 'Insect Bites and Stings' },
  { emoji: '🤒', name: 'Fever and Illness' },
  { emoji: '⚡', name: 'Electrical Injuries' },
  { emoji: '🍽️', name: 'Choking' },
  { emoji: '🧠', name: 'Stroke' },
  { emoji: '🥴', name: 'Seizures' },
  { emoji: '🩹', name: 'Minor Injuries' },
  { emoji: '🩺', name: 'Allergic Reactions' },
  { emoji: '🌡️', name: 'Heat Exhaustion' },
  { emoji: '❄️', name: 'Frostbite' },
  { emoji: '🐍', name: 'Snake Bites' },
];

const KidIconButton = styled(IconButton)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '20px',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    transform: 'scale(1.05)',
    transition: 'transform 0.2s ease-in-out',
  },
  '& .emoji': {
    fontSize: '2.5rem',
    animation: 'pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

const ElderlyIconButton = styled(IconButton)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  '& .emoji': {
    fontSize: '2.5rem',
  },
}));

const KidGeneralButton = styled(Button)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: '20px',
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  fontSize: '1.5rem',
  fontWeight: 700,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'scale(1.02)',
    transition: 'transform 0.2s ease-in-out',
  },
  '& .emoji': {
    fontSize: '3rem',
    animation: 'bounce 1s infinite',
  },
  '@keyframes bounce': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const ElderlyGeneralButton = styled(Button)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: '8px',
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  fontSize: '1.5rem',
  fontWeight: 700,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  '& .emoji': {
    fontSize: '3rem',
  },
}));

const HelpPage = ({ mode }: HelpPageProps) => {
  const navigate = useNavigate();
  const IconButtonComponent = mode === 'kid' ? KidIconButton : ElderlyIconButton;
  const GeneralButton = mode === 'kid' ? KidGeneralButton : ElderlyGeneralButton;

  const handleCategoryClick = (category: string) => {
    navigate('/chatbot', { state: { mode, topic: category } });
  };

  const handleGeneralChat = () => {
    navigate('/chatbot', { state: { mode, topic: 'General' } });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: 4,
          }}
        >
          <Box sx={{ 
            position: 'absolute', 
            top: 16, 
            left: 16,
            '& .MuiIconButton-root': {
              color: 'text.primary',
              backgroundColor: 'background.paper',
              '&:hover': {
                backgroundColor: mode === 'kid' ? 'primary.light' : 'primary.dark',
              },
            },
          }}>
            <IconButton
              onClick={() => navigate('/')}
              size="large"
              sx={{
                borderRadius: mode === 'kid' ? '20px' : '8px',
                padding: 2,
              }}
            >
              <HomeIcon fontSize="large" />
            </IconButton>
          </Box>

          <Typography
            variant="h4"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              fontWeight: mode === 'elderly' ? 700 : 600,
            }}
          >
            First Aid Assistant
          </Typography>

          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 2 }}>
            <GeneralButton
              onClick={handleGeneralChat}
              variant="contained"
            >
              <span className="emoji">💬</span>
              General Chat
            </GeneralButton>
          </Box>

          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{
              fontWeight: mode === 'elderly' ? 600 : 500,
              fontSize: mode === 'elderly' ? '1.5rem' : '1.3rem',
            }}
          >
            Or choose a specific topic:
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 3,
              width: '100%',
              maxWidth: '800px',
            }}
          >
            {categories.map((category) => (
              <Box key={category.name} sx={{ width: '100%' }}>
                <IconButtonComponent
                  onClick={() => handleCategoryClick(category.name)}
                  aria-label={category.name}
                >
                  <span className="emoji">{category.emoji}</span>
                  <Typography
                    variant="body1"
                    align="center"
                    sx={{
                      fontSize: mode === 'kid' ? '1.1rem' : '1.2rem',
                      fontWeight: mode === 'elderly' ? 600 : 400,
                      lineHeight: mode === 'elderly' ? 1.6 : 1.4,
                    }}
                  >
                    {category.name}
                  </Typography>
                </IconButtonComponent>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HelpPage; 