import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { AdminBarData } from './NavigationList';
import { useNavigate } from 'react-router-dom';



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));



export default function Sidebar({ open }) {

    const navigate = useNavigate()
    const [selected, setSelected] = React.useState(1)

    const HandleNavigation = (Link, id) => {
        console.log('Navigating to:', Link);
        setSelected(id)
        navigate(Link)
    }

    return (
        <React.Fragment>
            <DrawerHeader>
                <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        alt='infinibay logo'
                        src='logo.png'
                        height={30}
                    />
                </Box>
            </DrawerHeader>
            <Divider />
            <List>
                {AdminBarData.map((text, index) => (
                    <ListItem key={text.title} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }} onClick={() => HandleNavigation(text.link, text.id)} selected={selected === text.id}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                                {text.icon}
                            </ListItemIcon>
                            <ListItemText primary={text.title} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    );
}