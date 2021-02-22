import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme=>({
    root:{
        padding: '20px 40px',
        border: '1px solid #CDD3D9',
        margin: '40px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    h1:{
        fontSize: 20
    },
    buttons:{
        display: 'flex'
    },
    button:{
        padding: '5px 10px',
        display: 'flex',
        alignItems: 'center',
        border: '0.963048px solid #CDD3D9',
        borderRadius: 4,
        marginLeft: 20,
    },
    p:{
        marginLeft: 10
    },
    secondary:{
        background: 'white',
    },
    primary:{
        background: '#2242A4',
        color: '#fff'
    },
}))

export default function PageHeader({title, buttons}) {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            
            <h1 className={classes.h1} >{title}</h1>
            {buttons&&<div className={classes.buttons} >
                {buttons.map( Button => (
                    <button onClick={Button.onClick} className={classes.button + " " + classes[Button.style] } > <Button.Icon /> <p className={classes.p}>{Button.name}</p></button>
                ))}
            </div>}
        </div>
    )
}
