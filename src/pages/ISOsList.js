import * as React from 'react';
import Box from '@mui/material/Box'
import { Card, CardContent, Button, OutlinedInput } from '@mui/material';
import ISOsTable from '../components/ISOsTable';
import CreateIsoModal from '../components/CreateIsoModal';



export default function ISOsList() {
    return (
        <React.Fragment>
            <Card>
                <CardContent>
                    <Box sx={{ width: '100%', marginBottom:'20px' }}>
                        <OutlinedInput placeholder="Search..." sx={{ height: '35px', width: '350px', marginRight: '20px' }} />
                        <Button variant='contained'> Search </Button>
                        <Box sx={{float:'right'}}>
                            <CreateIsoModal/>
                        </Box>
                    </Box>
                    <ISOsTable />
                </CardContent>
            </Card>

        </React.Fragment>
    )
}