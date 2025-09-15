import { Box, Container, Icon, Stack } from '@mui/material'
import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PaidIcon from '@mui/icons-material/Paid';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CreditScoreIcon from '@mui/icons-material/CreditScore';





const BOX = ({icon , title , desc}) => {
  return (
     <Box  flexGrow={1} sx={
        {
        display:"flex",
        alignItems:"center",
        gap:"1rem",
        background:"#283445",
        color:"white",
        p:"10px 20px",
        borderRadius:"10px",
        // width:"300px"
              

        }}>
            <p>{icon}</p>
             <Box>
                <p>{title}</p>
                <p>{desc}</p>
             </Box>
          </Box>
  )
}





const Features = () => {
  return (
    <Container >
           <Stack direction={"row"} sx={
{
    mt:"1rem",
    gap:"1rem",
    flexWrap:"wrap"
}
           }>
           <BOX icon={<ElectricBoltIcon/>} title={"Fast Delivery"} desc={"Your order arrives quickly"}/>
           <BOX icon={ <PaidIcon/>} title={"Secure Payment"} desc={"Easy and safe checkout"}/>
           <BOX icon={<AccessAlarmIcon/>} title={"24/7 Available"} desc={"Your order arrives quickly"}/>
           <BOX icon={<CreditScoreIcon/>} title={"Customer Support"} desc={"Shop anytime, day or night"}/>
          
       
</Stack>
    </Container>
  )
}

export default Features
