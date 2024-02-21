import theme from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Checkbox, Container, Divider, FormControl, FormControlLabel, Input, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function RegisterWithCard() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [check, setCheck] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Divider sx={{backgroundColor: "#f5cc63", height: "1.5rem"}}/>
        <Container>
            <Box paddingTop="3rem" display="flex" flexDirection="column" boxSizing="border-box" alignItems="center">
              <Typography variant='h1' fontSize="3vw" fontWeight={600} textAlign="center" paddingBottom="2rem">
                ยินดีต้อนรับ
                <span style={{color: "#38A8A9", marginLeft: "16px"}}>ลงทะเบียนเข้าใช้งาน</span>
              </Typography>
              <Divider sx={{backgroundColor: "#707070", width: "50vw"}}/>
              <Stack spacing={3} direction="column" justifyContent="center" alignItems="center" margin="2rem">
                <FormControl sx={{ width: '40vw', color: "#495057" }}>
                  <OutlinedInput type='text' placeholder="ชื่อบัญชีผู้ใช้งาน" sx={{fontSize: "30px", borderRadius: "10px"}} size='small'/>
                </FormControl>
                <FormControl sx={{ width: '40vw', color: "#495057" }}>
                  <OutlinedInput type='email' placeholder="อีเมล" sx={{fontSize: "30px", borderRadius: "10px"}} size='small'/>
                </FormControl>
                <FormControl sx={{ width: '40vw', color: "#495057" }}>
                  <OutlinedInput type={showPassword? "text": "password"} placeholder="รหัสผ่าน" sx={{fontSize: "30px", borderRadius: "10px"}} size='small'/>
                  <Button color="inherit" onClick={() => setShowPassword(!showPassword)} sx={{position: "absolute" ,display:"block", right: "1%", top: "20%"}}>
                    {showPassword? <Visibility/> : <VisibilityOff/>}
                  </Button>
                </FormControl>
                <FormControl sx={{ width: '40vw', color: "#495057" }}>
                  <OutlinedInput type={showPassword2? "text": "password"} placeholder="ยืนยันรหัสผ่าน" sx={{fontSize: "30px", borderRadius: "10px"}} size='small'/>
                  <Button color="inherit" onClick={() => setShowPassword2(!showPassword2)} sx={{position: "absolute" ,display:"block", right: "1%", top: "20%"}}>
                    {showPassword2? <Visibility/> : <VisibilityOff/>}
                  </Button>
                </FormControl>
                <Box width="40vw" sx={{borderColor: "#707070", borderStyle: "solid", borderWidth: "1px", borderRadius: "10px"}}>
                  <Typography variant='h3' padding="1rem">
                  ข้าพเจ้ายินยอมให้มูลนิธิออทิสติกไทย จัดเก็บข้อมูลส่วนตัว 
                  รวมถึงการส่งต่อข้อมูลต่อหน่วยงานภาครัฐที่เกี่ยวข้องเพื่อประโยชน์อันพึงมีพึงได้ตามกฎหมายด้านคนพิการ 
                  ด้านสุขภาพและด้านการศึกษา ทั้งนี้การจัดเก็บข้อมูลเป็นไปตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล 
                  พ.ศ. ๒๕๖๒ มาตรา ๑๙
                  </Typography>
                </Box>
                <FormControlLabel control={<Checkbox/>} value={check} onChange={() => setCheck(!check)} sx={{width: "100%",display: "flex", justifyContent: "flex-start"}} label={<Typography variant='button' sx={{color: "#38A8A9", fontWeight: 600}}>
                ยอมรับข้อตกลงและเงื่อนไข
                </Typography>}/>
                <Box display="flex" width="100%" justifyContent="flex-end">
                  {check ? 
                    <Button variant='text'>
                      <Typography variant='h3' sx={{padding: "6px 12px"}}>ถัดไป &gt;</Typography>
                    </Button>
                    :
                    <Button variant='text' disabled>
                      <Typography variant='h3' sx={{padding: "6px 12px"}}>ถัดไป &gt;</Typography>
                    </Button>
                  }
                </Box>
              </Stack>
            </Box>
        </Container>
    </ThemeProvider>
  )
}