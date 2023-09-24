import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Profile from '../profile/Profile';
import RelatedInformation from '../relatedInformation/RelatedInformation';


function NewStaffMember() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='box' style={{ width: '800px', margin: "0 auto", height: 2000 }}>
            <div className='container'>

                <div className=' bg-white col-md-12 ' >
                    <div className='row '>

                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                {/* <Carousel> */}
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Profile" value="1" />
                                        <Tab label="Related Information " value="2" />

                                    </TabList>
                                </Box>
                                {/* </Carousel> */}
                                <TabPanel value="1">
                                    <Profile />

                                </TabPanel>
                                <TabPanel value="2">
                                    <RelatedInformation />

                                </TabPanel>


                            </TabContext>
                        </Box>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewStaffMember