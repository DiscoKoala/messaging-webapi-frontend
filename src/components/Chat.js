
import React, { useEffect, useState } from 'react';
import { Form, Button }from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import axios from './axios';
import './Chat.css';
import { useStateValue } from './StateProvider.js';

const Chat = ({ messages }) => {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const [{ user }, dispatch] = useStateValue();

  const sendMessage = async (event) => {
    event.preventDefault()
    await axios.post('/messages/new', {
      message: input,
      name: user.displayName,
      timestamp: new Date().toUTCString(),
      received: true
    });
    setInput('');
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
        <div className="chat">
            <div className="chat_header">
                <img src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} class="rounded-circle" alt="Avatar" />
                <div className="chat_headerInfo">
                    <h3>Dev Help</h3>
                    <p>Last seen at {' '}{messages[messages.length - 1]?.timestamp}</p>
                </div>
                <div className="chat_headerRight">
                    <Button>
                        <i class="bi bi-search"></i>
                    </Button>
                    <Button>
                        <i class="bi bi-paperclip"></i>
                    </Button>
                    <Button>
                        <i class="bi bi-three-dots-vertical"></i>
                    </Button>
                </div>
            </div>
            <div className="chat_body">
                {messages.map(message => (
                    <p className={`chat_message ${message.name === user.displayName && 'chat_receiver'}`}>
                        <span className='chat_name'>{message.name}</span>
                            {message.message}
                        <span className='chat_timestamp'>
                            {message.timestamp}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat_footer">
                <i class="bi bi-emoji-laughing"></i>
                <Stack direction="horizontal" gap={3}></Stack>
                    <i class="bi bi-mic"></i>
                    <Form.Control className="me-auto" placeholder="Type a message" />
                        <input
                            value = {input}
                            onChange={event => setInput(event.target.value)}
                            type="text"
                        />
                        <Button onClick={sendMessage} type="submit">Send a message</Button>
                <Stack/>
            </div>
        </div>
  );
};
export default Chat;
