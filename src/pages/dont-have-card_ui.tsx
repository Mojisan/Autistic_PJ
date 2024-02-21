import theme from '@/styles/theme'
import { Box, Button, Checkbox, Container, Divider, FormControl, FormControlLabel, OutlinedInput, Stack, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'

const DontHaveCard = () => {
  const [check, setCheck] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Divider sx={{backgroundColor: "#f5cc63", height: "1.5rem"}}/>
        <Container>
            <Box paddingTop="3rem" display="flex" flexDirection="column" boxSizing="border-box" alignItems="center">
              <Typography variant='h1' fontSize="3vw" fontWeight={600} textAlign="center" paddingBottom="2rem">
              กรุณากรอกข้อมูลเบื้องต้นของผู้ทำแบบสำรวจ
              </Typography>
              <Divider sx={{backgroundColor: "#707070", width: "50vw"}}/>
              <Typography variant='h3' textAlign="left" width="50vw" margin="48px 0px 16px" padding="0px 8px">สำหรับผู้ต้องการทำแบบสำรวจ (ทั่วไป)</Typography>
              <Stack spacing={3} direction="column" justifyContent="center" alignItems="center" margin="2rem" width="50vw">
                <Stack spacing={3} direction="row" width="100%">
                  <FormControl sx={{ width: '50%', color: "#495057" }}>
                    <OutlinedInput type='text' placeholder="ชื่อ" sx={{fontSize: "30px", borderRadius: "10px"}} size='small'/>
                  </FormControl>
                  <FormControl sx={{ width: '50%', color: "#495057" }}>
                    <OutlinedInput type='text' placeholder="นามสกุล" sx={{fontSize: "30px", borderRadius: "10px"}} size='small'/>
                  </FormControl>
                </Stack>
                <FormControl sx={{ width: '100%', color: "#495057" }}>
                  <OutlinedInput type='email' placeholder="อีเมล" sx={{fontSize: "30px", borderRadius: "10px"}} size='small'/>
                </FormControl>
                <Box width="100%" sx={{borderColor: "#707070", borderStyle: "solid", borderWidth: "1px", borderRadius: "10px"}}>
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
                <Box display="flex" width="100%" justifyContent="center">
                  {check ? 
                    <Button variant='contained'>
                      <Typography variant='h3' sx={{padding: "6px 12px"}}>เริ่มต้นการทำแบบสำรวจ</Typography>
                    </Button>
                    :
                    <Button variant='contained' disabled>
                      <Typography variant='h3' sx={{padding: "6px 12px"}}>เริ่มต้นการทำแบบสำรวจ</Typography>
                    </Button>
                  }
                </Box>
              </Stack>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default DontHaveCard