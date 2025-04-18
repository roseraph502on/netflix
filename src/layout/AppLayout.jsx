import * as React from 'react';
import './AppLayout.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const pages = ['Products', 'Pricing', 'Blog'];

  return (
    <Box>
      <AppBar id="nav" position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(83, 83, 83, 0.55)', borderRadius: 1, padding: '0 8px' ,}}>
            <SearchIcon sx={{ color: 'red', mr: 1 }} />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ width: '200px', fontSize: '1rem',color: '#eee' }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </Box>
  );
};

export default AppLayout;
