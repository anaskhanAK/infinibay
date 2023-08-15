import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Card, CardContent, Grid, Typography} from '@mui/material';
import List from '@mui/material/List';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


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
                <Box sx={{ p: 0 }}>
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

export default function ExternalLinksCard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card>
            <CardContent>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="External Links (Optional)" {...a11yProps(0)} />
                            <Tab label="FAQ" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>

                        <List>
                            <ListItemButton sx={{ color: "blue", m: 0 }}>
                                <Grid container>
                                    <Grid item xs={1}>
                                        <CircleIcon sx={{ fontSize: '10px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ fontSize: '15px', letterSpacing: '0' }}>
                                            <b>Download Windows 11 - Microsoft</b>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton aria-label="delete" size="small">
                                            <ArrowOutwardIcon fontSize="inherit" />
                                        </IconButton>

                                    </Grid>
                                </Grid>
                            </ListItemButton>

                            <ListItemButton sx={{ color: "blue", m: 0 }}>
                                <Grid container>
                                    <Grid item xs={1}>
                                        <CircleIcon sx={{ fontSize: '10px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ fontSize: '15px', letterSpacing: '0' }}>
                                            <b>Download Windows 11 - Microsoft</b>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton aria-label="delete" size="small">
                                            <ArrowOutwardIcon fontSize="inherit" />
                                        </IconButton>

                                    </Grid>
                                </Grid>
                            </ListItemButton>

                            <ListItemButton sx={{ color: "blue", m: 0 }}>
                                <Grid container>
                                    <Grid item xs={1}>
                                        <CircleIcon sx={{ fontSize: '10px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ fontSize: '15px', letterSpacing: '0' }}>
                                            <b>Download Windows 11 - Microsoft</b>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton aria-label="delete" size="small">
                                            <ArrowOutwardIcon fontSize="inherit" />
                                        </IconButton>

                                    </Grid>
                                </Grid>
                            </ListItemButton>

                            <ListItemButton sx={{ color: "blue", m: 0 }}>
                                <Grid container>
                                    <Grid item xs={1}>
                                        <CircleIcon sx={{ fontSize: '10px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ fontSize: '15px', letterSpacing: '0' }}>
                                            <b>Download Windows 11 - Microsoft</b>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton aria-label="delete" size="small">
                                            <ArrowOutwardIcon fontSize="inherit" />
                                        </IconButton>

                                    </Grid>
                                </Grid>
                            </ListItemButton>

                        </List>

                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                    <List>
                            <ListItemButton sx={{ color: "blue", m: 0 }}>
                                <Grid container>
                                    <Grid item xs={1}>
                                        <CircleIcon sx={{ fontSize: '10px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ fontSize: '15px', letterSpacing: '0' }}>
                                            <b>Download Windows 11 - Microsoft</b>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton aria-label="delete" size="small">
                                            <ArrowOutwardIcon fontSize="inherit" />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </ListItemButton>

                            <ListItemButton sx={{ color: "blue", m: 0 }}>
                                <Grid container>
                                    <Grid item xs={1}>
                                        <CircleIcon sx={{ fontSize: '10px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ fontSize: '15px', letterSpacing: '0' }}>
                                            <b>Download Custom Scripts</b>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton aria-label="delete" size="small">
                                            <ArrowOutwardIcon fontSize="inherit" />
                                        </IconButton>

                                    </Grid>
                                </Grid>
                            </ListItemButton>

                            <ListItemButton sx={{ color: "blue", m: 0 }}>
                                <Grid container>
                                    <Grid item xs={1}>
                                        <CircleIcon sx={{ fontSize: '10px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ fontSize: '15px', letterSpacing: '0' }}>
                                            <b>Download Windows 11 - Microsoft</b>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton aria-label="delete" size="small">
                                            <ArrowOutwardIcon fontSize="inherit" />
                                        </IconButton>

                                    </Grid>
                                </Grid>
                            </ListItemButton>

                            <ListItemButton sx={{ color: "blue", m: 0 }}>
                                <Grid container>
                                    <Grid item xs={1}>
                                        <CircleIcon sx={{ fontSize: '10px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ fontSize: '15px', letterSpacing: '0' }}>
                                            <b>Download Windows 11 - Microsoft</b>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton aria-label="delete" size="small">
                                            <ArrowOutwardIcon fontSize="inherit" />
                                        </IconButton>

                                    </Grid>
                                </Grid>
                            </ListItemButton>

                        </List>
                    </CustomTabPanel>
                </Box>
            </CardContent>
        </Card >
    );
}