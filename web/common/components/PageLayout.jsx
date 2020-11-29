/*
*  页面布局组件
*/

import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, ConfigProvider } from 'antd'
// 这玩意能够帮你翻译成中文
import zhCN from 'antd/lib/locale-provider/zh_CN'
const { SubMenu, Item: MenuItem } = Menu
import Router from './Router'

import './PageLayout.less'

export default class PageLayout extends Component {

    render() {
        const { routers = [], menus = [] } = this.props
        const selectKey = _.get(menus, '0.key', '1')
        const openKey = _.get(menus, '0.sub.0.key', 'sub1')
        return (
            <ConfigProvider locale={zhCN}>
                <aside className="menu-left">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[selectKey]}
                        defaultOpenKeys={[openKey]}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {
                            _.map(menus, item => {
                                return (
                                    <SubMenu key={item.key} title={item.title} icon={item.icon} >
                                        {
                                            _.map(item.sub, sub => {
                                                return (
                                                    <MenuItem key={sub.key} icon={sub.icon || null}>
                                                        <Link to={sub.link}>{sub.title}</Link>
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </aside>
                <aside className="content-right">
                    <div className="container">
                        <Router
                            routers={routers} />
                    </div>
                </aside>
            </ConfigProvider>
        )
    }
}
