import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { styled } from '@mui/material/styles';
import DeleteModal from './DeleteModal';
import VmDetailsModal from './VmDetailsModal';



const ToggleRed = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));

const ToggleBlue = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#3366c0',
    '&:hover': {
        backgroundColor: '#3366c0',
    },
}));



export default function VmCard2() {
    const wwwww = '25%'
    const www = '100%'
    const ww = 160
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>

                <Card sx={{ width: wwwww }}>
                    <CardContent>
                        <img
                            src='https://s3-alpha-sig.figma.com/img/342f/555b/21ccf059b5d57740f6bca68da55a43f8?Expires=1692576000&Signature=oDARrRjHC9I4Yo1RD6lGEmlIXFyOQxysyzf6HRmOsNsubcEOmaHy2fVOFBjzptmD9lnRLFbmV--jSSPqd4ZAIWYocm14rE~Lmc-2hb~Yh9pluBDegiJFLa93O0wgQlVzPzjmJTs~PsnxNx3fQ2j2sIOuwbq9LE0WnYJDtpsVnJagfwo46QikmT20Eq2sElkmc1FqRmdntzB-W5d7eTZgdCyH9QmOJsYiVjeOHAXwbIoRpHkgZiBrSTAhjAoU9hG~0uriL1BOG3744RcifxjhUv18qhCLgaGgwCvdpHc-OT6cFcATGD1kC9cuAAmlvaTWKTFOPtI5mBpNY6IrHxYJUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}
                        />
                        <Typography gutterBottom variant="h6" component="div">
                            Virtual Machine Name
                        </Typography>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>

                            <ToggleBlue variant='contained' size='small' startIcon={<PlayArrowIcon fontSize='small' />} sx={{ fontSize: '11px', height: '30px' }}>
                                Start
                            </ToggleBlue>

                            <VmDetailsModal />
                            <DeleteModal />

                        </Stack>
                    </CardContent>
                </Card>


                <Card sx={{ width: wwwww }}>
                    <CardContent>
                        <img
                            src='https://s3-alpha-sig.figma.com/img/908e/f3ec/c8072dd96d6142bcfb3c2c1989e5a29b?Expires=1692576000&Signature=mAT4a7qxC1ihRIiNAIz45JCHRCKz5MraHzPmhZ2qzy2Hw2nWTPAXk1oDMeq2W4YBEiGMXlLWt312v2rAtY4XAlIHabXw4mj8IYneJZfdoAbMEuXKAjaF6BSXzR2DLlVs40zayH61Wtd9bthy5DzgrLiNRW8ftMkwLv-jNXNpDb8i3tIqnL30hatm2N7sXBCuhZRJd52buqOnnwLMI~cRJnUuRcJI0BCmzkuttTwX4G9pGWqMOE2bdXFgPX89yK4A-ZrZSRakbewgVwuiMExrqqVFrngTYyAJH85SIpKsXwyZidV54UBQa4VFXI9CoI~O2Q9uTv-WyBB13pMsSvjxmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}

                        />
                        <Typography gutterBottom variant="h6" component="div">
                            Virtual Machine Name
                        </Typography>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>

                            <ToggleBlue variant='contained' size='small' startIcon={<PlayArrowIcon fontSize='small' />} sx={{ fontSize: '11px', height: '30px' }}>
                                Start
                            </ToggleBlue>

                            <VmDetailsModal />
                            <DeleteModal />

                        </Stack>
                    </CardContent>
                </Card>


                <Card sx={{ width: wwwww }}>
                    <CardContent>
                        <img
                            src='https://s3-alpha-sig.figma.com/img/33f2/10db/286d14df6662b5ed10b01d32c367485f?Expires=1692576000&Signature=P3lG9K1lR8BFySb3RuI-94OVkMlxpQ~0NhyC~zD4e5oC22ZUwHhJTPoW3Fzf9x8vHIao1uBxKprE5~RZdoGLAsyYtRHVDC83wZ~Wc7QRVZkl~mtXgjLxDVj55qARGjXVnWBN3-2dkbvlZxQzwWFC5-qJZ5rRIDoUaDUsLxoidHYyL3MJVVSgyhC4X3wu-NlDX4AwEE87BOO3hLhJMfF5GjP0R-QEs-wbIrI3Fv2irsHvtQR5txvc9G3LeZSLCrcxixRBnulAmglMMR~OVbL1DN6cYBJW9qcxwWf6XI6HHKeBcYGnAUILRKScqPVQWglpReghLBcu1EwqRRE~s7tG6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}

                        />
                        <Typography gutterBottom variant="h6" component="div">
                            Virtual Machine Name
                        </Typography>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>

                            <ToggleRed variant='contained' size='small' startIcon={<StopIcon fontSize='small' />} sx={{ fontSize: '11px', height: '30px' }}>
                                Stop
                            </ToggleRed>

                            <VmDetailsModal />
                            <DeleteModal />

                        </Stack>
                    </CardContent>
                </Card>


                <Card sx={{ width: wwwww }}>
                    <CardContent>
                        <img
                            src='https://s3-alpha-sig.figma.com/img/908e/f3ec/c8072dd96d6142bcfb3c2c1989e5a29b?Expires=1692576000&Signature=mAT4a7qxC1ihRIiNAIz45JCHRCKz5MraHzPmhZ2qzy2Hw2nWTPAXk1oDMeq2W4YBEiGMXlLWt312v2rAtY4XAlIHabXw4mj8IYneJZfdoAbMEuXKAjaF6BSXzR2DLlVs40zayH61Wtd9bthy5DzgrLiNRW8ftMkwLv-jNXNpDb8i3tIqnL30hatm2N7sXBCuhZRJd52buqOnnwLMI~cRJnUuRcJI0BCmzkuttTwX4G9pGWqMOE2bdXFgPX89yK4A-ZrZSRakbewgVwuiMExrqqVFrngTYyAJH85SIpKsXwyZidV54UBQa4VFXI9CoI~O2Q9uTv-WyBB13pMsSvjxmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            width={www}
                            height={ww}
                            alt='vmImage'
                            style={{ borderRadius: '8px' }}

                        />
                        <Typography gutterBottom variant="h6" component="div">
                            Virtual Machine Name
                        </Typography>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>

                            <ToggleBlue variant='contained' size='small' startIcon={<PlayArrowIcon fontSize='small' />} sx={{ fontSize: '11px', height: '30px' }}>
                                Start
                            </ToggleBlue>

                            <VmDetailsModal />
                            <DeleteModal />

                        </Stack>
                    </CardContent>
                </Card>

            </Box>
        </React.Fragment>
    );
}