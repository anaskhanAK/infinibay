import * as React from 'react';
import Box from '@mui/material/Box'
import { Card, CardContent, Typography } from '@mui/material';
import StorageCard from '../components/StorageCard';
import CreateStorageModal from '../components/CreateStorageModal';



const Storage = () => {

    return (
        <React.Fragment>
            <Card sx={{ p: 1, borderRadius:'10px' }}>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom:'20px' }}>
                        <Typography variant="h6"><b>Used Storages</b></Typography>
                        <CreateStorageModal/>
                    </Box>
                    <StorageCard/>
                    <StorageCard/>
                    <StorageCard/>
                </CardContent>
            </Card>

        </React.Fragment>
    )
}

export default Storage