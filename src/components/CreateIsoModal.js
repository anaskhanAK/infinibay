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



const inputStyle = {
    display: 'none',
};


const CreateButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));


export default function CreateIsoModal() {
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [Isos, setIso] = React.useState('Linux');
    const [openIso, setOpenIso] = React.useState(false);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };


    const handleChangeIso = (event) => {
        setIso(event.target.value);
    };

    const handleOpenIso = () => {
        setOpenIso(true);
    };

    const handleCloseIso = () => {
        setOpenIso(false);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CreateButton variant="contained" onClick={handleClickOpen} >
                Create An ISO
            </CreateButton>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth='1000px'
            >
                <DialogTitle id="responsive-dialog-title">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant='h6'>
                            <strong>Create An ISO</strong>
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
                                        Storage Name
                                    </Typography>
                                    <OutlinedInput placeholder="Enter Storage Name" sx={{ width: '100%', height: '40px' }} />
                                </Box>
                            </Box>

                            <Box sx={{ width: '48%' }}>
                                <Typography sx={{ marginBottom: '10px' }}>
                                    Storage Type
                                </Typography>

                                <Select
                                    sx={{ width: '100%', height: '40px' }}
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={openIso}
                                    value={Isos}
                                    onClose={handleCloseIso}
                                    onOpen={handleOpenIso}
                                    onChange={handleChangeIso}
                                >
                                    <MenuItem value={'Linux'}>Linux</MenuItem>
                                    <MenuItem value={'Windows'}>Windows</MenuItem>
                                </Select>
                            </Box>

                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '385px', border: '1px solid #d8d8d8', borderRadius: '4px', height: '40px', marginRight: '10px', display: 'flex', alignItems: 'center', padding: '10px' }}>
                                    {selectedFile &&
                                        <p>
                                            {selectedFile.name}
                                        </p>}
                                </div>
                                <label htmlFor="file-input">
                                    <input
                                        accept="image/*"
                                        style={inputStyle}
                                        id="file-input"
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                    <Button variant="contained" >
                                        Browse...
                                    </Button>
                                </label>
                            </div>

                        </Box>
                        <Box sx={{ width: '100%', marginTop: '60px' }}>
                            <Button variant='contained' sx={{ float: 'right', marginBottom: '20px' }}> Create </Button>
                        </Box>

                    </Box>

                </DialogContent>
            </Dialog >
        </div >
    );
}