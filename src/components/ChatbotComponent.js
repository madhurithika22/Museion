// src/components/ChatbotComponent.js

import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatbot/config';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import './ChatbotComponent.css'; // Ensure you have the correct path to the CSS file

const ChatbotComponent = () => {
  return (
    <div className="chatbot-container">
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
};

export default ChatbotComponent;
