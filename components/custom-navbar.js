import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Menu,
  MenuItem,
  ThemeProvider,
} from '@mui/material';
import TreeIcon from '../icons/tree-icon';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

export default function Navbar() {
  const theme = useTheme();

  const pages = ['Home', 'Photo Gallery', 'Contact'];

  const [anchorElemNav, setAnchorElemNav] = useState(null);

  function handleOpenNavMenu(event) {
    setAnchorElemNav(event.currentTarget);
  }

  function handleCloseNavMenu(event) {
    setAnchorElemNav(null);
  }

  return (
    <ThemeProvider>
      <AppBar position="static" sx={{ bgcolor: '#0E3F37' }}>
        <Container maxWidth="x1">
          <Toolbar disableGutters>
            <TreeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Sanchez',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
            >
              Angeles Nursery
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: '#cf985f' }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElemNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElemNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <TreeIcon sx={{ display: { xs: 'flex', md: 'none' } }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Sanchez',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: 'secondary',
                textDecoration: 'none',
              }}
            >
              Angeles Nursery
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
