import logo from './logo.svg';
import './App.css';
import LoginPage from './Login/LoginPage/LoginPage';
import SignupPage from './Login/SignupPage/SignupPage';
import MainPage from './MainPage/MainPage';
import { useRoutes } from 'react-router-dom';
import routes from './routes'

function App() {
  const RouteTable = useRoutes(routes)
  return (
    <>
      {RouteTable}
    </>
    // <LoginPage />
    // <SignupPage/>
    // <MainPage/>

  );
}

export default App;
