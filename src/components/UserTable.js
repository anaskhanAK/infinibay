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

export default function UserTable() {
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
            userImage: 'anas.jpg',
            userName: 'anaskhan',
            firstName: 'Anas',
            lastName: 'Khan',
            email: 'anaskhankin1999@gmail.com',
            Access: 'yes'
        },
        {

            id: 2,
            userImage: 'https://s3-alpha-sig.figma.com/img/3e7e/1346/9f9936fa68f41c17b224a071bea60ef2?Expires=1692576000&Signature=PA7sPc4VnhGeI1q1M9UKqSKEQfeGmo7-TiNOzYza6s2cdrnv1lKjAlz7erc8zyGumTyLAzd5zmqr6NrU90dcqEwZ7ZurUbARB6eZDryjlBsQUJjzwEoTxjrFJnzk3c7TiHGk1d8bnCGx9QLm23hPDYLiNyjApZ1ni9BJTrUyiu9UEHa0EI1jYzSTOybVsVD9OFbljAr-GCYzBnQP6KMlLAsbztYnY5Yv-G~pOxnZLO7jfVupGjnl~9HccapzQzKG2N~-ZYfIjlMdPGq6OzjoLfCWZXSsV31bVmZkHFbFewYWT-pNqHMeIx~4RXES5N7SFVLtNwpWY29uQFfTILivtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            userName: 'kristin.watson02',
            firstName: 'Kristin',
            lastName: 'Watson',
            email: 'kwatson002@gmail.com',
            Access: 'yes'
        },
        {
            id: 3,
            userImage: 'https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1692576000&Signature=Q1vgUiS2yysH0w44p4oqRHPMID2akna~phJup6pm6kgDPwFFb9O~hcksEcTA0hOcR8hgWmtJjoKh63QdJUkjacUfhzBdtRdoDsvL09z4j1QoZnfIgpLFO3DkuuAqzOPep5tQdY1uktdmZAmcWYlcsGqi6fy0GPAYT4ZypMIZMbGG6TTtDVJ3y~cKBShWo8KvhJOZZCFZcapYu~-CERD9X0jHHM2DHUHv12ctCz~UptbxIomab0p9wID8ip0dxBBGQhnRd~Lcm9Gj55ur8uzTGyeDaTgOI3r-5PLsa7OvC3aROGjnPzvRPsj8xa-NbGXp-J481ZS-iDRPRj5pppL8aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            userName: 'johnnc001',
            firstName: 'John',
            lastName: 'Cooper',
            email: 'jonnc001@gmail.com',
            Access: 'yes'
        },
        {
            id: 4,
            userImage: 'https://s3-alpha-sig.figma.com/img/7fdc/cc78/3264eedc4fb989984eecbc4058a219f2?Expires=1692576000&Signature=pmxCoubvj0Q48UlrfUMN~DRyzsOWh5YoCzNAmFWWUJss6brFrWq7E~-NrmlOZBNcZZU17E7URm5KkcJYSFS7xOG1lhSlYMV-0Em6CsvaexDsDJpse2SRzzuq13-gHoZX8rDWrqc6QkmsIi4nO4WhL9q1XuXcy~7OMku-MldXDokvUDtRAmQa53uzw9g47bj6X~eNZQoB3tJvu~UN1L~1F93HHqjqM~84FgPaAnafuC3yRhKnPPynwVfkU3FKk6maYQhsOudmHquRZv~TG966l~dZ7jabyEilHgP0oN2l2TY0Zbk3VpyYv6RC1T3Rtvx~~I3pBwxkMrG4NnjCla3uSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            userName: 'jones.jacob23',
            firstName: 'Jacob',
            lastName: 'Jones',
            email: 'jjones003@gmail.com',
            Access: 'yes'
        },
        {
            id: 5,
            userImage: 'anas.jpg',
            userName: 'anaskhan',
            firstName: 'Anas',
            lastName: 'Khan',
            email: 'anaskhankin1999@gmail.com',
            Access: 'yes'
        },
        {

            id: 6,
            userImage: 'https://s3-alpha-sig.figma.com/img/3e7e/1346/9f9936fa68f41c17b224a071bea60ef2?Expires=1692576000&Signature=PA7sPc4VnhGeI1q1M9UKqSKEQfeGmo7-TiNOzYza6s2cdrnv1lKjAlz7erc8zyGumTyLAzd5zmqr6NrU90dcqEwZ7ZurUbARB6eZDryjlBsQUJjzwEoTxjrFJnzk3c7TiHGk1d8bnCGx9QLm23hPDYLiNyjApZ1ni9BJTrUyiu9UEHa0EI1jYzSTOybVsVD9OFbljAr-GCYzBnQP6KMlLAsbztYnY5Yv-G~pOxnZLO7jfVupGjnl~9HccapzQzKG2N~-ZYfIjlMdPGq6OzjoLfCWZXSsV31bVmZkHFbFewYWT-pNqHMeIx~4RXES5N7SFVLtNwpWY29uQFfTILivtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            userName: 'kristin.watson02',
            firstName: 'Kristin',
            lastName: 'Watson',
            email: 'kwatson002@gmail.com',
            Access: 'yes'
        },
        {
            id: 7,
            userImage: 'https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1692576000&Signature=Q1vgUiS2yysH0w44p4oqRHPMID2akna~phJup6pm6kgDPwFFb9O~hcksEcTA0hOcR8hgWmtJjoKh63QdJUkjacUfhzBdtRdoDsvL09z4j1QoZnfIgpLFO3DkuuAqzOPep5tQdY1uktdmZAmcWYlcsGqi6fy0GPAYT4ZypMIZMbGG6TTtDVJ3y~cKBShWo8KvhJOZZCFZcapYu~-CERD9X0jHHM2DHUHv12ctCz~UptbxIomab0p9wID8ip0dxBBGQhnRd~Lcm9Gj55ur8uzTGyeDaTgOI3r-5PLsa7OvC3aROGjnPzvRPsj8xa-NbGXp-J481ZS-iDRPRj5pppL8aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            userName: 'johnnc001',
            firstName: 'John',
            lastName: 'Cooper',
            email: 'jonnc001@gmail.com',
            Access: 'yes'
        },
        {
            id: 8,
            userImage: 'https://s3-alpha-sig.figma.com/img/7fdc/cc78/3264eedc4fb989984eecbc4058a219f2?Expires=1692576000&Signature=pmxCoubvj0Q48UlrfUMN~DRyzsOWh5YoCzNAmFWWUJss6brFrWq7E~-NrmlOZBNcZZU17E7URm5KkcJYSFS7xOG1lhSlYMV-0Em6CsvaexDsDJpse2SRzzuq13-gHoZX8rDWrqc6QkmsIi4nO4WhL9q1XuXcy~7OMku-MldXDokvUDtRAmQa53uzw9g47bj6X~eNZQoB3tJvu~UN1L~1F93HHqjqM~84FgPaAnafuC3yRhKnPPynwVfkU3FKk6maYQhsOudmHquRZv~TG966l~dZ7jabyEilHgP0oN2l2TY0Zbk3VpyYv6RC1T3Rtvx~~I3pBwxkMrG4NnjCla3uSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            userName: 'jones.jacob23',
            firstName: 'Jacob',
            lastName: 'Jones',
            email: 'jjones003@gmail.com',
            Access: 'yes'
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
                            <TableCell sx={{ width: '30%' }}>
                                <strong>
                                    UsreName
                                </strong>
                            </TableCell>
                            <TableCell sx={{ width: '10%' }}>
                                <strong>
                                    First Name
                                </strong>
                            </TableCell>
                            <TableCell sx={{ width: '10%' }}>
                                <strong>
                                    Last Name
                                </strong>
                            </TableCell>
                            <TableCell sx={{ width: '15%' }}>
                                <strong>
                                    Email
                                </strong>
                            </TableCell>
                            <TableCell sx={{ width: '20%' }}>
                                <strong>
                                    VMs Access Granted
                                </strong>
                            </TableCell>
                            <TableCell sx={{ width: '10%' }}>
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
                                    <TableCell sx={{ width: '30%' }}>
                                        <Stack direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar sx={{ marginRight: '5%' }} alt='User Image' src={value.userImage} fontSize='small' />{value.userName}
                                        </Stack>
                                    </TableCell>
                                    <TableCell sx={{ width: '10%' }}>
                                        {value.firstName}
                                    </TableCell>
                                    <TableCell sx={{ width: '10%' }}>
                                        {value.lastName}
                                    </TableCell>
                                    <TableCell sx={{ width: '15%' }}>
                                        {value.email}
                                    </TableCell>
                                    <TableCell sx={{ width: '15%' }}>
                                        {value.Access}
                                    </TableCell>
                                    <TableCell sx={{ width: '10%' }}>
                                        <Stack direction='row' sx={{}}>
                                            <IconButton size='small' sx={{marginRight:"20px"}}>
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