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
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';



const CreateButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            // height:'20px',
            width: 250,
        },
    },
};

const names = [
    'Disc 1',
    'Disc 2',
    'Disc 3'
];


export default function CreateStorageModal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [Ops, setOps] = React.useState('Fast storage');
    const [openOp, setOpenOp] = React.useState(false);
    const [Disks, setDisks] = React.useState([])

    const handleChangeDisks = (event) => {
        const {
            target: { value },
        } = event;
        setDisks(
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    const handleChangeOp = (event) => {
        setOps(event.target.value);
    };

    const handleOpenOp = () => {
        setOpenOp(true);
    };

    const handleCloseOp = () => {
        setOpenOp(false);
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
                Create a New Storage
            </CreateButton>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth='1000px'
            >
                <DialogTitle id="responsive-dialog-title" sx={{ }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant='h6'>
                            <strong>Create Storage</strong>
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
                                    <Typography sx={{ marginBottom: '10px', color: 'red' }}>
                                        <strong style={{ color: 'black' }}>Storage Name</strong>*
                                    </Typography>
                                    <OutlinedInput placeholder="Enter Storage Name" sx={{ width: '100%', height: '40px' }} />
                                </Box>
                                <Box sx={{ width: '100%' }}>
                                    <Typography sx={{ marginBottom: '10px', color: 'red' }}>
                                        <strong style={{ color: 'black' }}>Storage Type</strong>*
                                    </Typography>

                                    <Select
                                        sx={{ width: '100%', height: '40px' }}
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={openOp}
                                        value={Ops}
                                        onClose={handleCloseOp}
                                        onOpen={handleOpenOp}
                                        onChange={handleChangeOp}
                                    >
                                        <MenuItem value={'Fast storage'}>Fast storage</MenuItem>
                                        <MenuItem value={'Safe storage'}>Safe storage</MenuItem>
                                        <MenuItem value={'Mixed'}>Mixed</MenuItem>
                                    </Select>
                                </Box>

                            </Box>
                            <Box sx={{ width: '48%' }}>
                                <Typography sx={{ marginBottom: '10px', color: 'red' }}>
                                    <strong style={{ color: 'black' }}>Select Disc</strong>*
                                </Typography>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={Disks}
                                    onChange={handleChangeDisks}
                                    input={<OutlinedInput />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                    sx={{ width: '100%', height: '40px' }}
                                    placeholder='Select Disc'

                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={Disks.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Box>
                        </Box>
                        <Box sx={{ width: '100%', marginTop:'60px'}}>
                            <Button variant='contained' sx={{float:'right', marginBottom:'20px'}}> Create Now </Button>
                        </Box>

                    </Box>

                </DialogContent>
            </Dialog >
        </div >
    );
}