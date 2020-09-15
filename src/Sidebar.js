import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLarge from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVert from '@material-ui/icons/MoreVert'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLarge></DonutLarge>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
