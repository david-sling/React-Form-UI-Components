import React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme=>({
    root:{
        alignSelf: 'stretch'
    },
    title:{
        letterSpacing: 1,
        fontSize: 18,
    },
    description:{
        color: '#858D95',
        margin: '0 0 10px 0'
    },
    input:{
        width: '100%',
        padding: 10,
        marginBottom: 20,
        border: '1px solid #CDD3D9',
        borderRadius: 2.4,
        resize: 'vertical'
    },
    fileInput:{
        height: 400,
        width: '100%',
        opacity: 0
    },
    icon:{
        height: 40,
        width: 40,
        background: '#CDD3D9',
        display: 'grid',
        placeItems: 'center',
    }
}))

const mdParser = new MarkdownIt(/* Markdown-it options */);


const Title = ({ title, required, description }) => {
    const classes = useStyles()
    return(<div>
    <h3 className={classes.title} >{title} {required&&<span style={{color:'red'}} >*</span>} </h3>
    <p className={classes.description} >{description}</p>
    </div>)
}

export const InputTitle = Title



export const TextInput = ({title, required, placeholder, Icon, description, multiline}) => {
    const classes = useStyles()
    
    return (
        <div className={classes.root} >
            <Title title={title} required={required} description={description} />
            <div style={{display:'flex'}}>
                {Icon&&<div className={classes.icon} ><Icon /></div>}
                {!multiline
                    ?<input className={classes.input} placeholder={placeholder} />
                    :<textarea className={classes.input} placeholder={placeholder} />
                }
            </div>
        </div>
    )
}

function handleEditorChange({html, text}) {    
    console.log('handleEditorChange', html, text)
  }

export const MDinput = ({title, required}) => {
    const classes = useStyles()
    return(
    <div className={classes.root} >
        <Title title={title} required={required} />
        <MdEditor
            style={{ height: "400px", marginBottom:10 }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
    </div>
      )
}

export const FileInput = ({title, required, description}) => {
    const classes = useStyles()
    return(
        <div>
            <Title title={title} required={required} description={description} />
            <div style={{ border: '2px dashed #CDD3D9', borderRadius: 5, position: 'relative' }} >
                <input className={classes.fileInput} type="file" multiple/>
                <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} >Drag your files here or click in this area.</p>
            </div>
        </div>
    )
}

export const RadioInput = ({title, required, description}) => {
    const classes = useStyles()

    return(
        <div style={{display:'flex'}} className={classes.input} >
            <input type='radio' style={{margin:15}} />
            <Title title={title} required={required} description={description}  />
        </div>
    )
}
