import * as React from 'react';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StopIcon from '@mui/icons-material/Stop';

const DeleteButton = styled(Button)(({ theme }) => ({
    borderRadius: '8px',
    width: '120px',
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));



export default function VmDetailsModal() {
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
            <Button variant="outlined" onClick={handleClickOpen} startIcon={<VisibilityIcon fontSize='small' />} sx={{ fontSize: '11px', height: '30px' }} size='small'>
                View
            </Button>
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
                            Virtual Machine Details
                        </Typography>
                        <IconButton aria-label="close" sx={{ float: 'right' }} onClick={handleClose} autoFocus>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                </DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', marginBottom: '40px' }}>
                        <Box>
                            <img
                                alt='VmImage'
                                src='https://s3-alpha-sig.figma.com/img/342f/555b/21ccf059b5d57740f6bca68da55a43f8?Expires=1692576000&Signature=oDARrRjHC9I4Yo1RD6lGEmlIXFyOQxysyzf6HRmOsNsubcEOmaHy2fVOFBjzptmD9lnRLFbmV--jSSPqd4ZAIWYocm14rE~Lmc-2hb~Yh9pluBDegiJFLa93O0wgQlVzPzjmJTs~PsnxNx3fQ2j2sIOuwbq9LE0WnYJDtpsVnJagfwo46QikmT20Eq2sElkmc1FqRmdntzB-W5d7eTZgdCyH9QmOJsYiVjeOHAXwbIoRpHkgZiBrSTAhjAoU9hG~0uriL1BOG3744RcifxjhUv18qhCLgaGgwCvdpHc-OT6cFcATGD1kC9cuAAmlvaTWKTFOPtI5mBpNY6IrHxYJUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                width="300px"
                                height='280px'
                                style={{ borderRadius: '8px' }}
                            />
                        </Box>
                        <Box sx={{ width: '680px', marginLeft: '40px' }}>
                            <Box sx={{ width: '650px' }}>
                                <Box sx={{ marginBottom: '20px' }}>
                                    <Chip label="Created: 31/12/2010" sx={{marginRight:'10px', borderRadius:1, backgroundColor:"#DEF0FE", color:'#37A1D5'}} />
                                    <Chip label="Status: 31/12/2010" sx={{borderRadius:1, backgroundColor:"#FFE1E1", color:'#FF6A69'}}/>
                                </Box>
                                <Box sx={{ marginBottom: '20px' }}>
                                    <Typography >
                                        <b>Name:</b>
                                    </Typography>
                                    <Typography>
                                        VMTestAPI
                                    </Typography>
                                </Box>
                                <Box sx={{ marginBottom: '20px' }}>
                                    <Typography>
                                        <b>Description:</b>

                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box sx={{ width: '32%' }}>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography>
                                                <b>Operating System:</b>
                                            </Typography>
                                            <Typography>
                                                Linux
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography>
                                                <b>CPU:</b>
                                            </Typography>
                                            <Typography>
                                                2 CPUs (Large), 8 GiB
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ width: '32%' }}>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography>
                                                <b>Storage:</b>
                                            </Typography>
                                            <Typography>
                                                10 GB
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography>
                                                <b>Source:</b>
                                            </Typography>
                                            <Typography>
                                                ISO https://iso.cpom/
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ width: '32%' }}>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography>
                                                <b>IP:</b>
                                            </Typography>
                                            <Typography>
                                                59.103.210.167
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography>
                                                <b>Advanced:</b>
                                            </Typography>
                                            <Typography>
                                                CD-ROM Not available
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '10px', marginBottom: "10px" }}>
                                <DeleteButton startIcon={<DeleteIcon />} sx={{ marginRight: '10px' }}> Delete </DeleteButton>
                                <Button startIcon={<EditIcon />} sx={{ marginRight: '10px', backgroundColor: "#E2E7EC", width: '120px', borderRadius: '8px' }}> Edit </Button>
                                <Button startIcon={<StopIcon />} sx={{ backgroundColor: "#E2E7EC", width: '120px', borderRadius: '8px' }}> Stop </Button>
                            </Box>
                        </Box>
                    </Box>

                </DialogContent>
            </Dialog>
        </div>
    );
}