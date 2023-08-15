import * as React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircularProgress from '@mui/material/CircularProgress';
import CircleIcon from '@mui/icons-material/Circle';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import BarChart1 from '../components/BarChart';
import { ArrowDropDown } from '@mui/icons-material';



function CircularProgressWithLabelStorage(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h7" component="div" color="text.secondary">
                    <strong>{`${Math.round(props.value)}%`}</strong>
                </Typography>
            </Box>
        </Box>
    );
}




const Statistics = () => {
    return (
        <Card>
            <CardContent>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ width: '32%', background: 'linear-gradient(42deg, #F4FAFF 0%, #E3F3FE 100%)', height: '210px', borderRadius: '15px', p: 2 }}>
                        <Box sx={{ width: '100%' }}>
                            <Button sx={{ width: '100%', display: 'flex', color: 'black' }} >
                                <div style={{ width: '36px', height: '36px', backgroundColor: '#C4E6FF', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                                    <StorageIcon sx={{ width: '80%', color: '#207CBC' }} />
                                </div>
                                <Typography variant='body2' sx={{ width: '80%', display: 'flex' }}> <strong>Total Storage </strong> </Typography>
                                <ChevronRightIcon />
                            </Button>
                        </Box>
                        <Box sx={{ width: '100%', marginTop: '10px', display: 'flex', p: 1 }}>
                            <Box width={{ width: '40%', display: 'flex' }}>
                                <CircularProgressWithLabelStorage value={80} size={100} sx={{ color: '#3BB3E1' }} />;
                            </Box>
                            <Box width={{ width: '60%' }}>
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                                    <CircleIcon sx={{ fontSize: '18px', margin: '10px', color: '#3BB3E1' }} />
                                    <div style={{ color: '#516F91', display: 'flex' }}>
                                        <strong>96 of 120 GB</strong> <div style={{ color: 'red', marginLeft: '5px' }}> used </div>
                                    </div>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <CircleIcon sx={{ fontSize: '18px', margin: '10px', color: 'Gray' }} />
                                    <div style={{ color: '#516F91', display: 'flex' }}>
                                        <strong>24 GB </strong> <div style={{ color: '#439B57', marginLeft: '5px' }}> Free </div>
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                    </Box>


                    <Box sx={{ width: '32%', background: 'linear-gradient(42deg, #FFF4F9 0%, #FEE3F0 100%)', height: '210px', borderRadius: '15px', p: 2 }}>
                        <Box sx={{ width: '100%' }}>
                            <Button sx={{ width: '100%', display: 'flex', color: 'black' }} >
                                <div style={{ width: '36px', height: '36px', backgroundColor: '#FFD0D2', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                                    <MemoryIcon sx={{ width: '80%', color: '#EF4746' }} />
                                </div>
                                <Typography variant='body2' sx={{ width: '80%', display: 'flex' }}> <strong>Total Ram</strong> </Typography>
                                <ChevronRightIcon />
                            </Button>
                        </Box>
                        <Box sx={{ width: '100%', marginTop: '10px', display: 'flex', p: 1 }}>
                            <Box width={{ width: '40%', display: 'flex' }}>
                                <CircularProgressWithLabelStorage value={80} size={100} sx={{ color: '#E7313E' }} />;
                            </Box>
                            <Box width={{ width: '60%' }}>
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                                    <CircleIcon sx={{ fontSize: '18px', margin: '10px', color: '#E7313E' }} />
                                    <div style={{ color: '#516F91', display: 'flex' }}>
                                        <strong>96 of 120 GB</strong> <div style={{ color: 'red', marginLeft: '5px' }}> used </div>
                                    </div>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <CircleIcon sx={{ fontSize: '18px', margin: '10px', color: 'Gray' }} />
                                    <div style={{ color: '#516F91', display: 'flex' }}>
                                        <strong>24 GB </strong> <div style={{ color: '#439B57', marginLeft: '5px' }}> Free </div>
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                    </Box>


                    <Box sx={{ width: '32%', background: 'linear-gradient(42deg, #FFFBF1 0%, #FFF1DD 100%)', height: '210px', borderRadius: '15px', p: 2 }}>
                        <Box sx={{ width: '100%' }}>
                            <Button sx={{ width: '100%', display: 'flex', color: 'black' }} >
                                <div style={{ width: '36px', height: '36px', backgroundColor: '#FFE7C4', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                                    <StorageIcon sx={{ width: '80%', color: '#F68709' }} />
                                </div>
                                <Typography variant='body2' sx={{ width: '80%', display: 'flex' }}> <strong>Number of CPUs</strong> </Typography>
                                <ChevronRightIcon />
                            </Button>
                        </Box>
                        <Box sx={{ width: '100%', marginTop: '10px', display: 'flex', p: 1 }}>
                            <Box width={{ width: '40%', display: 'flex' }}>
                                <CircularProgressWithLabelStorage value={80} size={100} sx={{ color: '#F3A650' }} />;
                            </Box>
                            <Box width={{ width: '60%' }}>
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                                    <CircleIcon sx={{ fontSize: '18px', margin: '10px', color: '#F3A650' }} />
                                    <div style={{ color: '#516F91', display: 'flex' }}>
                                        <strong>96 of 120 GB</strong> <div style={{ color: 'red', marginLeft: '5px' }}> used </div>
                                    </div>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <CircleIcon sx={{ fontSize: '18px', margin: '10px', color: 'Gray' }} />
                                    <div style={{ color: '#516F91', display: 'flex' }}>
                                        <strong>24 GB </strong> <div style={{ color: '#439B57', marginLeft: '5px' }}> Free </div>
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Card sx={{ marginTop: '20px' }}>
                    <CardContent>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography> <strong>Data Consumption</strong> </Typography>
                                <Typography> I/O operations count (In thousands) </Typography>
                            </Box>
                            <Box sx={{ float: 'right' }}>
                                <Button endIcon={<ArrowDropDown/>}> I/O Operations </Button>
                            </Box>
                        </Box>
                        <BarChart1 />
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}

export default Statistics