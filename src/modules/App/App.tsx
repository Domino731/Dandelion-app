import '../../App.css'
import {ThemeProvider} from "@mui/material";
import {Theme} from "../../styles";
import {Provider} from 'react-redux';
import store from "../../redux/store.ts";
import {SignUp} from "../auth";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <SignUp/>
            </ThemeProvider>
        </Provider>
    )
}

export default App
