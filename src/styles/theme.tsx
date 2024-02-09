import { BorderBottom } from "@mui/icons-material";
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#f5cc63"
        },
    },
    /* typography: {
        fontFamily: "THSarabunNew"
    }, */
})

theme.typography.button = {
    fontSize: 24,
    fontFamily: "THSarabunNew",
    fontWeight: 600
}

export default theme