import '../../App.css'
import {ThemeProvider} from "@mui/material";
import {Theme} from "../../styles";
import {Provider} from 'react-redux';
import store from "../../redux/store.ts";
import {SignUp} from "../auth";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Dashboard} from "../Dashboard";
import {SignIn} from "../auth/SignIn";
import {ROUTES} from "./App.const.ts";
import {PrivateRoute} from "../Router/PrivateRoute";
import {AuthOptions} from "../auth/AuthOptions";

const router = createBrowserRouter([
    {
        path: ROUTES.dashboard,
        element: <PrivateRoute element={<Dashboard/>}/>
    },
    {
        path: ROUTES.authOptions,
        element: <AuthOptions/>
    },
    {
        path: ROUTES.register,
        element: <SignUp/>
    },
    {
        path: ROUTES.login,
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
