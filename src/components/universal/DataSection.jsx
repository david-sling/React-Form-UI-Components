import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme=>({
    root:{
        display: 'flex',
        padding: 40
    },
    head:{
        flex:1,
    },
    body:{
        flex: 2,
    },
    title:{
        fontSize: 18,
        margin: '20px 0'
    },
    description:{
        fontSize: 18,
        color: '#858D95',
        maxWidth:400,
    }
}))

export default function DataSection({title, description, children}) {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <div className={classes.head} >
                <h2 className={classes.title} >{title}</h2>
                <p className={classes.description} >{description}</p>
            </div>
            <div className={classes.body} >
                {children}
            </div>
        </div>
    )
}
