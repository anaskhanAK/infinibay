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
import { OutlinedInput } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const CreateButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));



export default function CreateAccountModal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [Access, setAccess] = React.useState('Yes');
    const [openAccess, setOpenAccess] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeAccess = (event) => {
        setAccess(event.target.value);
    };

    const handleOpenAccess = () => {
        setOpenAccess(true);
    };

    const handleCloseAccess = () => {
        setOpenAccess(false);
    };

    return (
        <div>
            <CreateButton variant="contained" onClick={handleClickOpen} >
                Create a New Account
            </CreateButton>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth='1000px'
            >
                <DialogTitle id="responsive-dialog-title" sx={{}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant='h6'>
                            <strong>Create New Account</strong>
                        </Typography>
                        <IconButton aria-label="close" sx={{ float: 'right' }} onClick={handleClose} autoFocus>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ width: '800px', fontSize: '14px' }}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                            <Box sx={{ width: '48%' }}>

                                <Box sx={{ width: '100%', marginBottom: '20px' }}>
                                    <Typography sx={{ marginBottom: '10px' }}>
                                        First Name
                                    </Typography>
                                    <OutlinedInput placeholder="Enter First Name" sx={{ width: '100%', height: '40px' }} />
                                </Box>

                                <Box sx={{ width: '100%', marginBottom: '20px' }}>
                                    <Typography sx={{ marginBottom: '10px' }}>
                                        Username
                                    </Typography>
                                    <OutlinedInput placeholder="Enter Username" sx={{ width: '100%', height: '40px' }} />
                                </Box>

                                <Box sx={{ width: '100%', marginBottom: '20px' }}>
                                    <Typography sx={{ marginBottom: '10px' }}>
                                        VMs Access Granted
                                    </Typography>
                                    <Select
                                        sx={{ width: '100%', height: '40px' }}
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openAccess}
                                        value={Access}
                                        onClose={handleCloseAccess}
                                        onOpen={handleOpenAccess}
                                        onChange={handleChangeAccess}
                                    >
                                        <MenuItem value={'Yes'}>Yes</MenuItem>
                                        <MenuItem value={'No'}>No</MenuItem>
                                    </Select>
                                </Box>

                            </Box>
                            <Box sx={{ width: '48%' }}>
                                <Box sx={{ width: '100%', marginBottom: '20px' }}>
                                    <Typography sx={{ marginBottom: '10px' }}>
                                        Last Name
                                    </Typography>
                                    <OutlinedInput placeholder="Enter Last Name" sx={{ width: '100%', height: '40px' }} />
                                </Box>

                                <Box sx={{ width: '100%', marginBottom: '20px' }}>
                                    <Typography sx={{ marginBottom: '10px' }}>
                                        Email
                                    </Typography>
                                    <OutlinedInput placeholder="Enter Email" sx={{ width: '100%', height: '40px' }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ width: '100%', marginTop: '40px' }}>
                            <Button variant='contained' sx={{ float: 'right', marginBottom: '20px' }}> Create Now </Button>
                        </Box>
                    </Box>

                </DialogContent>
            </Dialog >
        </div >
    );
}