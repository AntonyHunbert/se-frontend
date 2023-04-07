import logo from './logo.svg';
import './App.css';
import LoginPage from './Commponents/Login/LoginPage/LoginPage';
import SignupPage from './Commponents/Login/SignupPage/SignupPage';
import MainPage from './Commponents/MainPage/MainPage';
import { useRoutes } from 'react-router-dom';
import routes from './routes'
import ChatPage from './Commponents/Chat/ChatPage';
import { OrderCard } from './Commponents/MainPage/OrderCard';

function App() {
  const RouteTable = useRoutes(routes)
  return (
    // <>
    //   {RouteTable}
    // </>
    // <LoginPage />
    // <SignupPage/>
    <MainPage/>
    // <ChatPage/>
    

  );
}

export default App;
