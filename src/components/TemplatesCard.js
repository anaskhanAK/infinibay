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
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Card sx={{ width: wwwww, marginRight: mr, marginLeft: ml, marginBottom: '10px' }}>
                    <CardContent>
                        <img
                            src='https://s3-alpha-sig.figma.com/img/342f/555b/21ccf059b5d57740f6bca68da55a43f8?Expires=1692576000&Signature=oDARrRjHC9I4Yo1RD6lGEmlIXFyOQxysyzf6HRmOsNsubcEOmaHy2fVOFBjzptmD9lnRLFbmV--jSSPqd4ZAIWYocm14rE~Lmc-2hb~Yh9pluBDegiJFLa93O0wgQlVzPzjmJTs~PsnxNx3fQ2j2sIOuwbq9LE0WnYJDtpsVnJagfwo46QikmT20Eq2sElkmc1FqRmdntzB-W5d7eTZgdCyH9QmOJsYiVjeOHAXwbIoRpHkgZiBrSTAhjAoU9hG~0uriL1BOG3744RcifxjhUv18qhCLgaGgwCvdpHc-OT6cFcATGD1kC9cuAAmlvaTWKTFOPtI5mBpNY6IrHxYJUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
                            src='https://s3-alpha-sig.figma.com/img/908e/f3ec/c8072dd96d6142bcfb3c2c1989e5a29b?Expires=1692576000&Signature=mAT4a7qxC1ihRIiNAIz45JCHRCKz5MraHzPmhZ2qzy2Hw2nWTPAXk1oDMeq2W4YBEiGMXlLWt312v2rAtY4XAlIHabXw4mj8IYneJZfdoAbMEuXKAjaF6BSXzR2DLlVs40zayH61Wtd9bthy5DzgrLiNRW8ftMkwLv-jNXNpDb8i3tIqnL30hatm2N7sXBCuhZRJd52buqOnnwLMI~cRJnUuRcJI0BCmzkuttTwX4G9pGWqMOE2bdXFgPX89yK4A-ZrZSRakbewgVwuiMExrqqVFrngTYyAJH85SIpKsXwyZidV54UBQa4VFXI9CoI~O2Q9uTv-WyBB13pMsSvjxmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
                            src='https://s3-alpha-sig.figma.com/img/33f2/10db/286d14df6662b5ed10b01d32c367485f?Expires=1692576000&Signature=P3lG9K1lR8BFySb3RuI-94OVkMlxpQ~0NhyC~zD4e5oC22ZUwHhJTPoW3Fzf9x8vHIao1uBxKprE5~RZdoGLAsyYtRHVDC83wZ~Wc7QRVZkl~mtXgjLxDVj55qARGjXVnWBN3-2dkbvlZxQzwWFC5-qJZ5rRIDoUaDUsLxoidHYyL3MJVVSgyhC4X3wu-NlDX4AwEE87BOO3hLhJMfF5GjP0R-QEs-wbIrI3Fv2irsHvtQR5txvc9G3LeZSLCrcxixRBnulAmglMMR~OVbL1DN6cYBJW9qcxwWf6XI6HHKeBcYGnAUILRKScqPVQWglpReghLBcu1EwqRRE~s7tG6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
                            src='https://s3-alpha-sig.figma.com/img/908e/f3ec/c8072dd96d6142bcfb3c2c1989e5a29b?Expires=1692576000&Signature=mAT4a7qxC1ihRIiNAIz45JCHRCKz5MraHzPmhZ2qzy2Hw2nWTPAXk1oDMeq2W4YBEiGMXlLWt312v2rAtY4XAlIHabXw4mj8IYneJZfdoAbMEuXKAjaF6BSXzR2DLlVs40zayH61Wtd9bthy5DzgrLiNRW8ftMkwLv-jNXNpDb8i3tIqnL30hatm2N7sXBCuhZRJd52buqOnnwLMI~cRJnUuRcJI0BCmzkuttTwX4G9pGWqMOE2bdXFgPX89yK4A-ZrZSRakbewgVwuiMExrqqVFrngTYyAJH85SIpKsXwyZidV54UBQa4VFXI9CoI~O2Q9uTv-WyBB13pMsSvjxmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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