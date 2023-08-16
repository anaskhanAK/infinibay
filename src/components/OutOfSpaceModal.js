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
import LinearProgress from '@mui/material/LinearProgress';
// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';




const CreateButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));


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
                    <Box sx={{ width: '400px', fontSize: '14px' }}>
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" value={80} sx={{ height: '10px', borderRadius: '12px', backgroundColor: '#E7E7E7', '& .MuiLinearProgress-bar': { backgroundColor: '#E82E2E' } }} />
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
                                <Box sx={{ width: '100%', display: "flex" }}>
                                    <List sx={{ width: '100%' }}>
                                        <ListItemButton onClick={handleClickList}>
                                            <Box sx={{ width: '100%', display: 'flex' }}>
                                                <Box sx={{ width: '10%' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
                                                        <g clip-path="url(#clip0_177_1537)">
                                                            <path d="M8 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H8C8.26522 20 8.51957 19.8946 8.70711 19.7071C8.89464 19.5196 9 19.2652 9 19V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM7 18H2V13H7V18ZM19 0H12C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V8C11 8.26522 11.1054 8.51957 11.2929 8.70711C11.4804 8.89464 11.7348 9 12 9H19C19.2652 9 19.5196 8.89464 19.7071 8.70711C19.8946 8.51957 20 8.26522 20 8V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM18 7H13V2H18V7ZM19 11H12C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11ZM18 18H13V13H18V18ZM8 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H8C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0ZM7 7H2V2H7V7Z" fill="#37A1D5" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_177_1537">
                                                                <rect width="25" height="25" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Box>
                                                <Box sx={{width:'80%', display:'flex', justifyContent:'space-between'}}>
                                                    <Typography>Apps & features</Typography>
                                                    <Typography>16.2 GB</Typography>
                                                </Box>
                                            </Box>
                                            {openList ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openList} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 9 }}>
                                                    <ListItemIcon>
                                                        <StarBorder />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Starred" />
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
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