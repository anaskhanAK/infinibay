import * as React from 'react';
import { Toolbar, Typography, IconButton, InputBase, Button, Menu, MenuItem, Divider, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Badge from '@mui/material/Badge';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { KeyboardArrowUp } from '@mui/icons-material';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


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


export default function Navebar({ handleDrawer }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchValue, setSearchValue] = React.useState('')
    const open = Boolean(anchorEl);
    const [openD, setOpenD] = React.useState(true)
    // const [openDrawer, setOpenDrawer] = React.useState(true);

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

    const HandleToggle = () => {
        handleDrawer()
        setOpenD(!openD)
    }

    return (
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={HandleToggle}>
                {openD ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                <b>Dashboard</b>
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
                {/* <Badge color="secondary" variant="dot"> */}
                    <EmailIcon sx={{ color: "#747274" }} />
                {/* </Badge> */}
            </IconButton>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, background: 'white', width: '40px', height: '40px', borderRadius: '8px' }} >
                <Badge color="warning" variant="dot">
                    <NotificationsIcon sx={{ color: "#747274" }} />
                </Badge>
            </IconButton>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={open ? <KeyboardArrowUp/> : <KeyboardArrowDownIcon />}
                sx={{ background: 'white', color: 'black', borderRadius: '8px', paddingLeft: '10px', paddingRight: '10px', textTransform: 'capitalize' }}
            >
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    variant="dot"
                    sx={{ marginRight: '5px' }}
                >
                    <Avatar alt="Remy Sharp" src="anas.jpg" sx={{ width: 30, height: 30 }} />
                </StyledBadge>
                anas
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    anaskhankin1999@gmain.com
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <PersonOutlineOutlinedIcon />
                    Profile
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                    <LogoutIcon />
                    Logout
                </MenuItem>

            </StyledMenu>
        </Toolbar>
    );
}