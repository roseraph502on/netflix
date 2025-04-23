import React,{useState} from 'react';
import './AppLayout.css'

import { Outlet, useNavigate  } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const AppLayout = () => {
  const navigate = useNavigate();
  const pages = ['Home', 'Movies'];
  const [keyword,setKeyword]= useState("");


  const clklogo = (event) =>{
    event.preventDefault();
    navigate("/");
  }
  const clkmenu = (page, event) =>{
    event.preventDefault();
    if (page === 'Home'){
      navigate(`/`);
    }else {
      navigate(`/${page}`);
    }
   
  }
  const serachByKeyword=(event)=>{
    event.preventDefault()
    navigate(`/movies?q=${keyword}`)
  }

  return (
    <Box>
      <AppBar id="nav" position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* 로고 */}
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
          onClick={clklogo} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {/* 메뉴 */}
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(event) => clkmenu(page, event)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* 검색창 */}
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(83, 83, 83, 0.55)', borderRadius: 1, padding: '0 8px' ,}}>
            <SearchIcon sx={{ color: 'red', mr: 1 }} onClick={serachByKeyword}/>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ width: '20vw', fontSize: '1rem',color: '#eee' }}
              value={keyword}
              onChange={(event)=>setKeyword(event.target.value)}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </Box>
  );
};

export default AppLayout;
