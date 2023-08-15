import * as React from 'react';
import Box from '@mui/material/Box'
import { Card, CardContent, Typography, Button, OutlinedInput } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import VmCard2 from '../components/VmCard2';
import CreateModal from './CreateVm';


const VmList = () => {

    const [age, setAge] = React.useState('tamplats');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <React.Fragment>
            <Card sx={{ marginBottom: '30px', p: 1 }}>
                <CardContent>
                    <Box sx={{ width: '100%' }}>
                        <OutlinedInput placeholder="Search..." sx={{ height: '35px', width: '350px', marginRight: '20px' }} />
                        <Button variant='contained'> Search </Button>
                        {/* <CreateButton variant='contained' sx={{ float: 'right' }}> Create a Vm Now</CreateButton> */}
                        <Box sx={{float:'right'}}>
                            <CreateModal />
                        </Box>

                    </Box>

                    <Box sx={{ width: '100%', display: 'flex', marginTop: '20px' }}>

                        <Box sx={{ width: '60%', display: 'flex' }}>
                            <Typography color='#56bbea' sx={{ marginRight: '5px' }}>
                                All
                            </Typography>
                            <Typography sx={{ marginRight: '25px' }}> (50) </Typography>
                            <Typography color='#56bbea' sx={{ marginRight: '5px' }}>
                                Running
                            </Typography>
                            <Typography sx={{ marginRight: '25px' }}> (30) </Typography>
                            <Typography color='#56bbea' sx={{ marginRight: '5px' }}>
                                Stopped
                            </Typography>
                            <Typography sx={{ marginRight: '15px' }}> (15) </Typography>
                        </Box>

                        <Box sx={{ width: '40%', alignItems: 'center' }}>
                            <Select
                                sx={{ width: '350px', height: '35px', float: "right" }}
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                value={age}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Box>
                    </Box>
                    <VmCard2 />
                    <VmCard2 />
                    <VmCard2 />
                    <VmCard2 />
                </CardContent>
            </Card>

        </React.Fragment>
    )
}

export default VmList