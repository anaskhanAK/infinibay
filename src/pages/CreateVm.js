import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Stepper, Step, StepLabel, TextField, } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { OutlinedInput } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



const CreateButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#FF6A69',
    '&:hover': {
        backgroundColor: '#FF6A69',
    },
}));

const steps = ['Gernal', 'Storage', 'Networking', 'Advance', 'Review & Create VM'];

export default function CreateModal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [Ops, setOps] = React.useState('Windows');
    const [openOp, setOpenOp] = React.useState(false);


    const handleChangeOp = (event) => {
        setOps(event.target.value);
    };

    const handleOpenOp = () => {
        setOpenOp(true);
    };

    const handleCloseOp = () => {
        setOpenOp(false);
    };



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const isStepOptional = (step) => {
        // return step === 2;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <CreateButton variant="contained" onClick={handleClickOpen} >
                Create a Vm Now
            </CreateButton>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth='1000px'
            >
                <DialogTitle id="responsive-dialog-title">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant='h6'>
                            Virtual Machine Details
                        </Typography>
                        <IconButton aria-label="close" sx={{ float: 'right' }} onClick={handleClose} autoFocus>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                if (isStepOptional(index)) {
                                    labelProps.optional = (
                                        <Typography variant="caption">Optional</Typography>
                                    );
                                }
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>

                                {activeStep === 0 && (
                                    <Box sx={{ width: '900px', height: '520px', p: 2 }}>
                                        <Typography>
                                            <strong>Upload Picture</strong>
                                        </Typography>
                                        <Box>
                                            <img
                                                alt='VmImage'
                                                src='vmd.jpg'
                                                width={200}
                                                height={190}
                                                style={{ borderRadius: '15px', marginTop: '8px' }}
                                            />
                                        </Box>
                                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                            <Box width={{ width: '48%' }}>
                                                <Typography>
                                                    <strong>Name:</strong>
                                                </Typography>
                                                <OutlinedInput placeholder="Enter VM name" sx={{ width: '100%', height: '40px', marginTop: '5px' }} />
                                            </Box>
                                            <Box width={{ width: '48%' }}>
                                                <Typography>
                                                    <strong>Name:</strong>
                                                </Typography>
                                                <Select
                                                    sx={{ width: '100%', height: '40px', marginTop: '5px' }}
                                                    labelId="demo-controlled-open-select-label"
                                                    id="demo-controlled-open-select"
                                                    open={openOp}
                                                    value={Ops}
                                                    onClose={handleCloseOp}
                                                    onOpen={handleOpenOp}
                                                    onChange={handleChangeOp}
                                                >
                                                    <MenuItem value={'Windows'}>Windows</MenuItem>
                                                    <MenuItem value={'Linux'}>Linux</MenuItem>
                                                </Select>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '100%', marginTop: '20px' }}>
                                            <Typography>
                                                <strong>Discription:</strong>
                                            </Typography>
                                            <TextField
                                                placeholder="Enter your message"
                                                sx={{ width: '100%', marginTop: '5px' }}
                                                multiline
                                                rows={4}
                                            />
                                        </Box>
                                    </Box>
                                )}
                                {activeStep === 1 && (
                                    <Box sx={{ width: '900px', height: '520px', p: 2 }}>
                                    </Box>
                                )}
                                {activeStep === 2 && (
                                    <Box sx={{ width: '900px', height: '520px', p: 2 }}>
                                        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                    </Box>
                                )}
                                {activeStep === 3 && (
                                    <Box sx={{ width: '900px', height: '520px', p: 2 }}>
                                        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                    </Box>
                                )}
                                {activeStep === 4 && (
                                    <Box sx={{ width: '900px', height: '520px', p: 2 }}>
                                        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                    </Box>
                                )}

                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    {isStepOptional(activeStep) && (
                                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                            Skip
                                        </Button>
                                    )}

                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>

                        )}
                    </Box>
                </DialogContent>

            </Dialog >
        </div >
    );
}