import { Providers } from "../../store/store";
import { Grid } from "@mui/material";
import LeftContent from "@/components/leftContent";
import Navbar from "@/components/navbar";
import RightContent from "@/components/rightContent";

export default function Home() {
  return (
    <>
      <Providers>
        <Navbar/>
        <Grid container spacing={0}>
          <Grid item xs={6} md={6}>
            <LeftContent/>
          </Grid>
          <Grid item xs={6} md={6}>
            <RightContent/>
            LL
          </Grid>
        </Grid>
      </Providers>
    </>
  );
}
