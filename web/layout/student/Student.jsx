import React, { Component, Fragment } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import Router from '../../common/components/Router'
import './Student.less'

import { menuList } from '../../config/menu'
import studentsRouters from '../../config/studentrouter'

export default class StudentForm extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '50px' }}
                    >
                        {_.map(menuList, item => (
                            <Menu.Item key={item.key}>
                                <Link to={item.path}>{item.title}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </header>
                <main>
                    <Router routers={studentsRouters} />
                </main>
            </Fragment>
        )
    }
}
