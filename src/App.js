import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (

    <div className="App">
     <ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID={process.env.REACT_APP_PROJECT_ID_KEY}
      renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play}
		/>
    </div>

  );
}

export default App;
