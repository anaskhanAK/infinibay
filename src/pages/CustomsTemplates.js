import * as React from 'react';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Button, OutlinedInput } from '@mui/material';
import TemplatesCard from '../components/TemplatesCard';


const CreateButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));

const CustomsTemplates = () => {

    return (
        <React.Fragment>
            <Card sx={{ p: 1 }}>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant="h6"><b>Custom VM Templates</b></Typography>
                        <CreateButton> Create a VM Now </CreateButton>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>

                        <Box sx={{ display: 'flex' }}>
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
                        <Box >
                            <OutlinedInput placeholder="Search..." sx={{ height: '35px', width: '350px', marginRight: '20px' }} />
                            <Button variant='contained'> Search </Button>
                        </Box>
                    </Box>
                    <TemplatesCard />
                    <TemplatesCard />
                    <TemplatesCard />
                    <TemplatesCard />
                </CardContent>
            </Card>

        </React.Fragment>
    )
}

export default CustomsTemplates