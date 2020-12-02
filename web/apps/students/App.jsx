import React, { Component } from 'react'
import PageLayout from '../../common/components/PageLayout'
import routers from './config/router'
import { Provider } from 'react-redux'
import store from './store/index'
import menus from './config/menus'


export default class StudentList extends Component {
    render() {
        return (
            <Provider store={store}>
                <PageLayout
                    routers={routers}
                    menus={menus}
                />
            </Provider>
        )
    }
}
