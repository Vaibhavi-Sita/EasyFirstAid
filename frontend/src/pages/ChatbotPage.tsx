import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ChatbotPageProps {
  mode: 'kid' | 'elderly';
}

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const KidMessage = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: '70%',
  borderRadius: '20px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&.bot': {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
}));

const ElderlyMessage = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: '70%',
  borderRadius: '8px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&.bot': {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.primary,
  },
}));

const KidInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    fontSize: '1.1rem',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ElderlyInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    fontSize: '1.2rem',
    backgroundColor: theme.palette.background.paper,
    fontWeight: 500,
  },
}));

const ChatbotPage = ({ mode }: ChatbotPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { topic } = location.state || { topic: 'General' };
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const MessageComponent = mode === 'kid' ? KidMessage : ElderlyMessage;
  const InputComponent = mode === 'kid' ? KidInput : ElderlyInput;

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        text: `I understand you're asking about ${topic}. Could you please describe the symptoms in more detail?`,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
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
            display: 'flex',
            gap: 2,
            '& .MuiIconButton-root': {
              color: 'text.primary',
              backgroundColor: 'background.paper',
              '&:hover': {
                backgroundColor: mode === 'kid' ? 'primary.light' : 'primary.dark',
              },
            },
          }}>
            <IconButton
              onClick={() => navigate('/help', { state: { mode } })}
              size="large"
              sx={{
                borderRadius: mode === 'kid' ? '20px' : '8px',
                padding: 2,
              }}
            >
              <ArrowBackIcon fontSize="large" />
            </IconButton>
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
              mt: 10,
              fontWeight: mode === 'elderly' ? 700 : 600,
            }}
          >
            First Aid Assistant
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            paragraph
            sx={{
              fontWeight: mode === 'elderly' ? 600 : 400,
              fontSize: mode === 'elderly' ? '1.3rem' : '1.1rem',
            }}
          >
            {mode === 'kid' ? '👶 Kid Mode' : '👵 Elderly Mode'} - {topic}
          </Typography>

          <Paper
            elevation={3}
            sx={{
              width: '100%',
              height: '60vh',
              overflow: 'auto',
              mb: 2,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: mode === 'kid' ? '20px' : '8px',
              backgroundColor: 'background.paper',
            }}
          >
            <List>
              {messages.map((message, index) => (
                <Box key={index}>
                  <ListItem
                    sx={{
                      justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <MessageComponent className={message.sender === 'bot' ? 'bot' : ''}>
                      <ListItemText
                        primary={message.text}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontSize: mode === 'kid' ? '1.1rem' : '1.2rem',
                            lineHeight: mode === 'elderly' ? 1.6 : 1.4,
                            fontWeight: mode === 'elderly' ? 500 : 400,
                          },
                        }}
                      />
                    </MessageComponent>
                  </ListItem>
                  {index < messages.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>

          <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
            <InputComponent
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSend}
              endIcon={<SendIcon />}
              sx={{
                borderRadius: mode === 'kid' ? '20px' : '8px',
                fontSize: mode === 'kid' ? '1.1rem' : '1.2rem',
                fontWeight: mode === 'elderly' ? 600 : 400,
                minWidth: '100px',
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ChatbotPage; 