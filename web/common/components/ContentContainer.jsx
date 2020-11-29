/**
 *  内容组件
 */

import React, { Component } from 'react'
import './ContentContainer.less'


export default class ContentContainer extends Component {
    render() {
        const { children } = this.props
        return (
            <div className="content">
                { children}
            </div>
        )
    }
}
