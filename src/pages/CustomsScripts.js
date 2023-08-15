import * as React from 'react';
import { Card, CardContent, Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ScriptsCard from '../components/ScriptsCard';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';




const ToggleRed = styled(Button)(({ theme }) => ({
    float: 'right',
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CustomsScripts = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Card>
                <CardContent>
                    <Box sx={{ width: '100%' }}>
                        <ToggleRed variant='contained'>
                            Write Custom Script
                        </ToggleRed>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Windows VMs" {...a11yProps(0)} />
                                <Tab label="Linux VMs" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <ScriptsCard />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <ScriptsCard />
                        </CustomTabPanel>
                    </Box>
                </CardContent>
            </Card>

        </React.Fragment>

    )
}

export default CustomsScripts