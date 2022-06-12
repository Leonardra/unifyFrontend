import { Grid, Paper, InputBase, IconButton, Drawer, Box, Typography, Stack, useMediaQuery, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import LogoIcon from "../../../assets/svg/Logo";
import { Link } from 'react-router-dom';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import styled from "styled-components";


export default function Header() {
    const page = useLocation().pathname;
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid
            container
            justifyContent="space-between"
            alignItem="center"
            sx={{ borderBottom: '1px #F0F2F7 solid' }}
            px={10}
            py={1}
        >
            <Grid item>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <LogoIcon />
                        <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
                            Unify
                        </h1>
                    </Stack>
                </Link>
            </Grid>
            <Grid item>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google"
                        inputProps={{ 'aria-label': 'search google' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
        </Grid>
    );
}
