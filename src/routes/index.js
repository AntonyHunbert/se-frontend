import { Navigate } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
import LoginPage from '../Login/LoginPage/LoginPage'
import SignupPage from '../Login/SignupPage/SignupPage'
import FindPwdPage from '../Login/FindPwdPage/FindPwdPage'
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