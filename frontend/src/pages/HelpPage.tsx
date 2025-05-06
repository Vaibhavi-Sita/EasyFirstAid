import { useLocation, useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  IconButton,
  Typography,
  Button,
  useTheme,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import HomeIcon from '@mui/icons-material/Home'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ChatIcon from '@mui/icons-material/Chat'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import PsychologyIcon from '@mui/icons-material/Psychology'
import EmergencyIcon from '@mui/icons-material/Emergency'
import AirIcon from '@mui/icons-material/Air'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import SickIcon from '@mui/icons-material/Sick'
import BugReportIcon from '@mui/icons-material/BugReport'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt'
import FitbitIcon from '@mui/icons-material/Fitbit'
import BandageIcon from '@mui/icons-material/Healing'
import WarningIcon from '@mui/icons-material/Warning'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'
import PetsIcon from '@mui/icons-material/Pets'

interface HelpPageProps {
  mode: 'kid' | 'elderly'
}

const categories = [
  {
    icon: <LocalHospitalIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🩸',
    name: 'Bleeding and Wounds',
  },
  {
    icon: <LocalFireDepartmentIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🔥',
    name: 'Burns and Scalds',
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🤕',
    name: 'Head Injuries',
  },
  {
    icon: <EmergencyIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🦴',
    name: 'Fractures and Sprains',
  },
  {
    icon: <FitbitIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '😵',
    name: 'Fainting and Unconsciousness',
  },
  {
    icon: <AirIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '😮‍💨',
    name: 'Breathing Difficulties',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '❤️‍🩹',
    name: 'Chest Pain and Heart Attack',
  },
  {
    icon: <AcUnitIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🧊',
    name: 'Heatstroke and Hypothermia',
  },
  {
    icon: <SickIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🤢',
    name: 'Poisoning',
  },
  {
    icon: <BugReportIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🐝',
    name: 'Insect Bites and Stings',
  },
  {
    icon: <ThermostatIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🤒',
    name: 'Fever and Illness',
  },
  {
    icon: <ElectricBoltIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '⚡',
    name: 'Electrical Injuries',
  },
  {
    icon: <RestaurantIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🍽️',
    name: 'Choking',
  },
  {
    icon: <PsychologyAltIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🧠',
    name: 'Stroke',
  },
  {
    icon: <FitbitIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🥴',
    name: 'Seizures',
  },
  {
    icon: <BandageIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🩹',
    name: 'Minor Injuries',
  },
  {
    icon: <WarningIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🩺',
    name: 'Allergic Reactions',
  },
  {
    icon: <WbSunnyIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🌡️',
    name: 'Heat Exhaustion',
  },
  {
    icon: <AcUnitOutlinedIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '❄️',
    name: 'Frostbite',
  },
  {
    icon: <PetsIcon sx={{ fontSize: '2.5rem' }} />,
    emoji: '🐍',
    name: 'Snake Bites',
  },
]

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
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    transform: 'scale(1.05)',
    transition: 'transform 0.2s ease-in-out',
  },
  '& .emoji': {
    fontSize: '2.5rem',
    animation: 'pulse 2s infinite',
  },
}))

const ElderlyIconButton = styled(IconButton)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  border: `1px solid ${
    theme.palette.mode === 'dark' ? '#ffffff40' : '#00000040'
  }`,
  borderRadius: '12px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff10' : '#00000010',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
}))

const KidGeneralButton = styled(Button)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: '20px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  fontSize: '1.5rem',
  fontWeight: 700,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
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
}))

const ElderlyGeneralButton = styled(Button)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  height: '80px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: '12px',
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff20' : '#00000010',
  color: theme.palette.text.primary,
  fontSize: '1.4rem',
  fontWeight: 600,
  letterSpacing: '0.5px',
  border: `1px solid ${
    theme.palette.mode === 'dark' ? '#ffffff40' : '#00000040'
  }`,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff30' : '#00000020',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
}))

const NavigationButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  top: 32,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  fontSize: '1.1rem',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
  },
}))

const HelpPage = ({ mode }: HelpPageProps) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const IconButtonComponent = mode === 'kid' ? KidIconButton : ElderlyIconButton
  const GeneralButton = mode === 'kid' ? KidGeneralButton : ElderlyGeneralButton

  const handleCategoryClick = (category: string) => {
    navigate('/chatbot', {
      state: {
        mode,
        topic: category,
        initialMessage: `I need help with ${category.toLowerCase()}. What should I do?`,
      },
    })
  }

  const handleGeneralChat = () => {
    navigate('/chatbot', {
      state: {
        mode,
        topic: 'General',
        initialMessage: 'Hi, I need some first aid help. Can you assist me?',
      },
    })
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: { xs: 2, sm: 4 },
        backgroundColor: 'background.default',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 32,
          left: 32,
          right: 32,
          display: 'flex',
          justifyContent: 'space-between',
          zIndex: 1000,
        }}
      >
        <NavigationButton
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </NavigationButton>
        <NavigationButton
          onClick={() => navigate('/')}
          startIcon={<HomeIcon />}
        >
          Home
        </NavigationButton>
      </Box>

      <Typography
        variant='h1'
        component='h1'
        align='center'
        sx={{
          color: 'text.primary',
          fontWeight: 700,
          fontSize: { xs: '2.5rem', sm: '3rem' },
          mb: 6,
          mt: 12,
        }}
      >
        First Aid Categories
      </Typography>

      <Box sx={{ width: '100%', maxWidth: 800, mb: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <GeneralButton
            onClick={handleGeneralChat}
            sx={{
              background:
                mode === 'elderly'
                  ? 'none'
                  : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            }}
          >
            {mode === 'elderly' ? (
              <ChatIcon sx={{ fontSize: '2.5rem' }} />
            ) : (
              <span className='emoji'>💬</span>
            )}
            <Typography
              variant='h4'
              component='span'
              sx={{
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}
            >
              Quick Chat
            </Typography>
          </GeneralButton>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 3,
          }}
        >
          {categories.map((category) => (
            <IconButtonComponent
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              aria-label={category.name}
            >
              {mode === 'elderly' ? (
                category.icon
              ) : (
                <span className='emoji'>{category.emoji}</span>
              )}
              <Typography
                variant='h6'
                align='left'
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  letterSpacing: '0.3px',
                }}
              >
                {category.name}
              </Typography>
            </IconButtonComponent>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default HelpPage
