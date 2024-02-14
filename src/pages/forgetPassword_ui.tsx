import React from 'react'
import { Providers } from '../../store/store'
import Navbar from '@/components/navbar'
import { Grid } from '@mui/material'
import LeftContent from '@/components/leftContent'
import ForgetPasswordContent from '@/components/forgetPasswordContent'

const ForgetPassword_ui = () => {
  return (
    <>
      <Providers>
        <Navbar/>
        <Grid container spacing={0}>
          <Grid item xs={6} md={6}>
            <LeftContent/>
          </Grid>
          <Grid item xs={6} md={6}>
            <ForgetPasswordContent/>
          </Grid>
        </Grid>
      </Providers>
    </>
  )
}

export default ForgetPassword_ui