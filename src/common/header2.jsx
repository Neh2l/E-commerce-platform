import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Badge  from '@mui/material/Badge';
import { useNavigate } from "react-router";
import LoginIcon from '@mui/icons-material/Login';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}` ,
    padding: '0 4px',
  },
}));

function CustomizedBadges() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const Header2 = () => {
  let navigate=useNavigate();
  return (
    <Container sx={{
      display:"flex",
      mt:"1rem",
      mb:"1rem",
      flexDirection:{ xs:"column", md:"row" },
      gap:{ xs:"1rem", md:"0" },
      alignItems:"center"
    }}>
     <Box flexGrow={1} sx={{ display:"flex", flexDirection:{ xs:"column", md:"row" }, gap:"1rem" }}>
        <Stack alignItems="center">
          <DiamondIcon />
          <Typography>Ovela</Typography>
        </Stack>
        <Search sx={{ borderRadius:"10px", width:{ xs:"100%", md:"80%" } }}>
          <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }}/>
        </Search>
     </Box>

     <Box sx={
      {
        display:"flex",
        alignItems:"center",
        gap:".5rem"
      }
     }>
        <CustomizedBadges/>
        <IconButton onClick={()=>{navigate('/profile')}}>
          <PersonOutlineIcon/>
        </IconButton>
         <IconButton onClick={()=>{navigate('/login')}}>
          <LoginIcon/>
        </IconButton>
     </Box>
    </Container>
  );
};

export default Header2;
