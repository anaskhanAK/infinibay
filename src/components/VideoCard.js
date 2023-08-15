import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function VideoCard() {
    return (
        <Card sx={{p:2}}>
            <CardMedia
                component="img"
                image="https://s3-alpha-sig.figma.com/img/cf2f/0c97/4d7be8dd085c4233904b5d89dc124c10?Expires=1692576000&Signature=l2mwlkUXXKicSsp6hdnzHHVSW-TlkTdU~eX5m2lMr3PbGLkr7q-E2VeoPV8VcQ5if51RxaRWglK9PW-gN0UvR9xZ9lq0QOL-j5E3PQK~jknQrkvmA8WOMw6HnK~rt4rrC5ObG1rKFGEIXWPkQdfoC-BkfSsfq4EHQ2ll7RoFNQMO7nre0nlT4nlrBTuxResJ24CF0VGbzD8qX9c~7J-OKtC0eKBwgMWNO-tQtPR906m6gGbzNTFWYAo6Ri1jARjmi9G-pch1UDwWfXgRQbTNhV5xkRXLzu9knaq0hiEEyvOqXZxEa-IJZYXOWboodw2QxMww4FOOwsmrhbLQT4KJOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="green iguana"
                sx={{ height: '492px' }}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                </Typography>
            </CardContent>
        </Card>
    );
}