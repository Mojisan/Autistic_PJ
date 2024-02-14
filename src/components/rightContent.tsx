import theme from '@/styles/theme'
import { Box, Container, ThemeProvider, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const RightContent = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "8rem", height: "80vh"}}>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <Box style={{ width: '150px', height: 'auto' }}>
                <Image src="/images/org/org-large.png" alt="logo" width={150} height={100} layout='responsive' />
              </Box>
              <Typography variant='h1' textAlign='center' sx={{marginTop: "3rem"}}>มูลนิธิออทิสติกไทย</Typography>
              <Typography variant='h3' textAlign='center' sx={{marginBottom: "0.5rem"}}>
                ระบบสำรวจและคัดกรองเบื้องต้น สำหรับบุคคลที่มีความต้องการจำเป็นพิเศษ 
                <br/>
                Screening tools for person with special needs.
              </Typography>
              <Typography variant='body1' textAlign='center' sx={{marginBottom: "1rem"}}>
                เครื่องมือสำรวจความต้องการความช่วยเหลือของผู้พิการ 
              และช่วยคัดกรองเบื้องต้นสำหรับผู้มีความกังวลสงสัยว่าจะมีความบกพร่องทาง 
              สติปัญญา เรียนรู้ช้า สมาธิสั้น และออทิสซึม 
              เพื่อให้สามารถเข้าสู่กระบวนการวินิจฉัยและการรักษาจากแพทย์ได้อย่างทันท่วงที
              </Typography>
            </Box>
            <Box sx={{marginTop: "3rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <Typography variant='h1'>รู้เร็ว รักษาเร็ว</Typography>
              <Typography variant='h3'>เข้าถึงโอกาส พัฒนาคุณภาพชีวิตที่ยั่งยืน</Typography>
            </Box>
          </Box>
        </Container>
    </ThemeProvider>
  )
}

export default RightContent