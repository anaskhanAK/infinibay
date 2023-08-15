import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';




// const columns = [
//     {
//         id: 'name',
//         label: <Checkbox defaultChecked />,
//         minWidth: '4px'
//     },
//     {
//         id: 'code',
//         label: 'Username',
//         minWidth: 100,
//         align: 'left'
//     },
//     {
//         id: 'population',
//         label: 'Population',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'size',
//         label: 'Size\u00a0(km\u00b2)',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'density',
//         label: 'Density',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toFixed(2),
//     },
// ];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData(<Checkbox defaultChecked />, 'IN', 1324171354, 3287263),
    createData(<Checkbox defaultChecked />, 'CN', 1403500365, 9596961),
    createData(<Checkbox defaultChecked />, 'IT', 60483973, 301340),
    createData(<Checkbox defaultChecked />, 'US', 327167434, 9833520),
    createData(<Checkbox defaultChecked />, 'CA', 37602103, 9984670),
    createData(<Checkbox defaultChecked />, 'AU', 25475400, 7692024),
    createData(<Checkbox defaultChecked />, 'DE', 83019200, 357578),
    createData(<Checkbox defaultChecked />, 'IE', 4857000, 70273),
    createData(<Checkbox defaultChecked />, 'MX', 126577691, 1972550),
    createData(<Checkbox defaultChecked />, 'JP', 126317000, 377973),
    createData(<Checkbox defaultChecked />, 'FR', 67022000, 640679),
    createData(<Checkbox defaultChecked />, 'GB', 67545757, 242495),
    createData(<Checkbox defaultChecked />, 'RU', 146793744, 17098246),
    createData(<Checkbox defaultChecked />, 'NG', 200962417, 923768),
    createData(<Checkbox defaultChecked />, 'BR', 210147125, 8515767),
];

export default function ISOsTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const data = [
        {
            id: 1,
            Image: 'https://s3-alpha-sig.figma.com/img/342f/555b/21ccf059b5d57740f6bca68da55a43f8?Expires=1692576000&Signature=oDARrRjHC9I4Yo1RD6lGEmlIXFyOQxysyzf6HRmOsNsubcEOmaHy2fVOFBjzptmD9lnRLFbmV--jSSPqd4ZAIWYocm14rE~Lmc-2hb~Yh9pluBDegiJFLa93O0wgQlVzPzjmJTs~PsnxNx3fQ2j2sIOuwbq9LE0WnYJDtpsVnJagfwo46QikmT20Eq2sElkmc1FqRmdntzB-W5d7eTZgdCyH9QmOJsYiVjeOHAXwbIoRpHkgZiBrSTAhjAoU9hG~0uriL1BOG3744RcifxjhUv18qhCLgaGgwCvdpHc-OT6cFcATGD1kC9cuAAmlvaTWKTFOPtI5mBpNY6IrHxYJUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            Name: 'ubuntu_22_04_1_live_server_amd64.iso',
            fileType: 'Linux',
            FileSize: '1.8 GB',
        },
        {
            id: 2,
            Image: 'https://s3-alpha-sig.figma.com/img/908e/f3ec/c8072dd96d6142bcfb3c2c1989e5a29b?Expires=1692576000&Signature=mAT4a7qxC1ihRIiNAIz45JCHRCKz5MraHzPmhZ2qzy2Hw2nWTPAXk1oDMeq2W4YBEiGMXlLWt312v2rAtY4XAlIHabXw4mj8IYneJZfdoAbMEuXKAjaF6BSXzR2DLlVs40zayH61Wtd9bthy5DzgrLiNRW8ftMkwLv-jNXNpDb8i3tIqnL30hatm2N7sXBCuhZRJd52buqOnnwLMI~cRJnUuRcJI0BCmzkuttTwX4G9pGWqMOE2bdXFgPX89yK4A-ZrZSRakbewgVwuiMExrqqVFrngTYyAJH85SIpKsXwyZidV54UBQa4VFXI9CoI~O2Q9uTv-WyBB13pMsSvjxmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            Name: 'windows_22_04_1_live_server_amd64.ws',
            fileType: 'Windows',
            FileSize: '1.8 GB',
        },
        {
            id: 3,
            Image: 'https://s3-alpha-sig.figma.com/img/33f2/10db/286d14df6662b5ed10b01d32c367485f?Expires=1692576000&Signature=P3lG9K1lR8BFySb3RuI-94OVkMlxpQ~0NhyC~zD4e5oC22ZUwHhJTPoW3Fzf9x8vHIao1uBxKprE5~RZdoGLAsyYtRHVDC83wZ~Wc7QRVZkl~mtXgjLxDVj55qARGjXVnWBN3-2dkbvlZxQzwWFC5-qJZ5rRIDoUaDUsLxoidHYyL3MJVVSgyhC4X3wu-NlDX4AwEE87BOO3hLhJMfF5GjP0R-QEs-wbIrI3Fv2irsHvtQR5txvc9G3LeZSLCrcxixRBnulAmglMMR~OVbL1DN6cYBJW9qcxwWf6XI6HHKeBcYGnAUILRKScqPVQWglpReghLBcu1EwqRRE~s7tG6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            Name: 'ubuntu_22_04_1_live_server_amd64.iso',
            fileType: 'Linux',
            FileSize: '1.8 GB',
        },
        {
            id: 4,
            Image: 'https://s3-alpha-sig.figma.com/img/342f/555b/21ccf059b5d57740f6bca68da55a43f8?Expires=1692576000&Signature=oDARrRjHC9I4Yo1RD6lGEmlIXFyOQxysyzf6HRmOsNsubcEOmaHy2fVOFBjzptmD9lnRLFbmV--jSSPqd4ZAIWYocm14rE~Lmc-2hb~Yh9pluBDegiJFLa93O0wgQlVzPzjmJTs~PsnxNx3fQ2j2sIOuwbq9LE0WnYJDtpsVnJagfwo46QikmT20Eq2sElkmc1FqRmdntzB-W5d7eTZgdCyH9QmOJsYiVjeOHAXwbIoRpHkgZiBrSTAhjAoU9hG~0uriL1BOG3744RcifxjhUv18qhCLgaGgwCvdpHc-OT6cFcATGD1kC9cuAAmlvaTWKTFOPtI5mBpNY6IrHxYJUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            Name: 'ubuntu_22_04_1_live_server_amd64.iso',
            fileType: 'Linux',
            FileSize: '1.8 GB',
        },
        {
            id: 5,
            Image: 'https://s3-alpha-sig.figma.com/img/908e/f3ec/c8072dd96d6142bcfb3c2c1989e5a29b?Expires=1692576000&Signature=mAT4a7qxC1ihRIiNAIz45JCHRCKz5MraHzPmhZ2qzy2Hw2nWTPAXk1oDMeq2W4YBEiGMXlLWt312v2rAtY4XAlIHabXw4mj8IYneJZfdoAbMEuXKAjaF6BSXzR2DLlVs40zayH61Wtd9bthy5DzgrLiNRW8ftMkwLv-jNXNpDb8i3tIqnL30hatm2N7sXBCuhZRJd52buqOnnwLMI~cRJnUuRcJI0BCmzkuttTwX4G9pGWqMOE2bdXFgPX89yK4A-ZrZSRakbewgVwuiMExrqqVFrngTYyAJH85SIpKsXwyZidV54UBQa4VFXI9CoI~O2Q9uTv-WyBB13pMsSvjxmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            Name: 'windows_22_04_1_live_server_amd64.ws',
            fileType: 'Windows',
            FileSize: '1.8 GB',
        },
        {
            id: 6,
            Image: 'https://s3-alpha-sig.figma.com/img/33f2/10db/286d14df6662b5ed10b01d32c367485f?Expires=1692576000&Signature=P3lG9K1lR8BFySb3RuI-94OVkMlxpQ~0NhyC~zD4e5oC22ZUwHhJTPoW3Fzf9x8vHIao1uBxKprE5~RZdoGLAsyYtRHVDC83wZ~Wc7QRVZkl~mtXgjLxDVj55qARGjXVnWBN3-2dkbvlZxQzwWFC5-qJZ5rRIDoUaDUsLxoidHYyL3MJVVSgyhC4X3wu-NlDX4AwEE87BOO3hLhJMfF5GjP0R-QEs-wbIrI3Fv2irsHvtQR5txvc9G3LeZSLCrcxixRBnulAmglMMR~OVbL1DN6cYBJW9qcxwWf6XI6HHKeBcYGnAUILRKScqPVQWglpReghLBcu1EwqRRE~s7tG6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            Name: 'ubuntu_22_04_1_live_server_amd64.iso',
            fileType: 'Linux',
            FileSize: '1.8 GB',
        },
        {
            id: 7,
            Image: 'https://s3-alpha-sig.figma.com/img/342f/555b/21ccf059b5d57740f6bca68da55a43f8?Expires=1692576000&Signature=oDARrRjHC9I4Yo1RD6lGEmlIXFyOQxysyzf6HRmOsNsubcEOmaHy2fVOFBjzptmD9lnRLFbmV--jSSPqd4ZAIWYocm14rE~Lmc-2hb~Yh9pluBDegiJFLa93O0wgQlVzPzjmJTs~PsnxNx3fQ2j2sIOuwbq9LE0WnYJDtpsVnJagfwo46QikmT20Eq2sElkmc1FqRmdntzB-W5d7eTZgdCyH9QmOJsYiVjeOHAXwbIoRpHkgZiBrSTAhjAoU9hG~0uriL1BOG3744RcifxjhUv18qhCLgaGgwCvdpHc-OT6cFcATGD1kC9cuAAmlvaTWKTFOPtI5mBpNY6IrHxYJUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            Name: 'ubuntu_22_04_1_live_server_amd64.iso',
            fileType: 'Linux',
            FileSize: '1.8 GB',
        },
        {
            id: 8,
            Image: 'https://s3-alpha-sig.figma.com/img/908e/f3ec/c8072dd96d6142bcfb3c2c1989e5a29b?Expires=1692576000&Signature=mAT4a7qxC1ihRIiNAIz45JCHRCKz5MraHzPmhZ2qzy2Hw2nWTPAXk1oDMeq2W4YBEiGMXlLWt312v2rAtY4XAlIHabXw4mj8IYneJZfdoAbMEuXKAjaF6BSXzR2DLlVs40zayH61Wtd9bthy5DzgrLiNRW8ftMkwLv-jNXNpDb8i3tIqnL30hatm2N7sXBCuhZRJd52buqOnnwLMI~cRJnUuRcJI0BCmzkuttTwX4G9pGWqMOE2bdXFgPX89yK4A-ZrZSRakbewgVwuiMExrqqVFrngTYyAJH85SIpKsXwyZidV54UBQa4VFXI9CoI~O2Q9uTv-WyBB13pMsSvjxmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            Name: 'windows_22_04_1_live_server_amd64.ws',
            fileType: 'Windows',
            FileSize: '1.8 GB',
        },
        {
            id: 9,
            Image: 'https://s3-alpha-sig.figma.com/img/33f2/10db/286d14df6662b5ed10b01d32c367485f?Expires=1692576000&Signature=P3lG9K1lR8BFySb3RuI-94OVkMlxpQ~0NhyC~zD4e5oC22ZUwHhJTPoW3Fzf9x8vHIao1uBxKprE5~RZdoGLAsyYtRHVDC83wZ~Wc7QRVZkl~mtXgjLxDVj55qARGjXVnWBN3-2dkbvlZxQzwWFC5-qJZ5rRIDoUaDUsLxoidHYyL3MJVVSgyhC4X3wu-NlDX4AwEE87BOO3hLhJMfF5GjP0R-QEs-wbIrI3Fv2irsHvtQR5txvc9G3LeZSLCrcxixRBnulAmglMMR~OVbL1DN6cYBJW9qcxwWf6XI6HHKeBcYGnAUILRKScqPVQWglpReghLBcu1EwqRRE~s7tG6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            Name: 'ubuntu_22_04_1_live_server_amd64.iso',
            fileType: 'Linux',
            FileSize: '1.8 GB',
        },

    ]

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{}}>
                <Table aria-label="sticky table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#bed9f4' }}>
                            <TableCell sx={{ width: '5%' }}>
                                <Checkbox size='small' />
                            </TableCell>
                            <TableCell sx={{ width: '35%' }}>
                                <strong>
                                    Full Name
                                </strong>
                            </TableCell>
                            <TableCell sx={{ width: '20%' }}>
                                <strong>
                                    File Name
                                </strong>
                            </TableCell>
                            <TableCell sx={{ width: '20%' }}>
                                <strong>
                                    File Size
                                </strong>
                            </TableCell>
                            <TableCell sx={{ width: '20%' }}>
                                <strong>
                                    Action
                                </strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((value, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell sx={{ width: '5%' }}>
                                        <Checkbox size='small' />
                                    </TableCell>
                                    <TableCell sx={{ width: '45%' }}>
                                        <Stack direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar variant="rounded" sx={{ marginRight: '5%' }} alt='User Image' src={value.Image} fontSize='small' />{value.Name}
                                        </Stack>
                                    </TableCell>
                                    <TableCell sx={{ width: '20%' }}>
                                        {value.fileType}
                                    </TableCell>
                                    <TableCell sx={{ width: '20%' }}>
                                        {value.FileSize}
                                    </TableCell>

                                    <TableCell sx={{ width: '10%' }}>
                                        <Stack direction='row' sx={{}}>
                                            <IconButton size='small' sx={{ marginRight: "20px" }}>
                                                <EditIcon fontSize='small' sx={{ color: '#EA7600' }} />
                                            </IconButton>
                                            <IconButton size='small' >
                                                <DeleteIcon fontSize='small' sx={{ color: '#FF1414' }} />
                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}