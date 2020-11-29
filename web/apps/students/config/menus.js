/**
 * 学生管理配置文件
 *
 */

import React from 'react'
import {  LockOutlined, SettingOutlined } from '@ant-design/icons'


export default [
    {
        key: 'manage',
        title: '学生管理',
        icon: <SettingOutlined />,
        sub: [
            {
                key: 'list',
                title: '学生列表',
                link: '/student/manage/list',
            },
        ],
    },
    {
        key: 'personas',
        title: '成绩查询',
        icon: <LockOutlined />,
        sub: [
            {
                key: 'userinfo',
                title: '用户信息查询',
                link: '/student/personas/list',
            },
        ],
    },
]
