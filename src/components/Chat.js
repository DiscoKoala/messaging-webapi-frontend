
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
// import { IconButton } from '@mui/material';
import Button from 'react-bootstrap/Button'
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
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
                <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3>Dev Help</h3>
                    <p>Last seen at {' '}{messages[messages.length - 1]?.timestamp}</p>
                </div>
                <div className="chat_headerRight">
                    <Button>
                        <SearchOutlined/>
                    </Button>
                    <Button>
                        <AttachFile/>
                    </Button>
                    <Button>
                        <MoreVert/>
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
                <InsertEmoticon/>
                <Stack direction="horizontal" gap={3}></Stack>
                    <MicIcon/> 
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
