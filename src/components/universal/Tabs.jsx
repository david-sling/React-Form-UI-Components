import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme=>({
    root:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'stretch',
        margin: '0 40px'
    },
    tab:{
        flex: 1,
        padding: 10,
        border: '.5px solid black',
        background: '#F0F2F4',
    },
    activeTab:{
        background: '#2242A4',
        color: '#fff'
    }
}))

export default function Tabs({tabs, active, setActive}) {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            {tabs.map(tab=>(
                <div className={active==tab.state?classes.tab + " " + classes.activeTab:classes.tab } onClick={()=>setActive(tab.state)} >
                    <p style={{textAlign: 'center'}} >{tab.name}</p>
                </div>
            ))}
        </div>
    )
}
