import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import SdCardOutlinedIcon from '@mui/icons-material/SdCardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import HelloCard from './HelloCard';



const drawerWidth = 300;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '30ch',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function SidebarContent() {
    // const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchValue, setSearchValue] = React.useState('')
    const openM = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearchChange = (event) => {
        const newValue = event.target.value
        console.log(newValue)
        setSearchValue(newValue);
    }

    const handleDrawerOpen = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: '#F0F4FA', color: 'black' }} elevation={0}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                        }}
                    >
                        <MenuIcon />
                    </IconButton>


                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                        Dashboard
                    </Typography>
                    <Search sx={{ flexGrow: 2 }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ width: '100%' }}
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                    </Search>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 4, marginLeft: '10px', background: 'white', width: '40px', height: '40px', borderRadius: '8px' }} >
                        <EmailIcon sx={{ color: "#747274" }} />
                    </IconButton>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, background: 'white', width: '40px', height: '40px', borderRadius: '8px' }} >
                        <NotificationsIcon sx={{ color: "#747274" }} />
                    </IconButton>
                    <Button
                        id="demo-customized-button"
                        aria-controls={openM ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openM ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{ background: 'white', color: 'black', borderRadius: '8px', paddingLeft: '10px', paddingRight: '10px' }}
                    >
                        <Avatar alt="Remy Sharp" src="anas.jpg" sx={{ width: 30, height: 30, marginRight: '10px' }} />

                        anaskhan
                    </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
                        anchorEl={anchorEl}
                        open={openM}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} disableRipple>
                            <EditIcon />
                            Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <FileCopyIcon />
                            Duplicate
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleClose} disableRipple>
                            <ArchiveIcon />
                            Archive
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <MoreHorizIcon />
                            More
                        </MenuItem>
                    </StyledMenu>
                </Toolbar>
            </AppBar>



            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Box flexGrow={1} sx={{display: 'flex', justifyContent: 'center'}}>
                        <img alt='infinibay logo' src='infinibayLogo.png' width={70} height={40} style={{ marginRight: '10px'}} />
                        <Typography variant='h4' color={'#747274'}>
                            Infinibay
                        </Typography>
                    </Box>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Dashboard', 'VMs', 'Custom Scripts', 'Custom Templates', 'Storage', 'Users', 'ISOs', 'Statistics'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 8 === 0 ? <DashboardOutlinedIcon /> : null}
                                    {index % 8 === 1 ? <HomeOutlinedIcon /> : null}
                                    {index % 8 === 2 ? <TerminalOutlinedIcon /> : null}
                                    {index % 8 === 3 ? <VerticalSplitOutlinedIcon /> : null}
                                    {index % 8 === 4 ? <SdCardOutlinedIcon /> : null}
                                    {index % 8 === 5 ? <GroupOutlinedIcon /> : null}
                                    {index % 8 === 6 ? <GppGoodOutlinedIcon /> : null}
                                    {index % 8 === 7 ? <SsidChartOutlinedIcon /> : null}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{
                flexGrow: 1,
                p: 3,
                width: '100%',
                height: '100vh',
                backgroundColor: 'white',
                backgroundImage: 'linear-gradient(to bottom, #F0F4FA 0%, #CDF4FF88 100%)'
            }}>
                <DrawerHeader />
                <HelloCard />
            </Box>
        </Box>
    );
}