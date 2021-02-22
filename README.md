# React.js UI Recreation
A form UI components library for React.js

Click to [here](https://react-form-ui-example.davidsling.in/) see live example

---

## Custom Components Created:

* `<DataSection>`
* `<Divider>`
* `<InputTitle>`
* `<TextInput>`
* `<MDinput>`
* `<FileInput>`
* `<RadioInput>`
* `<PageHeader>`
* `<Tabs>`

### `<DataSection>`

##### Import:
`import DataSection from './components/DataSection'`
##### Usage:
    
    <DataSection
        title='Title'
        description='Description'  
    >
        // The Right side content goes here
    </DataSection>
<br>

### `<Divider>`

##### Import:
`import Divider from './components/Divider'`
##### Usage:
    
    <Divider />
<br>

### Input.js

##### Import:
    import { InputTitle, TextInput, MDinput, FileInput, RadioInput } from './components/Input'
<br>

##### Usage:

##### `<InputTitle>`
    <InputTitle
        title='title'
        description='description'
    >
<br>

##### `<TextInput>`
    <TextInput
        title='title'
        description='description'
        placeholder='placeholder'
        Icon={()=><Icon />}
        multiline={true||false}
        required={true||false}
    >
<br>

##### `<MDinput>`
    <MDinput
        title='title'
        description='description'
    >
<br>

##### `<FileInput>`
    <FileInput
        title='title'
        description='description'
        required={true||false}
    >
<br>

##### `<RadioInput>`
    <RadioInput
        title='title'
        description='description'
        required={true||false}
    >
<br>

### `<PageHeader>`
##### Import:
`import PageHeader from './components/PageHeader'`
##### Usage:
    
    <PageHeader
        title='title'
        buttons={ [{
            name: 'Name',
            Icon: ()=> <Icon/>
            style= { 'primary' || 'secondary' }
            onClick={()=>{function()}}
        }] }
    >
<br>

### `<Tabs>`
##### Import:
`import Tabs from './components/Tabs'`
##### Usage:
    
    <Tabs
        title='title'
        tabs={ [{
            name: 'Name',
            state: 'state'
        }] }
        active={state}
        setActive={setState}
    >
<br>



---

## Example:
(This file is located at './components/Listings')

    import React, { useState } from 'react'

    import PageHeader from '../universal/PageHeader'
    import Tabs from '../universal/Tabs'
    import Divider from '../universal/Divider'
    import DataSection from '../universal/DataSection'
    import { TextInput, MDinput, FileInput, InputTitle, RadioInput } from '../universal/Input'

    import VisibilityIcon from '@material-ui/icons/VisibilityOutlined'
    import SaveIcon from '@material-ui/icons/SaveAlt'
    import DoneIcon from '@material-ui/icons/Done'


    import CalendarIcon from '@material-ui/icons/DateRange'

    export default function Listings() {

        const [ activeTab, setActiveTab ] = useState('listing')

        const tabs = [
            {name: 'Listing', state:'listing' },
            {name: 'Checkout', state:'checkout' },
            {name: 'Share', state:'share' },
        ]

        const headerButtons = [
            { name: 'Preview', Icon:()=><VisibilityIcon />, style: 'secondary', onClick:()=>{} },
            { name: 'Save', Icon:()=><SaveIcon />, style: 'secondary', onClick:()=>{} },
            { name: 'Publish', Icon:()=><DoneIcon />, style: 'primary', onClick:()=>{} },
        ]

        return (
            <div>
                <div>
                    <PageHeader title='Create New Listing' buttons={headerButtons} />
                    <Tabs tabs={tabs} active={activeTab} setActive={setActiveTab} />
                    <DataSection title='Basic Details' description='Add details about your listing to help customers understand the listings better.' >
                        <TextInput title='Listing Name' required placeholder='Enter listing name' />
                        <MDinput title='Listing Description' required />
                        <FileInput title='Cover Photo' required description='Recommended thumbnail size 800x400 (px).' />
                    </DataSection>
                    <Divider />
                </div>
            </div>
        )
    }

---
[My Portfolio](https://davidsling.in)