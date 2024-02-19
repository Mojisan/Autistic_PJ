import theme from '@/styles/theme'
import { Box, Button, Container, Input, Stack, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import ImageLogo from './imageLogo'
import Link from 'next/link'

const ForgetPasswordContent = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "8rem", height: "80vh"}}>
                <Typography variant='h1' marginBottom="8px">ลืมรหัสผ่าน</Typography>
                <Box sx={{width: "80%"}}>
                  <Input type='email' placeholder='อีเมล' sx={{width: "100%", fontSize: "1.7vw", padding: "8px", margin: "16px 0px 0px"}}/>
                  <Stack spacing={2} direction="row" justifyContent="center" marginTop="3rem">
                    <Button variant='contained' sx={{padding: "6px 12px", width: "50%"}}>ส่ง</Button>
                    <Button variant='contained' sx={{padding: "6px 12px", width: "50%"}} color='secondary'>
                      <Link style={{textDecoration: "none"}} href={".."}>ยกเลิก</Link>
                    </Button>
                  </Stack>
                </Box>
                <ImageLogo/>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default ForgetPasswordContent