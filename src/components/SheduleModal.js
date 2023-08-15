import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';



const CreateButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));


export default function SheduleModal() {
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
            <CreateButton variant="contained" onClick={handleClickOpen} >
                Create a Vm Now
            </CreateButton>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth='1000px'
            >
                <DialogTitle id="responsive-dialog-title" sx={{ marginBottom: '-15px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant='h6'>
                            <strong>Schedule a time</strong>
                        </Typography>
                        <IconButton aria-label="close" sx={{ float: 'right' }} onClick={handleClose} autoFocus>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ width: '650px', fontSize: '14px' }}>
                        <Box sx={{ width: '100%' }}>
                            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.
                        </Box>

                    </Box>

                </DialogContent>
            </Dialog >
        </div >
    );
}