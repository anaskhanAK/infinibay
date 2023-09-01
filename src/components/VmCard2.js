import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { styled } from '@mui/material/styles';
import DeleteModal from './DeleteModal';
import VmDetailsModal from './VmDetailsModal';



const ToggleRed = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));

const ToggleBlue = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#3366c0',
    '&:hover': {
        backgroundColor: '#3366c0',
    },
}));



export default function VmCard2() {
    const wwwww = '24%'
    const www = '100%'
    const ww = 160
    const ml = '1%'
    const mr = "0%"

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>

                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml }}>
                    <CardContent>
                        <img
                            src='Vmi1.png'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}
                        />
                        <Typography gutterBottom variant="h6" component="div">
                            Virtual Machine Name
                        </Typography>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>

                            <ToggleBlue variant='contained' size='small' startIcon={<PlayArrowIcon fontSize='small' />} sx={{ fontSize: '11px', height: '30px' }}>
                                Start
                            </ToggleBlue>

                            <VmDetailsModal />
                            <DeleteModal />

                        </Stack>
                    </CardContent>
                </Card>


                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml }}>
                    <CardContent>
                        <img
                            src='Vmi2.png'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}

                        />
                        <Typography gutterBottom variant="h6" component="div">
                            Virtual Machine Name
                        </Typography>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>

                            <ToggleBlue variant='contained' size='small' startIcon={<PlayArrowIcon fontSize='small' />} sx={{ fontSize: '11px', height: '30px' }}>
                                Start
                            </ToggleBlue>

                            <VmDetailsModal />
                            <DeleteModal />

                        </Stack>
                    </CardContent>
                </Card>


                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml }}>
                    <CardContent>
                        <img
                            src='Vmi3.png'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}

                        />
                        <Typography gutterBottom variant="h6" component="div">
                            Virtual Machine Name
                        </Typography>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>

                            <ToggleRed variant='contained' size='small' startIcon={<StopIcon fontSize='small' />} sx={{ fontSize: '11px', height: '30px' }}>
                                Stop
                            </ToggleRed>

                            <VmDetailsModal />
                            <DeleteModal />

                        </Stack>
                    </CardContent>
                </Card>


                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml }}>
                    <CardContent>
                        <img
                            src='Vmi2.png'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}

                        />
                        <Typography gutterBottom variant="h6" component="div">
                            Virtual Machine Name
                        </Typography>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>

                            <ToggleBlue variant='contained' size='small' startIcon={<PlayArrowIcon fontSize='small' />} sx={{ fontSize: '11px', height: '30px' }}>
                                Start
                            </ToggleBlue>

                            <VmDetailsModal />
                            <DeleteModal />

                        </Stack>
                    </CardContent>
                </Card>

            </Box>
        </React.Fragment>
    );
}