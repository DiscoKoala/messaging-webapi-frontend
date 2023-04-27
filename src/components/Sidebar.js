import React from 'react';
import './Sidebar.css';
// import DonutLargeIcon from '@mui/icons-material/DonutLarge';
// import ChatIcon from '@mui/icons-material/Chat';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import IconButton from '@mui/material/IconButton';
import { Form, Button }from 'react-bootstrap';
// import Avatar from '@mui/material/Avatar';
// import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';
import { useStateValue } from './StateProvider';

const Sidebar = ({ messages }) => {
  const [{ user }, dispatch] = useStateValue();
  return (
        <div className="sidebar">
            <div className="sidebar_header">
                <img src={user?.photoURL} class="rounded-circle" alt="Avatar"/>
                <div className="sidebar_headerRight">
                    <Button>
                        <i class="bi bi-archive"></i>
                    </Button>
                    <Button>
                        <i class="bi bi-chat-square-text"></i>
                    </Button>
                    <Button>
                        <i class="bi bi-three-dots-vertical"></i>
                    </Button>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <i class="bi bi-three-dots-vertical"></i>
                    <Form.Control className="me-auto" placeholder="Type a message" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat messages={messages}/>
            </div>
        </div>
  );
};
export default Sidebar;
