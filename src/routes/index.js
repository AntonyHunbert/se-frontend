import { Navigate } from 'react-router-dom'
import MainPage from '../Commponents/MainPage/MainPage'
import LoginPage from '../Commponents/Login/LoginPage/LoginPage'
import SignupPage from '../Commponents/Login/SignupPage/SignupPage'
import FindPwdPage from '../Commponents/Login/FindPwdPage/FindPwdPage'
export default [
    {
        path: '/',
        element: <Navigate to='/login'></Navigate>
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>,
    },
    {
        path: '/mainpage',
        element: <MainPage></MainPage>,
    },
    {
        path: '/register',
        element: <SignupPage></SignupPage>,
    },
    {
        path: '/findPwd',
        element: <FindPwdPage></FindPwdPage>,
    }
]