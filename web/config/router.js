import StudentContainer from '../layout/student/Student'
import LoginContainer from '../layout/login/Login'
import RegisterContainer from '../layout/register/Register'


export default [
    {
        path: '/student/*',
        exact: true,
        component: StudentContainer
    },
    {
        path: '/approval/*',
        exact: true,
        component: StudentContainer
    },
    {
        path: '/material/*',
        exact: true,
        component: StudentContainer
    },
    {
        path: '/login',
        exact: true,
        component: LoginContainer
    },
    {
        path: '/register',
        exact: true,
        component: RegisterContainer
    }
]
