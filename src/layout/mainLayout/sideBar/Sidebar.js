import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Grid, Box, Stack, Typography, Divider, List, ListItemButton, ListItemIcon } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

import { useAuth0 } from '@auth0/auth0-react';
import BadgeAvatars from '../../../components/Avatar/Avatar';
import HeaderLink from '../header/HeaderLink';
/* eslint-disable */
const SideBar = () => {
  const { loginWithRedirect, isAuthenticated, user, isLoading, logout } = useAuth0();
  const page = useLocation().pathname


  return (
    <Grid container spacing={0}>
      <Grid
        item
        minHeight="95vh"
        ml={10}
        my={10}
      >
        <Box>
          <Box>
            {isAuthenticated ? (
              <Stack justifyContent="space-between" spacing={10} alignItems="center">
                <Stack direction="row" spacing={2} alignItems="center">
                  <BadgeAvatars user={user.picture} />
                  <Stack>
                    <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
                      Goodday!
                    </Typography>
                    <Typography fontColor="#405580" fontSize="20px" fontWeight="700">
                      {user.given_name}
                    </Typography>
                  </Stack>
                  {/* <Stack direction="row" spacing={2} alignItems="center">
                    <SettingsOutlinedIcon color="#7D8FB2" />
                    <PersonOutlinedIcon color="#7D8FB2" />
                  </Stack> */}
                </Stack>
              </Stack>
            ) : (
              <button onClick={() => loginWithRedirect()} style={{ padding: "10px 30px 10px 0", border: 'none', background: '#fff' }}>Log In</button>
            )}
          </Box>

          <Stack mt={7} spacing={5}>
            <Link to='/unify-app/dashboard' style={{ textDecoration: 'none' }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <DashboardOutlinedIcon />
                <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
                  Dashboard
                </Typography>
              </Stack>
            </Link>
            <Link to='unify-app/directory' style={{ textDecoration: 'none' }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <DashboardOutlinedIcon />
                <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
                  Directory
                </Typography>
              </Stack>
            </Link>
            <Link to='unify-app/history' style={{ textDecoration: 'none' }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <DashboardOutlinedIcon />
                <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
                  History
                </Typography>
              </Stack>
            </Link>
            <Link to='unify-app/' style={{ textDecoration: 'none' }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <DashboardOutlinedIcon />
                <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
                  Goodday
                </Typography>
              </Stack>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <DashboardOutlinedIcon />
                <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
                  Goodday
                </Typography>
              </Stack>
            </Link>
            <Divider mt={5} orientation='horizontal' />
          </Stack>
          <Stack mt={7} spacing={5}>
            <Link to='unify-app/settings' style={{ textDecoration: 'none' }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <SettingsOutlinedIcon />
                <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
                  Settings
                </Typography>
              </Stack>
            </Link>

            <button style={{ padding: "10px 30px 10px 0", border: 'none', background: '#fff' }} onClick={() => logout({ returnTo: window.location.origin })}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <DashboardOutlinedIcon />
                <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
                  Logout
                </Typography>
              </Stack>
            </button>
          </Stack>
        </Box>
      </Grid>

    </Grid >
  );
};

export default SideBar;



// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link, useLocation } from 'react-router-dom';
// import { Grid, Box, Stack, Typography, Divider, List, ListItemButton, ListItemIcon } from '@mui/material';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

// import { useAuth0 } from '@auth0/auth0-react';
// import BadgeAvatars from '../../../components/Avatar/Avatar';
// import HeaderLink from '../header/HeaderLink';
// /* eslint-disable */
// const SideBar = () => {
//   const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
//   const page = useLocation().pathname;
//   console.log('dhdjskjhgfdfghj ------', page)

//   return (
//     <Grid container spacing={0}>
//       <Grid
//         item
//         minHeight="95vh"
//         ml={10}
//         my={10}
//       >
//         <Box>
//           <Box>
//             {isAuthenticated ? (
//               <Stack justifyContent="space-between" spacing={10} alignItems="center">
//                 <Stack direction="row" spacing={2} alignItems="center">
//                   <BadgeAvatars user={user.picture} />
//                   <Stack>
//                     <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
//                       Goodday
//                     </Typography>
//                     <Typography fontColor="#405580" fontSize="20px" fontWeight="700">
//                       {user.given_name}
//                     </Typography>
//                   </Stack>
//                 </Stack>
//               </Stack>
//             ) : (
//               <button onClick={() => loginWithRedirect()} style={{ padding: "10px 30px 10px 0", border: 'none', background: '#fff' }}>Log In</button>
//             )}
//           </Box>

//           <Stack mt={7} spacing={5}>
//             <HeaderLink
//               title={
//                 <>
//                   <Stack direction="row" alignItems="center" spacing={2}>
//                     <DashboardOutlinedIcon />
//                     <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
//                       Dashboard
//                     </Typography>
//                   </Stack>
//                 </>
//               }
//               page="dashboard" selected={page === '/dashboard'}
//             />

//             <HeaderLink
//               title={
//                 <>
//                   <Stack direction="row" alignItems="center" spacing={2}>
//                     <DashboardOutlinedIcon />
//                     <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
//                       Directory
//                     </Typography>
//                   </Stack>
//                 </>
//               }
//               page="directory" selected={page === '/directory'}
//             />

//             <HeaderLink
//               title={
//                 <>
//                   <Stack direction="row" alignItems="center" spacing={2}>
//                     <DashboardOutlinedIcon />
//                     <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
//                       History
//                     </Typography>
//                   </Stack>
//                 </>
//               }
//               page="history" selected={page === '/history'}
//             />

//             <HeaderLink
//               title={
//                 <>
//                   <Stack direction="row" alignItems="center" spacing={2}>
//                     <DashboardOutlinedIcon />
//                     <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
//                       Actions
//                     </Typography>
//                   </Stack>
//                 </>
//               }
//               page="actions" selected={page === '/actions'}
//             />

//             <Divider mt={5} orientation='horizontal' />
//           </Stack>
//           <Stack mt={7} spacing={5}>
//             <HeaderLink
//               title={
//                 <>
//                   <Stack direction="row" alignItems="center" spacing={2}>
//                     <SettingsOutlinedIcon />
//                     <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
//                       Settings
//                     </Typography>
//                   </Stack>
//                 </>
//               }
//               page="settings" selected={page === '/settings'}
//             />
//             <HeaderLink
//               title={
//                 <>
//                   <Stack direction="row" alignItems="center" spacing={2}>
//                     <SettingsOutlinedIcon />
//                     <Typography color="#7D8FB2" fontSize="14px" fontWeight="700">
//                       Logout
//                     </Typography>
//                   </Stack>
//                 </>
//               }
//               page="logout" selected={page === '/logout'}
//             />
//           </Stack>
//         </Box>
//       </Grid>

//     </Grid>
//   );
// };

// export default SideBar;
