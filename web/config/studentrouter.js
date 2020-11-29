import StudentContainer from '../apps/students/App'
import ApprovalContainer from '../apps/approval/App'
import MaterialContainer from '../apps/material/App'

export default [
    {
        path: '/student/manage/list',
        exact: true,
        component: StudentContainer
    },
    {
        path: '/student/*',
        exact: true,
        component: StudentContainer
    },
    {
        path: '/approval/list',
        exact: true,
        component: ApprovalContainer
    },
    {
        path: '/material/list',
        exact: true,
        component: MaterialContainer
    }
]
