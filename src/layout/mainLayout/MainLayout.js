import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import Header from './header/Header';
import SideBar from './sideBar/Sidebar';
// ==============================|| MAIN LAYOUT ||============================== //

function MainLayout() {
    return (
        <Box sx={{ backgroundColor: '#FAFBFC' }}>
            <Header />
            <Grid container>
                <Grid item lg={3} xl={2.5} sx={{ borderRight: '1px #F0F2F7 solid' }}>
                    <SideBar />
                </Grid>
                <Grid item lg={9} xl={9.5}>
                    <Grid container justifyContent="center" padding="5%">
                        <Outlet />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainLayout;
