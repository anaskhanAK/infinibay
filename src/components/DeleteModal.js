import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const ToggleRed = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));



export default function DeleteModal() {
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
            <Button variant="outlined" onClick={handleClickOpen} startIcon={<DeleteIcon fontSize='small'/>} sx={{ fontSize: '11px', height:'30px' }} size='small'>
                delete
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent sx={{ justifyContent: 'center', padding: '40px' }} >

                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography sx={{ color: '#E82E2E', fontSize: '25px' }}>
                            Are you sure you want
                        </Typography>
                    </Stack>

                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'center', marginBottom: "20px" }}>
                        <Typography sx={{ color: '#E82E2E', fontSize: '25px' }}>
                            to delete this VM?
                        </Typography>
                    </Stack>

                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography >
                            This will delete this post permanently.
                        </Typography>
                    </Stack>

                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography>
                            You cannot undo this action.
                        </Typography>
                    </Stack>

                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                        <Button autoFocus onClick={handleClose} variant='outlined' sx={{ margin: "5px" }}>
                            Cancel
                        </Button>
                        <ToggleRed onClick={handleClose} autoFocus variant='contained' sx={{ backgroundColor: '#FF6A69', margin: '5px' }}>
                            Delete
                        </ToggleRed>
                    </Stack>
                </DialogContent>
            </Dialog>
        </div>
    );
}