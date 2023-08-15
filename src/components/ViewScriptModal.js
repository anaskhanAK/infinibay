import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PlayArrow, Stop } from '@mui/icons-material';




const CreateButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));


export default function ViewScript() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CreateButton variant="contained" onClick={handleClickOpen} startIcon={<VisibilityIcon />} sx={{ width: '100%' }}>
                View The Script
            </CreateButton>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth='1000px'
            >
                <DialogTitle id="responsive-dialog-title" sx={{ marginBottom: '-12px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant='h6'>
                            <strong>Moves the virtual hard drive</strong>
                        </Typography>
                        <IconButton aria-label="close" sx={{ float: 'right' }} onClick={handleClose} autoFocus>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ width: '850px', fontSize: '14px' }}>
                        <Box sx={{ width: '100%' }}>
                            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ width: '100%', height: 150, backgroundColor: '#012456', borderRadius: '8px', display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '20px', pl: 2 }}>
                                <img
                                    alt='codeimage'
                                    src='script.png'
                                    height={120}
                                />

                            </Box>
                            <Box sx={{ width: '100%' }}>
                                <Card sx={{ width: '100%' }}>
                                    <CardContent>
                                        <Box sx={{ width: '100%', display: 'flex' }}>
                                            <Button sx={{ color: 'black' }}> All </Button>
                                            <Button> Select the VMs </Button>
                                        </Box>
                                        <Divider />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="VmName" />
                                        <FormControlLabel control={<Checkbox size="small" />} label="Name" />
                                    </CardContent>
                                </Card>
                                <Box sx={{ display:'flex', float:'right', marginTop:'20px', marginBottom:'20px'}}>
                                    <Button variant="contained" startIcon={<PlayArrow />} sx={{ marginRight: '10px'}}>
                                        Run Now
                                    </Button>
                                    <Button variant="outlined" startIcon={<Stop />}>
                                        Schedule
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog >
        </div >
    );
}