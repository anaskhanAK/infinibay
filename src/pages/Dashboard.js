import * as React from 'react';
import HelloCard from '../components/HelloCard';
import { Card, CardContent, Grid, Typography, Button, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import VideoCard from '../components/VideoCard';
import NotificationCard from '../components/NotificationCard';
import ExternalLinksCard from '../components/ExternalLinksCard';
import VmCard2 from '../components/VmCard2';


const CreateButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));

const Dashboard = () => {
    return (
        <React.Fragment>
            <HelloCard />
            <Card sx={{ marginBottom: '30px' }}>
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={10}>
                            <Typography variant='h5'>
                                <b>Actual Virtual Machine</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <CreateButton variant="contained" sx={{ width: '100%' }}>
                                Create a Vm Now
                            </CreateButton>
                        </Grid>
                    </Grid>
                    <VmCard2 />
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    <Button variant="outlined" size='large' color="inherit"> View All VMs</Button>
                </CardActions>
            </Card>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <VideoCard />
                </Grid>
                <Grid item xs={4}>
                    <NotificationCard />
                    <ExternalLinksCard />
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default Dashboard