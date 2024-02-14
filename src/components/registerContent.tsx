import theme from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const RegisterContent = () => {
    const logo = [1, 2, 3, 4, 5, 8, 7]

    return (
    <ThemeProvider theme={theme}>
        <Container>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "8rem", height: "80vh"}}>
                <Box paddingBottom="4rem">
                    <Typography variant='h3' fontSize="3vw" fontWeight={600} textAlign="center">
                        ยินดีต้อนรับ <br/> <span style={{color: "#38a8a9"}}>ลงทะเบียนเข้าใช้งาน</span>
                    </Typography>
                </Box>
                <Box sx={{width: "70%", backgroundColor: "#707070", height: "1px", display: "block"}}></Box>
                <Box sx={{display: "flex", flexDirection: "column", marginTop: "3rem"}}>
                    <Button variant='outlined' color='error' sx={{width: "400px"}}>
                        <Typography variant='button' padding="6px 12px">สำหรับผู้มีบัตรคนพิการ</Typography>
                    </Button>
                    <Button variant='contained' color='error' sx={{width: "400px", marginTop: "1rem"}}>
                        <Typography variant='button' padding="6px 12px" color="#fff">สำหรับผู้ที่ไม่มีบัตรคนพิการ</Typography>
                    </Button>
                </Box>
                <Stack direction="row" spacing={2} marginTop="3rem">
                    {logo.map(num => (
                        <Box key={num} style={{ width: '50px', height: 'auto' }}>
                            <Image src={`/images/org/org${num}.png`} alt='logo' width={150} height={100} layout='responsive'/>
                        </Box>
                    ))}
                </Stack>
                <Box marginTop="1rem">
                    <Typography variant='body1'>ข้อมูลจากการสำรวจจะนำไปใช้เพื่อประโยชน์ในการวางแผนการจัดบริการของหน่วยงานที่เกี่ยวข้อง</Typography>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default RegisterContent