import theme from '@/styles/theme'
import { AppBar, Box, Button, ThemeProvider, Toolbar, Typography, makeStyles } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type page = {
    name: string,
    file: string
}

const Navbar = () => {
    const pages: page[] = [
        { name: "ข้อมูลทั่วไป", file: "" },
        { name: "ลงทะเบียน", file: "register_ui" },
        { name: "เข้าสู่ระบบ", file: "login_ui" }
    ];

    return (
        <ThemeProvider theme={theme}>
            <AppBar sx={{position: "absolute", top: 0, left: 0, backgroundColor: "transparent", boxShadow: 0}}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', width: "100vw", justifyContent: "flex-end" }}>
                        {pages.map((page) => (
                            <Button
                                variant='text'
                                className='classes.button'
                                key={page.name}
                                sx={{ padding: "32px 32px 6px 6px" }}
                            >
                                <Typography variant='button'>
                                    <Link href={`/${page.file}`} style={{textDecoration: 'none', color: "#434343"}}>
                                        {page.name}
                                    </Link>
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar