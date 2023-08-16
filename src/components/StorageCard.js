import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import StorageIcon from '@mui/icons-material/Storage';
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: ''
}));


const StorageCard = () => {
    const wwwww = '24%'
    const ml = '1%'
    const mr = "0%"
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml, marginBottom: '10px', background: 'linear-gradient(42deg, #F2FAFF 0%, #E3F3FE 100%)', borderRadius: '8px' }}>
                    <CardContent>
                        <Stack direction='row'>
                            <Box sx={{ width: '35px', height: '35px', backgroundColor: 'white', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <StorageIcon sx={{ color: '#207CBC' }} />
                            </Box>
                            <Box sx={{ height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
                                <b>
                                    Storage Name
                                </b>
                            </Box>
                        </Stack>
                        <Typography variant='body2' sx={{ marginTop: '20px' }}>
                            <b>
                                New Disk 001
                            </b>
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={80} sx={{ marginTop: '10px' }} />
                        <Typography variant='body2' sx={{ marginTop: '10px' }}>
                            20 GB Free of 120 GB
                        </Typography>
                        <Divider sx={{ marginTop: '20px', marginBottom:'10px' }} />
                        <Button sx={{ width: '100%', display: 'flex', color: 'black' }} >
                            <VisibilityIcon sx={{width:'10%', marginRight:'5px'}}/>
                            <Typography variant='body2'sx={{width:'80%', display:'flex'}}> View </Typography>
                            <ChevronRightIcon  />
                        </Button>
                    </CardContent>
                </Card>

                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml, marginBottom: '10px', background: 'linear-gradient(42deg, #F2FAFF 0%, #E3F3FE 100%)', borderRadius: '8px' }}>
                    <CardContent>
                        <Stack direction='row'>
                            <Box sx={{ width: '35px', height: '35px', backgroundColor: 'white', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <StorageIcon sx={{ color: '#207CBC' }} />
                            </Box>
                            <Box sx={{ height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
                                <b>
                                    Storage Name
                                </b>
                            </Box>
                        </Stack>
                        <Typography variant='body2' sx={{ marginTop: '20px' }}>
                            <b>
                                New Disk 001
                            </b>
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={80} sx={{ marginTop: '10px' }} />
                        <Typography variant='body2' sx={{ marginTop: '10px' }}>
                            20 GB Free of 120 GB
                        </Typography>
                        <Divider sx={{ marginTop: '20px', marginBottom:'10px' }} />
                        <Button sx={{ width: '100%', display: 'flex', color: 'black' }} >
                            <VisibilityIcon sx={{width:'10%', marginRight:'5px'}}/>
                            <Typography variant='body2'sx={{width:'80%', display:'flex'}}> View </Typography>
                            <ChevronRightIcon  />
                        </Button>
                    </CardContent>
                </Card>

                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml, marginBottom: '10px', background: 'linear-gradient(42deg, #F2FAFF 0%, #E3F3FE 100%)', borderRadius: '8px' }}>
                    <CardContent>
                        <Stack direction='row'>
                            <Box sx={{ width: '35px', height: '35px', backgroundColor: 'white', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <StorageIcon sx={{ color: '#207CBC' }} />
                            </Box>
                            <Box sx={{ height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
                                <b>
                                    Storage Name
                                </b>
                            </Box>
                        </Stack>
                        <Typography variant='body2' sx={{ marginTop: '20px' }}>
                            <b>
                                New Disk 001
                            </b>
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={80} sx={{ marginTop: '10px' }} />
                        <Typography variant='body2' sx={{ marginTop: '10px' }}>
                            20 GB Free of 120 GB
                        </Typography>
                        <Divider sx={{ marginTop: '20px', marginBottom:'10px' }} />
                        <Button sx={{ width: '100%', display: 'flex', color: 'black' }} >
                            <VisibilityIcon sx={{width:'10%', marginRight:'5px'}}/>
                            <Typography variant='body2'sx={{width:'80%', display:'flex'}}> View </Typography>
                            <ChevronRightIcon  />
                        </Button>
                    </CardContent>
                </Card>

                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml, marginBottom: '10px', background: 'linear-gradient(42deg, #F2FAFF 0%, #E3F3FE 100%)', borderRadius: '8px' }}>
                    <CardContent>
                        <Stack direction='row'>
                            <Box sx={{ width: '35px', height: '35px', backgroundColor: 'white', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <StorageIcon sx={{ color: '#207CBC' }} />
                            </Box>
                            <Box sx={{ height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
                                <b>
                                    Storage Name
                                </b>
                            </Box>
                        </Stack>
                        <Typography variant='body2' sx={{ marginTop: '20px' }}>
                            <b>
                                New Disk 001
                            </b>
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={80} sx={{ marginTop: '10px' }} />
                        <Typography variant='body2' sx={{ marginTop: '10px' }}>
                            20 GB Free of 120 GB
                        </Typography>
                        <Divider sx={{ marginTop: '20px', marginBottom:'10px' }} />
                        <Button sx={{ width: '100%', display: 'flex', color: 'black' }} >
                            <VisibilityIcon sx={{width:'10%', marginRight:'5px'}}/>
                            <Typography variant='body2'sx={{width:'80%', display:'flex'}}> View </Typography>
                            <ChevronRightIcon  />
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </React.Fragment>
    )
}

export default StorageCard