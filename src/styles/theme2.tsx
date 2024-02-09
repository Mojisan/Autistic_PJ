import { createTheme } from "@mui/material";

const theme2 = createTheme({
    palette: {
        primary: {
            main: "#f5cc63"
        },
    },
    spacing: 24
    /* typography: {
        fontFamily: "Prompt",
        fontSize: 7
    } */
})

theme2.typography.h1 = {
    fontSize: "4vw",
    fontFamily: "Prompt",
    fontWeight: "300"
}
theme2.typography.h3 = {
    fontSize: "2vw",
    fontFamily: "Prompt",
    fontWeight: "300",
}
theme2.typography.overline = {
    fontSize: "2.5vw",
    fontFamily: "THSarabunNew",
    fontWeight: "bold"
}

export default theme2