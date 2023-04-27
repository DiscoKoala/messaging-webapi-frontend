import './App.css';
import Sidebar from './components/Sidebar.js';
import Chat from './components/Chat.js';
import store from './stores/store'
import React, { useEffect, useState } from 'react';
import axios from './components/axios.js';
import Login from './components/Login.js';
import { Provider } from 'react-redux';
import { useStateValue } from './components/StateProvider.js';
import Pusher from 'pusher-js'

function App () {
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  // const [user, setUser] = useState(null)

  useEffect(() => {
    axios.get('/messages/sync').then(res => {
      setMessages(res.data);
    });
  }, []);
  useEffect(() => {
    const pusher = new Pusher('c7f9df435c12676138ae', {
      cluster: 'us2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  console.log(messages);

  return (
    <div className="App">
      <Provider store={store}>
      {!user
        ? <Login />
        : (
      <div className="App-body">
        <Sidebar messages={messages}/>
        <Chat messages={messages}/>
      </div>
          )}
      </Provider>
    </div>
  );
}
export default App;
