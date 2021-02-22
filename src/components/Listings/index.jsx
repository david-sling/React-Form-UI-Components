import React, { useState } from 'react'
import PageHeader from '../universal/PageHeader'
import Tabs from '../universal/Tabs'
import Divider from '../universal/Divider'
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined'
import SaveIcon from '@material-ui/icons/SaveAlt'
import DoneIcon from '@material-ui/icons/Done'
import DataSection from '../universal/DataSection'
import { TextInput, MDinput, FileInput, InputTitle, RadioInput } from '../universal/Input'


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
                    {/* <div style={{display: 'flex', flexDirection: 'column'}} > */}
                        <TextInput title='Listing Name' required placeholder='Enter listing name' />
                        <MDinput title='Listing Description' required />
                        <FileInput title='Cover Photo' required description='Recommended thumbnail size 800x400 (px).' />
                    {/* </div> */}
                </DataSection>
                <Divider />

                <DataSection title='Choose Listing Type' description='Basic Details for your listing descriptions' >
                    <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gridGap: 20}}>
                    <RadioInput title='Time Bound Service' description='For 1x1 consultation' />
                    <RadioInput title='One Time Event' description='For hosting exclusive webinars/ special learning sessions' />
                    <RadioInput title='Project Based Service' description='For outcome driven service Ex: Website Redesign' />
                    <RadioInput title='Membership' description='For monthly teaching clsses (1x1/ many), once a week, twice a week etc class' />
                    </div>
                </DataSection>


                <PageHeader title='One Time Event' />
                <DataSection title='Choose Listing Type' description='Basic Details for your listing descriptions' >
                    <div style={{display:'flex'}} >
                        <div style={{flex:1}} >
                            <TextInput title='Price / entry' required Icon={()=><p>$</p>} placeholder='Price / entry' />
                        </div>
                        <div style={{width: 20}}/>
                        <div style={{flex:1}} >
                            <TextInput title='Maximum Participants' />
                        </div>
                    </div>
                    <div style={{display:'flex'}} >
                        <div style={{flex:1}} >
                            <TextInput title='Day of Event' required Icon={()=><CalendarIcon />} placeholder='September 24 2020' />
                        </div>
                        <div style={{width: 20}}/>
                        <div style={{flex:1}} >
                        </div>
                    </div>
                    <div style={{display:'flex'}} >
                        <div style={{flex:1}} >
                            <InputTitle title='Event Duration' />
                            <TextInput  placeholder='1 hr' />
                        </div>
                        <div style={{width: 20}}/>
                        <div style={{flex:1, display: 'flex'}} >
                            <TextInput title='EventTimings' />
                                <div style={{width: 40, display:'grid', placeItems: 'center'}}><p>to</p></div>
                            <TextInput title='Maximum Participants' />
                        </div>
                    </div>
                </DataSection>

                <DataSection title='Choose Delivery Mode' description='Basic Details for your listing descriptions' >
                    <InputTitle title='Service Delivery' required />
                    <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gridGap: 20}}>
                    <RadioInput description='Online' />
                    <div>
                    <RadioInput description='Offline' />
                    <TextInput description='Enter Address' multiline/>
                    </div>
                    </div>
                </DataSection>
            </div>
        </div>
    )
}
