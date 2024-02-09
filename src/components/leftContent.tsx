import theme2 from '@/styles/theme2'
import { Box, Container, Divider, ThemeProvider, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const LeftContent = () => {

  return (
    <ThemeProvider theme={theme2}>
        <Container sx={{backgroundColor: theme2.palette.primary.main, height: "100vh"}}>
          <Box sx={{display: "flex", flexDirection: "column", boxSizing: "border-box", alignItems: "left", justifyContent: "center", height: "100vh"}}>
            <Box sx={{display: "flex", flexDirection: "column", boxSizing: "border-box", width: "100%", justifyContent: "center", marginBottom: "48px"}}>
              <Typography variant="h1" gutterBottom sx={{marginBottom: "8px"}}>ระบบสำรวจ <br/> และการคัดกรองเบื้องต้น</Typography>
              <Typography variant='h3' gutterBottom sx={{marginBottom: "8px"}}>สำหรับบุคคลที่มีความต้องการจำเป็นพิเศษ</Typography>
              <Divider/>
              <Typography variant='overline' gutterBottom sx={{margin: "16px 0px"}}>Screening tools<br/>for person with special needs.</Typography>
            </Box>
            <Box sx={{position: "absolute", left: 0, bottom: "0", right: 0, width: "50%", overflow: "hidden"}}>
              <Image src={"/images/bg-footer.png"} alt='' width={100} height={100} layout='responsive'/>
            </Box>
          </Box>
        </Container>
    </ThemeProvider>
  )
}

export default LeftContent