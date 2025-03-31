import React, { useState } from 'react';

const ChatWindow = ({ productName, sellerName, closeChat }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    setMessages([...messages, { sender: 'You', text: message }]);
    setMessage('');
    

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: sellerName, text: 'I’ll check that for you!' },
      ]);
    }, 1000);
  };

  return (
    <div className="chat-window">
      <button onClick={closeChat} style={{ margin: '10px', padding: '10px', backgroundColor: '#ff5722', color: 'white', borderRadius: '5px' }}>Close Chat</button>
      <h2>Chat with {sellerName} about {productName}</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'You' ? 'message-you' : 'message-seller'}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        rows="3"
        style={{ width: '100%', padding: '10px', marginTop: '10px', borderRadius: '5px' }}
      />
      <button onClick={handleSendMessage} style={{ marginTop: '10px' }}>Send Message</button>
    </div>
  );
};

export default ChatWindow;
