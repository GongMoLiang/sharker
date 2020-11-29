import React, { Component } from 'react'
import { BrowserRouter, Redirect, HashRouter } from 'react-router-dom'
import Router from './common/components/Router'
import routers from './config/router'
import './assets/global.css'
import './assets/normal.css'

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Router
                    routers={routers}
                >
                    <Redirect to="/student/manage/list"></Redirect>
                </Router>
            </HashRouter>
        )
    }
}


