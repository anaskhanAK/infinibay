import * as React from 'react';
// import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SnapSvg from '../assets/SnapSvg';
import AppSvg from '../assets/AppSvg';
import Checkbox from '@mui/material/Checkbox';
import MessengerSvg from '../assets/MessengerSvg';
import TranslateSvg from '../assets/TranslateSvg';
import Link from '@mui/material/Link';
import DeleteSvg from '../assets/DeleteSvg';
import DasktopSvg from '../assets/DasktopSvg';
import FolderSvg from '../assets/FolderSvg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



// const CreateButton = styled(Button)(({ theme }) => ({
//     color: 'white',
//     backgroundColor: '#FF6A69',
//     '&:hover': {
//         backgroundColor: '#FF6A69',
//     },
// }));


export default function OutOfSpaceModal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [openList, setOpenList] = React.useState(true);

    const handleClickList = () => {
        setOpenList(!openList);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <button style={{ border: 'none', background: 'transparent' }} onClick={handleClickOpen}>
                <ChevronRightIcon sx={{ color: 'black' }} />
            </button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth='1000px'
            >
                <DialogTitle id="responsive-dialog-title">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant='p'>
                            <strong>You are getting out of space!</strong>
                        </Typography>
                        <IconButton aria-label="close" sx={{ float: 'right' }} onClick={handleClose} autoFocus>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ width: '400px', fontSize: '14px', maxHeight: '100vh', overflowY: 'hidden' }}>
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" value={80} sx={{ height: '10px', marginBottom: '2px', borderRadius: '12px', backgroundColor: '#E7E7E7', '& .MuiLinearProgress-bar': { backgroundColor: '#E82E2E' } }} />
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="caption" color='#516F91'>
                                    <strong>118 of 120 GB used</strong>
                                </Typography>
                                <Typography variant="caption" color='#516F91'>
                                    <strong>2 GB Free</strong>
                                </Typography>
                            </Box>
                            <Button variant='contained' sx={{ textTransform: 'capitalize', marginTop: '10px' }}> Free some space </Button>
                            <Box sx={{ width: '100%', marginTop: '20px' }}>
                                <Typography>
                                    <strong>Recommended for cleanup</strong>
                                </Typography>
                                <Box sx={{ width: '100%' }}>
                                    <List sx={{ width: '100%' }}>
                                        <ListItemButton onClick={handleClickList}>
                                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                <Box sx={{ width: '10%' }}>
                                                    <AppSvg />
                                                </Box>
                                                <Box sx={{ width: '86%', marginTop: '-4px' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <Typography>Apps & features</Typography>
                                                        <Typography>16.2 GB</Typography>
                                                    </Box>
                                                    <LinearProgress variant="determinate" value={80} sx={{ height: '4', borderRadius: '12px' }} />
                                                    <Typography variant='caption'>Uninstall unused or undesired apps & features</Typography>
                                                </Box>
                                                <Box sx={{ width: '4%' }}>
                                                    {openList ? <ExpandLess /> : <ExpandMore />}
                                                </Box>
                                            </Box>

                                        </ListItemButton>
                                        <Collapse in={openList} timeout="auto" unmountOnExit>
                                            <Typography sx={{ ml: 6 }} variant='subtitle2'>Delete apps you no longer need.</Typography>
                                            <List component="div" disablePadding >
                                                <ListItemButton sx={{ pl: 6, pr: 4 }}>
                                                    <Box sx={{ width: '12%' }}>
                                                        <SnapSvg />
                                                    </Box>
                                                    <Box sx={{ width: '82%' }}>
                                                        <Typography variant='subtitle2' sx={{ marginBottom: '-6px' }}>Snapchat</Typography>
                                                        <Typography variant='caption'>137 MB</Typography>
                                                    </Box>
                                                    <Box sx={{ width: '4%' }}>
                                                        <Checkbox />
                                                    </Box>
                                                </ListItemButton>

                                                <ListItemButton sx={{ pl: 6, pr: 4 }}>
                                                    <Box sx={{ width: '12%' }}>
                                                        <MessengerSvg />
                                                    </Box>
                                                    <Box sx={{ width: '82%' }}>
                                                        <Typography variant='subtitle2' sx={{ marginBottom: '-6px' }}>Messenger</Typography>
                                                        <Typography variant='caption'>288 MB</Typography>
                                                    </Box>
                                                    <Box sx={{ width: '4%' }}>
                                                        <Checkbox />
                                                    </Box>
                                                </ListItemButton>

                                                <ListItemButton sx={{ pl: 6, pr: 4 }}>
                                                    <Box sx={{ width: '12%' }}>
                                                        <TranslateSvg />
                                                    </Box>
                                                    <Box sx={{ width: '82%' }}>
                                                        <Typography variant='subtitle2' sx={{ marginBottom: '-6px' }}>Translate</Typography>
                                                        <Typography variant='caption'>345 MB</Typography>
                                                    </Box>
                                                    <Box sx={{ width: '4%' }}>
                                                        <Checkbox />
                                                    </Box>
                                                </ListItemButton>
                                            </List>
                                            <Link href="#" sx={{ p: 6 }}>See more apps and features</Link>
                                        </Collapse>

                                        <ListItemButton >
                                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                <Box sx={{ width: '10%' }}>
                                                    <DasktopSvg />
                                                </Box>
                                                <Box sx={{ width: '86%', marginTop: '-4px' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <Typography>Inactive VMs (last 3-6 months)</Typography>
                                                        <Typography>14.5 GB</Typography>
                                                    </Box>
                                                    <LinearProgress variant="determinate" value={80} sx={{ height: '4', borderRadius: '12px' }} />
                                                    <Typography variant='caption'>Remove inactive VMs</Typography>
                                                </Box>
                                                <Box sx={{ width: '4%' }}>
                                                    <ExpandMore />
                                                </Box>
                                            </Box>
                                        </ListItemButton>

                                        <ListItemButton >
                                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                <Box sx={{ width: '10%' }}>
                                                    <DeleteSvg />
                                                </Box>
                                                <Box sx={{ width: '86%', marginTop: '-4px' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <Typography>Temporary files</Typography>
                                                        <Typography>11 GB</Typography>
                                                    </Box>
                                                    <LinearProgress variant="determinate" value={80} sx={{ height: '4', borderRadius: '12px' }} />
                                                    <Typography variant='caption'>Remove temporary files</Typography>
                                                </Box>
                                                <Box sx={{ width: '4%' }}>
                                                    <ExpandMore />
                                                </Box>
                                            </Box>
                                        </ListItemButton>

                                        <ListItemButton >
                                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                <Box sx={{ width: '10%' }}>
                                                    <FolderSvg />
                                                </Box>
                                                <Box sx={{ width: '86%', marginTop: '-4px' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <Typography>ISOs (last 3-6 months)</Typography>
                                                        <Typography>2.5 GB</Typography>
                                                    </Box>
                                                    <LinearProgress variant="determinate" value={80} sx={{ height: '4', borderRadius: '12px' }} />
                                                    <Typography variant='caption'>Remove inactive ISOs</Typography>
                                                </Box>
                                                <Box sx={{ width: '4%' }}>
                                                    <ExpandMore />
                                                </Box>
                                            </Box>
                                        </ListItemButton>
                                    </List>
                                </Box>
                            </Box>
                        </Box>


                    </Box>

                </DialogContent>
            </Dialog >
        </div >
    );
}