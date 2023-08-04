import '../../App.css'
import {Button, ThemeProvider} from "@mui/material";
import {Theme} from "../../styles";

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Button variant="contained" color="primary">
                Click Me
            </Button>
        </ThemeProvider>
    )
}

export default App
