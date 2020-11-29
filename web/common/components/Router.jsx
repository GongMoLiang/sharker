/*
*  路由渲染组件
*/
import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

export default class Router extends Component {
    render() {
        const { routers, children } = this.props
        return (
            <Switch>
                {
                    _.map(routers, (item, index) => (
                        <Route
                            key={index}
                            path={item.path}
                            exact={item.exact}
                            component={item.component}
                        ></Route>
                    ))
                }
                {
                    children || null
                }
                {/* <Redirect to="/student/list"></Redirect> */}
            </Switch>
        )
    }
}
