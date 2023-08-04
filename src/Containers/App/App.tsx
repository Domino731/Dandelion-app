import '../../App.css'
import {Button, ThemeProvider} from "@mui/material";
import {Theme} from "../../styles";
import {Provider} from 'react-redux';
import store from "../../redux/store.ts";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <Button variant="contained" color="primary">
                    Click Me
                </Button>
            </ThemeProvider>
        </Provider>
    )
}

export default App
