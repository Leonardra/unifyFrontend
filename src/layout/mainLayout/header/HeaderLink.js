import { Link, NavLink } from 'react-router-dom';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

function HeaderLink({ page, selected, title }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
            sx={{
                borderRadius: '10px',
                // padding: '10px',
                // backgroundColor: `${ selected ? '#FEA55F' : '#011627' }`,
                opacity: 1,
                height: '50px',
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <Link to={`/unify-app/${page}`} style={{ textDecoration: 'none' }}>
                <Typography color="#607B96">
                    {title}
                </Typography>
            </Link>
        </Box>
    );
}
HeaderLink.propTypes = {
    page: PropTypes.any,
    selected: PropTypes.bool,
    title: PropTypes.string
};

export default HeaderLink;
