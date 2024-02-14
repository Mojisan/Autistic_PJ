import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ImageLogo = () => {
    const logo = [1, 2, 3, 4, 5, 8, 7]

  return (
    <div>
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
    </div>
  )
}

export default ImageLogo