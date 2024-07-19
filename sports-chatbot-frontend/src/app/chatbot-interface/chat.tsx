"use client";

import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: string;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    // Placeholder for sending message to backend and receiving response
    const chatbotResponse = { id: Date.now() + 1, text: 'Chatbot response here', sender: 'chatbot' };
    setMessages((prevMessages) => [...prevMessages, chatbotResponse]);

    setInput(''); // Clear input after sending
  };

  return (
    <div className="chat-container p-4 max-w-md mx-auto border rounded-lg shadow">
      <div className="messages-area space-y-2 overflow-y-auto h-96 lg:w-96">
        {messages.map((message) => (
          <div key={message.id} className={`message flex ${message.sender === 'user' ? 'justify-end mr-4' : 'justify-start'}`}>
            <div className={`rounded px-4 py-2 ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="input-area mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Type your message here..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
      </div>
    </div>
  );
}