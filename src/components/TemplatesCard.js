import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import VisibilityIcon from '@mui/icons-material/Visibility';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function TemplatesCard() {
    const wwwww = '24%'
    const www = '100%'
    const ww = 160
    const ml = '1%'
    const mr = "0%"
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml, marginBottom: '10px' }}>
                    <CardContent>
                        <img
                            src='Vmi1.png'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}
                        />
                        <Stack direction="row" spacing={1} sx={{ marginBottom: '10px' }}>
                            <Typography gutterBottom variant="h7" component="div">
                                VMTestAPI
                            </Typography>
                            <Chip label="Chip Outlined" sx={{ color: 'red', backgroundColor: '#ffdddd' }} size='small' />
                        </Stack>
                        <Box >
                            <Button variant='contained' startIcon={<PlayArrowIcon />} sx={{ width: '60%', height: '30px', fontSize: '10px' }}>
                                View The Script
                            </Button>
                            <Button variant='outlined' startIcon={<VisibilityIcon />} sx={{ width: '30%', height: '30px', float: 'right', fontSize: '11px' }}>
                                View
                            </Button>
                        </Box>
                    </CardContent>
                </Card>

                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml, marginBottom: '10px' }}>
                    <CardContent>
                        <img
                            src='Vmi2.png'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}
                        />
                        <Stack direction="row" spacing={1} sx={{ marginBottom: '10px' }}>
                            <Typography gutterBottom variant="h7" component="div">
                                Windows12Test
                            </Typography>
                            <Chip label="Chip Outlined" sx={{ color: '#3469ef', backgroundColor: '#e2e7ec' }} size='small' />
                        </Stack>
                        <Box >
                            <Button variant='contained' startIcon={<PlayArrowIcon />} sx={{ width: '60%', height: '30px', fontSize: '10px' }}>
                                View The Script
                            </Button>
                            <Button variant='outlined' startIcon={<VisibilityIcon />} sx={{ width: '30%', height: '30px', float: 'right', fontSize: '11px' }}>
                                View
                            </Button>
                        </Box>
                    </CardContent>
                </Card>


                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml, marginBottom: '10px' }}>
                    <CardContent>
                        <img
                            src='Vmi3.png'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}
                        />
                        <Stack direction="row" spacing={1} sx={{ marginBottom: '10px' }}>
                            <Typography gutterBottom variant="h7" component="div">
                                UbuntuAPI
                            </Typography>
                            <Chip label="Chip Outlined" sx={{ color: 'red', backgroundColor: '#ffdddd' }} size='small' />
                        </Stack>
                        <Box >
                            <Button variant='contained' startIcon={<PlayArrowIcon />} sx={{ width: '60%', height: '30px', fontSize: '10px' }}>
                                View The Script
                            </Button>
                            <Button variant='outlined' startIcon={<VisibilityIcon />} sx={{ width: '30%', height: '30px', float: 'right', fontSize: '11px' }}>
                                View
                            </Button>
                        </Box>
                    </CardContent>
                </Card>

                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml, marginBottom: '10px' }}>
                    <CardContent>
                        <img
                            src='Vmi2.png'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}
                        />
                        <Stack direction="row" spacing={1} sx={{ marginBottom: '10px' }}>
                            <Typography gutterBottom variant="h7" component="div">
                                Win62Test
                            </Typography>
                            <Chip label="Chip Outlined" sx={{ color: '#3469ef', backgroundColor: '#e2e7ec' }} size='small' />
                        </Stack>
                        <Box >
                            <Button variant='contained' startIcon={<PlayArrowIcon />} sx={{ width: '60%', height: '30px', fontSize: '10px' }}>
                                View The Script
                            </Button>
                            <Button variant='outlined' startIcon={<VisibilityIcon />} sx={{ width: '30%', height: '30px', float: 'right', fontSize: '11px' }}>
                                View
                            </Button>
                        </Box>
                    </CardContent>
                </Card>



            </Box>
        </React.Fragment>
    );
}