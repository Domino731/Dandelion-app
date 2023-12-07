import '../../App.css'
import {ThemeProvider} from "@mui/material";
import {Theme} from "../../styles";
import {Provider} from 'react-redux';
import store from "../../redux/store.ts";
import {SignUp} from "../auth";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Dashboard} from "../Dashboard";
import {SignIn} from "../auth/SignIn/SignIn.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/register",
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <SignIn/>
    }
])

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </Provider>
    )
}

export default App
