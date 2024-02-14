import { Providers } from "../../store/store";
import { Grid } from "@mui/material";
import LeftContent from "@/components/leftContent";
import Navbar from "@/components/navbar";
import RightContent from "@/components/rightContent";
import RegisterContent from "@/components/registerContent";

export default function Register() {
  return (
    <>
      <Providers>
        <Navbar/>
        <Grid container spacing={0}>
          <Grid item xs={6} md={6}>
            <LeftContent/>
          </Grid>
          <Grid item xs={6} md={6}>
            <RegisterContent/>
          </Grid>
        </Grid>
      </Providers>
    </>
  );
}
