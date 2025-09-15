import React from "react";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Header1 = () => {
  return (
< Box sx={{ bgcolor:"#283445", py:"0.5rem", color:"white"}}>
    <Container>
      <Stack 
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ textAlign: { xs: "center", md: "left" }, gap: { xs: 1, md: 2 } }}
      >
        <Typography sx={{
            p:"3px 10px",
            bgcolor:"red",
            borderRadius:"8px",
            fontWeight:"bold"
          }} variant="body2">
          hot
        </Typography>

        <Typography sx={{ fontWeight:"bold" }} variant="body2">
          find all your needs now
        </Typography>

        <Box flexGrow={1}></Box>

        <Stack direction="row" spacing={1} justifyContent={{ xs: "center", md: "flex-end" }}>
          <IconButton color="inherit">
            <LightModeOutlined />
          </IconButton>
          <InstagramIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
        </Stack>
      </Stack>
    </Container>
</Box>
  );
};

export default Header1;
