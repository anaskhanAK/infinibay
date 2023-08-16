import * as React from 'react';
import Box from '@mui/material/Box'
import { Card, CardContent, Typography, Button, OutlinedInput } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import VmCard2 from '../components/VmCard2';
import CreateModal from './CreateVm';


const VmList = () => {

    const [age, setAge] = React.useState('Thirty');
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
            <Card sx={{ p: 1 }}>
                <CardContent>
                    <Box sx={{ width: '100%' }}>
                        <OutlinedInput placeholder="Search..." sx={{ height: '35px', width: '350px', marginRight: '10px' }} />
                        <Button variant='contained'> Search </Button>
                        <Box sx={{float:'right'}}>
                            <CreateModal />
                        </Box>
                    </Box>

                    <Box sx={{ width: '100%', display: 'flex', marginTop: '10px', alignItems:'center' }}>

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
                                <MenuItem value={"Ten"}>Ten</MenuItem>
                                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                                <MenuItem value={"Thirty"}>Thirty</MenuItem>
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