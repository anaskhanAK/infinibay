import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';


const HelloCard = () => {
    return (
        <React.Fragment>
            <Box sx={{
                flexGrow: 1,
                backgroundColor: '#fbecc8',
                width: '100%',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <Grid container spacing={0}>
                    <Grid item xs={2} sx={{ alignItems: 'center' }}>
                        <img src='figmaS.png' alt='smiley' width={250} style={{ margin: '15px' }} />
                    </Grid>
                    <Grid item xs={7} sx={{ alignItems: 'center', padding: '50px' }}>
                        <Typography variant="h4" sx={{ flexGrow: 2, color: '#F57000' }}>
                            <b>Hello, anaskhan!</b>
                        </Typography>
                        <Typography variant="p" sx={{ flexGrow: 2, color: 'black' }}>
                            Welcome to your dashboard. Amet minim mollit non deserunt ullamco est sit aliqua. Lorem ispum dolor sit amet.
                        </Typography>
                    </Grid>

                    <Grid item xs={3} style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                        <img src="bigwave.png" alt="smiley" width={300} style={{ alignSelf: 'flex-end' }} />
                        <img src="smallwave.png" alt="smiley" width={200} height={70} style={{ alignSelf: 'flex-end', marginBottom:'-110px'}} />
                        {/* <img src="bigwave.png" alt="smiley" width={300} style={{ margin: '0 10px' }} />
                        <img src="bigwave.png" alt="smiley" width={300} style={{ margin: '0 10px' }} /> */}

                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>

    )
}

export default HelloCard