import React from "react"
import SdCardOutlinedIcon from '@mui/icons-material/SdCardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';

export const AdminBarData = [
    {
        title: "Dashboard",
        link: "/dashboard",
        icon: <DashboardOutlinedIcon />
    },

    {
        title: "Virtual Machine",
        link: "/vm-list",
        icon: <HomeOutlinedIcon /> 
    },

    {
        title: "Customs Scripts",
        link: "/customs-scripts",
        icon: <TerminalOutlinedIcon />
    },

    {
        title: "Customs Templates",
        link: "/customs-templates",
        icon: <VerticalSplitOutlinedIcon />
    },

    {
        title: "Storage",
        link: "/storage",
        icon: <SdCardOutlinedIcon />
    },

    {
        title: "Users",
        link: "/users",
        icon: <GroupOutlinedIcon />
    },

    {
        title: "ISOs",
        link: "/iso-list",
        icon: <GppGoodOutlinedIcon />
    },

    {
        title: "Statistics",
        link: "/statistics",
        icon: <SsidChartOutlinedIcon />
    },


]

export const UserBarData = [
    {
        title: "Dashboard",
        link: "/dashboard",
        icon: <i className="bx bx-home-circle" />
    },

    {
        title: "VMs",
        link: "/vmlist",
        icon: <i className="mdi mdi-desktop-classic" />
    },

    {
        title: "ISOs",
        link: "/isofilelist",
        icon: <i className="mdi mdi-disc" />
    },
    
    {
        title: "Storage",
        link: "/storage",
        icon: <i className="bx bxs-hdd" />
    },
]

