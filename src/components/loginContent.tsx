import theme from '@/styles/theme'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Container, FormControl, IconButton, Input, Stack, ThemeProvider, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const LoginContent = () => {
    const logo = [1, 2, 3, 4, 5, 8, 7]
    const [showPassword, setShowPassword] = useState(false)

  return (
    <ThemeProvider theme={theme}>
        <Container>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "8rem", height: "80vh"}}>
                <Typography variant='h1' marginBottom="8px">ยินดีต้อนรับ ลงชื่อเข้าใช้งาน เพื่ออัพเดทข้อมูลของคุณ</Typography>
                <Box sx={{width: "80%"}}>
                    <Input type='email' placeholder='อีเมล' sx={{width: "100%", fontSize: "1.7vw", padding: "8px", margin: "16px 0px 0px"}}/>
                    <FormControl sx={{display: "flex", flexDirection: "row"}}>
                        <Input type={showPassword? 'text' : 'password'} placeholder='รหัสผ่าน' sx={{width: "100%", fontSize: "1.7vw", padding: "8px", margin: "16px 0px 0px"}}/>
                        <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        sx={{position: "absolute", right: 0, bottom: 1}}
                        >
                            {showPassword? <VisibilityOff/>: <Visibility/>}
                        </IconButton>
                    </FormControl>
                    <Box width="100%" sx={{marginTop: "3rem", display: "flex", justifyContent: "flex-end"}}>
                        <Link href={".."}>
                            <Typography variant='button' sx={{textDecoration: "none"}}>ลืมรหัสผ่านใช่หรือไม่</Typography>
                        </Link>
                    </Box>
                    <Button variant='contained'>
                        <Typography variant='h3' sx={{padding: "6px 12px"}}>ลงชื่อเข้าใช้</Typography>
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

export default LoginContent