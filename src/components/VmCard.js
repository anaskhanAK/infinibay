import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, CardActions, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';



export default function VmCard() {

    // const handleStart = () => {
    //     console.log("click ")
    // }

    return (
        <React.Fragment>
            <Grid container spacing={0} sx={{marginTop:'10px'}}>
                <Grid xs={3}>
                    <Card sx={{ width: '100%', borderRadius: '10px', p: 1}}>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: '100%', borderRadius: '10px' }}
                                    image="https://s3-alpha-sig.figma.com/img/342f/555b/21ccf059b5d57740f6bca68da55a43f8?Expires=1692576000&Signature=oDARrRjHC9I4Yo1RD6lGEmlIXFyOQxysyzf6HRmOsNsubcEOmaHy2fVOFBjzptmD9lnRLFbmV--jSSPqd4ZAIWYocm14rE~Lmc-2hb~Yh9pluBDegiJFLa93O0wgQlVzPzjmJTs~PsnxNx3fQ2j2sIOuwbq9LE0WnYJDtpsVnJagfwo46QikmT20Eq2sElkmc1FqRmdntzB-W5d7eTZgdCyH9QmOJsYiVjeOHAXwbIoRpHkgZiBrSTAhjAoU9hG~0uriL1BOG3744RcifxjhUv18qhCLgaGgwCvdpHc-OT6cFcATGD1kC9cuAAmlvaTWKTFOPtI5mBpNY6IrHxYJUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="Live from space album cover"
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h6" component="div" m={1}>
                                    Virtual Machine Name
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <PlayArrowIcon sx={{ marginLeft: '-10px' }} /> Start
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <VisibilityIcon sx={{ marginLeft: '-10px', marginRight: '5px', fontSize: '20px' }} /> View
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <DeleteIcon sx={{ fontSize: '18px' }} /> Delete
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <Grid xs={3}>
                    <Card sx={{ width: '100%', borderRadius: '10px', p: 1 }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: '100%', borderRadius: '10px' }}
                                    image="https://s3-alpha-sig.figma.com/img/342f/555b/21ccf059b5d57740f6bca68da55a43f8?Expires=1692576000&Signature=oDARrRjHC9I4Yo1RD6lGEmlIXFyOQxysyzf6HRmOsNsubcEOmaHy2fVOFBjzptmD9lnRLFbmV--jSSPqd4ZAIWYocm14rE~Lmc-2hb~Yh9pluBDegiJFLa93O0wgQlVzPzjmJTs~PsnxNx3fQ2j2sIOuwbq9LE0WnYJDtpsVnJagfwo46QikmT20Eq2sElkmc1FqRmdntzB-W5d7eTZgdCyH9QmOJsYiVjeOHAXwbIoRpHkgZiBrSTAhjAoU9hG~0uriL1BOG3744RcifxjhUv18qhCLgaGgwCvdpHc-OT6cFcATGD1kC9cuAAmlvaTWKTFOPtI5mBpNY6IrHxYJUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="Live from space album cover"
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h6" component="div" m={1}>
                                    Virtual Machine Name
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <PlayArrowIcon sx={{ marginLeft: '-10px' }} /> Start
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <VisibilityIcon sx={{ marginLeft: '-10px', marginRight: '5px', fontSize: '20px' }} /> View
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <DeleteIcon sx={{ fontSize: '18px' }} /> Delete
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <Grid xs={3}>
                    <Card sx={{ width: '100%', borderRadius: '10px', p: 1 }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: '100%', borderRadius: '10px' }}
                                    image="https://s3-alpha-sig.figma.com/img/342f/555b/21ccf059b5d57740f6bca68da55a43f8?Expires=1692576000&Signature=oDARrRjHC9I4Yo1RD6lGEmlIXFyOQxysyzf6HRmOsNsubcEOmaHy2fVOFBjzptmD9lnRLFbmV--jSSPqd4ZAIWYocm14rE~Lmc-2hb~Yh9pluBDegiJFLa93O0wgQlVzPzjmJTs~PsnxNx3fQ2j2sIOuwbq9LE0WnYJDtpsVnJagfwo46QikmT20Eq2sElkmc1FqRmdntzB-W5d7eTZgdCyH9QmOJsYiVjeOHAXwbIoRpHkgZiBrSTAhjAoU9hG~0uriL1BOG3744RcifxjhUv18qhCLgaGgwCvdpHc-OT6cFcATGD1kC9cuAAmlvaTWKTFOPtI5mBpNY6IrHxYJUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="Live from space album cover"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h6" component="div" m={1}>
                                    Virtual Machine Name
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <PlayArrowIcon sx={{ marginLeft: '-10px' }} /> Start
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <VisibilityIcon sx={{ marginLeft: '-10px', marginRight: '5px', fontSize: '20px' }} /> View
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <DeleteIcon sx={{ fontSize: '18px' }} /> Delete
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <Grid xs={3}>
                    <Card sx={{ width: '100%', borderRadius: '10px', p: 1 }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: '100%', borderRadius: '10px' }}
                                    image="https://s3-alpha-sig.figma.com/img/342f/555b/21ccf059b5d57740f6bca68da55a43f8?Expires=1692576000&Signature=oDARrRjHC9I4Yo1RD6lGEmlIXFyOQxysyzf6HRmOsNsubcEOmaHy2fVOFBjzptmD9lnRLFbmV--jSSPqd4ZAIWYocm14rE~Lmc-2hb~Yh9pluBDegiJFLa93O0wgQlVzPzjmJTs~PsnxNx3fQ2j2sIOuwbq9LE0WnYJDtpsVnJagfwo46QikmT20Eq2sElkmc1FqRmdntzB-W5d7eTZgdCyH9QmOJsYiVjeOHAXwbIoRpHkgZiBrSTAhjAoU9hG~0uriL1BOG3744RcifxjhUv18qhCLgaGgwCvdpHc-OT6cFcATGD1kC9cuAAmlvaTWKTFOPtI5mBpNY6IrHxYJUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="Live from space album cover"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h6" component="div" m={1}>
                                    Virtual Machine Name
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <PlayArrowIcon sx={{ marginLeft: '-10px' }} /> Start
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <VisibilityIcon sx={{ marginLeft: '-10px', marginRight: '5px', fontSize: '20px' }} /> View
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant='contained' sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                                                <DeleteIcon sx={{ fontSize: '18px' }} /> Delete
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>


            </Grid>
        </React.Fragment>
    );
}