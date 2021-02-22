import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsOutlined'

import Badge from '@material-ui/core/Badge';
import { Avatar } from '@material-ui/core';

import image from '../assets/uder-img.png'
import downArrow from '../assets/downarrow.svg'

const useStyles = makeStyles(theme=>({
    header:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 20
    },
    search:{
        display: 'flex',
        background: '#F0F2F4',
        padding: '5px 10px',
        borderRadius: 40,
        marginRight: 20
    },
    input:{
        background: 'none',
        border: 'none',
        padding: '0 5px'
    },
    user:{
        display: 'grid',
        marginLeft: 20,
        gridTemplateColumns: '1fr 1fr 1fr',
        placeItems: 'center'

    },
    avatar:{
        height: theme.spacing(4),
        width: theme.spacing(4),
    },
    p:{
        marginLeft: 10
    }
}))

export default function Header() {

    const classes = useStyles()


    const username = 'Sofia'
    return (
        <div className={classes.header} >
            <div className={classes.search} >
                <input className={classes.input} type="text"/>
                <SearchIcon color="action" />
            </div>
            <Badge badgeContent={9} color='secondary'>
                <NotificationIcon />
            </Badge>
            <div className={classes.user} >
                <Avatar className={classes.avatar} alt="Remy Sharp" src={image}  />
                <p className={classes.p} >{username}</p>
                <img src={downArrow} alt=""/>
            </div>
        </div>
    )
}

