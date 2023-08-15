import * as React from 'react';
import Divider from '@mui/material/Divider'
import List from '@mui/material/List';
import CircleIcon from '@mui/icons-material/Circle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import { Card, CardContent, Grid, Typography, Button, CardHeader } from '@mui/material';


export default function NotificationCard() {


    return (

        <Card sx={{ p: 1 ,mb:3}}>
            <CardHeader
                title={<b>Notifications</b>}
                action={<Button href="#text-buttons">see more</Button>}
            />
            <Divider variant='middle' />
            <CardContent>
                <List>
                    <ListItemButton sx={{color:"red"}}>
                        <Grid container>
                            <Grid item xs={1}>
                                <CircleIcon sx={{ fontSize: '10px' }} />
                            </Grid>
                            <Grid item xs={10}>
                                <div style={{ fontSize: '13px', letterSpacing: '0' }}>
                                    <b>You are getting out of space. Free some space...</b>
                                </div>
                                <Typography variant="caption" display="block">
                                    5 min ago
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <ChevronRightIcon sx={{color: 'black'}}/>
                            </Grid>
                        </Grid>
                    </ListItemButton>

                    <ListItemButton>
                        <Grid container>
                            <Grid item xs={1}>
                                <CircleIcon sx={{ fontSize: '10px' }} />
                            </Grid>
                            <Grid item xs={10}>
                                <div style={{ fontSize: '13px', letterSpacing: '0' }}>
                                    <b>Infinibay Mail Gateway 7.3
                                        released...</b>
                                </div>
                                <Typography variant="caption" display="block">
                                    10 min ago
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <ChevronRightIcon />
                            </Grid>
                        </Grid>
                    </ListItemButton>

                    <ListItemButton>
                        <Grid container>
                            <Grid item xs={1}>
                                <CircleIcon sx={{ fontSize: '10px' }} />
                            </Grid>
                            <Grid item xs={10}>
                                <div style={{ fontSize: '13px', letterSpacing: '0' }}>
                                    <b>Infinibay Backup Server 2.4 available...</b>
                                </div>
                                <Typography variant="caption" display="block">
                                    10 min ago
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <ChevronRightIcon />
                            </Grid>
                        </Grid>
                    </ListItemButton>

                    <ListItemButton>
                        <Grid container>
                            <Grid item xs={1}>
                                <CircleIcon sx={{ fontSize: '10px' }} />
                            </Grid>
                            <Grid item xs={10}>
                                <div style={{ fontSize: '13px', letterSpacing: '0' }}>
                                    <b>Integrated Linux VMs...</b>
                                </div>
                                <Typography variant="caption" display="block">
                                    10 min ago
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <ChevronRightIcon />
                            </Grid>
                        </Grid>
                    </ListItemButton>
                </List>

            </CardContent>
        </Card>
    );
}