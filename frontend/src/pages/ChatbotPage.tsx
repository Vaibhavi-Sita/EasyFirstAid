import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
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
  CircularProgress,
  useTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ChatbotPageProps {
  mode: 'kid' | 'elderly';
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const KidMessage = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: '70%',
  borderRadius: '20px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  '&.bot': {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
  '& p': {
    margin: 0,
    whiteSpace: 'pre-wrap',
  },
  '& strong': {
    fontWeight: 600,
  },
}));

const ElderlyMessage = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: '70%',
  borderRadius: '12px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.mode === 'dark' ? '#ffffff40' : '#00000040'}`,
  transition: 'all 0.2s ease-in-out',
  '&.bot': {
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff10' : '#00000010',
    color: theme.palette.text.primary,
  },
  '& p': {
    margin: 0,
    whiteSpace: 'pre-wrap',
  },
  '& strong': {
    fontWeight: 600,
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
    borderRadius: '12px',
    fontSize: '1.2rem',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.mode === 'dark' ? '#ffffff40' : '#00000040'}`,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      borderColor: theme.palette.mode === 'dark' ? '#ffffff60' : '#00000060',
    },
    '&.Mui-focused': {
      borderColor: theme.palette.mode === 'dark' ? '#ffffff80' : '#00000080',
    },
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
    letterSpacing: '0.3px',
    fontWeight: 500,
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: 32,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
  },
}));

const ChatbotPage = ({ mode }: ChatbotPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { topic } = location.state || { topic: 'General' };
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState(`${Date.now()}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const MessageComponent = mode === 'kid' ? KidMessage : ElderlyMessage;
  const InputComponent = mode === 'kid' ? KidInput : ElderlyInput;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      text: input,
      sender: 'user',
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          mode: mode === 'kid' ? 'kids' : 'elderly',
          topic
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      setMessages(prev => [
        ...prev,
        {
          text: data.response,
          sender: 'bot',
        },
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          text: 'Sorry, I had trouble processing your request. Please try again.',
          sender: 'bot',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
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
            position: 'fixed', 
            top: 32,
            left: 32,
            right: 32,
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 1000,
            '& .MuiIconButton-root': {
              color: 'text.primary',
              backgroundColor: 'background.paper',
              border: mode === 'elderly' ? '1px solid' : 'none',
              borderColor: 'divider',
              '&:hover': {
                backgroundColor: mode === 'elderly' 
                  ? (theme.palette.mode === 'dark' ? '#ffffff10' : '#00000010')
                  : (mode === 'kid' ? 'primary.light' : 'primary.dark'),
              },
            },
          }}>
            <NavigationButton
              onClick={() => navigate('/help', { state: { mode } })}
              size="large"
              sx={{
                borderRadius: mode === 'kid' ? '20px' : '12px',
                padding: 2,
              }}
            >
              <ArrowBackIcon fontSize="large" />
            </NavigationButton>
            <NavigationButton
              onClick={() => navigate('/')}
              size="large"
              sx={{
                borderRadius: mode === 'kid' ? '20px' : '12px',
                padding: 2,
              }}
            >
              <HomeIcon fontSize="large" />
            </NavigationButton>
          </Box>

          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{
              mt: 12,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', sm: '3rem' },
              letterSpacing: '0.5px',
            }}
          >
            First Aid Assistant
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{
              fontWeight: 600,
              fontSize: '1.3rem',
              letterSpacing: '0.3px',
              mb: 4,
            }}
          >
            {mode === 'kid' ? '👶 Kid Mode' : '👵 Elderly Mode'} - {topic}
          </Typography>

          <Paper
            elevation={mode === 'kid' ? 3 : 0}
            sx={{
              width: '100%',
              height: '60vh',
              overflow: 'auto',
              mb: 2,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: mode === 'kid' ? '20px' : '12px',
              backgroundColor: 'background.paper',
              border: mode === 'elderly' ? '1px solid' : 'none',
              borderColor: 'divider',
            }}
          >
            <List>
              {messages.map((message, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    mb: 2,
                  }}
                >
                  <MessageComponent
                    className={message.sender === 'bot' ? 'bot' : ''}
                  >
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <Typography
                            component="p"
                            sx={{
                              fontSize: '1.2rem',
                              fontWeight: 500,
                              letterSpacing: '0.3px',
                              lineHeight: 1.5,
                            }}
                          >
                            {children}
                          </Typography>
                        ),
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  </MessageComponent>
                </Box>
              ))}
              {isLoading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                  <CircularProgress 
                    sx={{ 
                      color: mode === 'elderly' 
                        ? (theme.palette.mode === 'dark' ? '#ffffff40' : '#00000040')
                        : 'primary.main'
                    }} 
                  />
                </Box>
              )}
              <div ref={messagesEndRef} />
            </List>
          </Paper>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: 2,
              alignItems: 'center',
            }}
          >
            <InputComponent
              fullWidth
              multiline
              maxRows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Ask about ${topic}...`}
              disabled={isLoading}
            />
            <IconButton
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              sx={{
                backgroundColor: mode === 'elderly'
                  ? (theme.palette.mode === 'dark' ? '#ffffff20' : '#00000010')
                  : 'primary.main',
                color: mode === 'elderly' ? 'text.primary' : 'white',
                borderRadius: mode === 'kid' ? '20px' : '12px',
                width: 56,
                height: 56,
                border: mode === 'elderly' ? '1px solid' : 'none',
                borderColor: 'divider',
                '&:hover': {
                  backgroundColor: mode === 'elderly'
                    ? (theme.palette.mode === 'dark' ? '#ffffff30' : '#00000020')
                    : 'primary.dark',
                },
                '&.Mui-disabled': {
                  backgroundColor: 'action.disabledBackground',
                  color: 'action.disabled',
                },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ChatbotPage; 