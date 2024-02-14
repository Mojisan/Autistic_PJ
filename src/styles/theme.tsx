import { BorderBottom } from "@mui/icons-material";
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#f5cc63"
        },
    },
    typography: {
    },
})

theme.typography.button = {
    fontSize: 24,
    fontFamily: "THSarabunNew",
    fontWeight: 600,
    color: "#212529"
}

theme.typography.h1 = {
    fontSize: "2.7vw",
    fontFamily: "THSarabunNew",
    fontWeight: 300,
    color: "#212529"
}

theme.typography.h3 = {
    fontSize: "1.9vw",
    fontFamily: "THSarabunNew",
    fontWeight: 300,
    lineHeight: 1.2,
    color: "#212529"
}

theme.typography.body1 = {
    fontSize: "1.15vw",
    fontFamily: "THSarabunNew",
    fontWeight: 300,
    color: "#212529"
}

theme.typography.button = {
    fontSize: "1.5vw",
    fontFamily: "THSarabunNew",
    fontWeight: 300,
    color: "#212529"
}

export default theme