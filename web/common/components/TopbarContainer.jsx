/**
 *  顶部组件
 */

import React, { Component } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { Link} from 'react-router-dom'
import './TopbarContainer.less'

export default class TopBarContainer extends Component {
    render() {
        const { title, children, backUrl } = this.props
        return (
            <div className="topbar">
                {
                    backUrl && <Link to={backUrl}><LeftOutlined className="iocn-back" /></Link>
                }
                <span className="topbar-title">{title}</span>
                { children}
            </div>
        )
    }
}
