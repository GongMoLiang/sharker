import StudentListContainer from '../container/List'
import GrageListContainer from '../container/Grage'

export default [
    {
        path: '/student/manage/list',
        exact: true,
        component: StudentListContainer
    },
    {
        path: '/student/personas/list',
        exact: true,
        component: GrageListContainer
    }
]
