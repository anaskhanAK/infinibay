import * as React from 'react';
import Box from '@mui/material/Box'
import { Card, CardContent, Button, OutlinedInput } from '@mui/material';
import UserTable from '../components/UserTable';
import CreateAccountModal from '../components/CreateAccountModal';




export default function UserList() {
    return (
        <React.Fragment>
            <Card>
                <CardContent>
                    <Box sx={{ width: '100%', marginBottom:'20px' }}>
                        <OutlinedInput placeholder="Search..." sx={{ height: '35px', width: '350px', marginRight: '20px' }} />
                        <Button variant='contained'> Search </Button>
                        <Box sx={{float:'right'}}>
                            <CreateAccountModal/>
                        </Box>
                    </Box>
                    <UserTable />
                </CardContent>
            </Card>

        </React.Fragment>
    )
}