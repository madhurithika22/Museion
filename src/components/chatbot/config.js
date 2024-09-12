import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'MuseumBot',
  initialMessages: [createChatBotMessage(`Hello! Let's book your tickets. I will ask you a few questions.`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#8b4513",
    },
    chatButton: {
      backgroundColor: "#8b4513",
    },
  },
};

export default config;