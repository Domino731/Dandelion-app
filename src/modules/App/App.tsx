import '../../App.css'
import {ThemeProvider} from "@mui/material";
import {Theme} from "../../styles";
import {Provider, useSelector} from 'react-redux';
import store from "../../redux/store.ts";
import {SignUp} from "../auth";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Dashboard} from "../Dashboard";
import {SignIn} from "../auth/SignIn/SignIn.tsx";
import {authSelectors} from "../auth/store/selectors.ts";
import {ServersColumn} from "../servers/ServersColumn.tsx";

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

const p = createBrowserRouter([
    {
        path: '/',
        element: <ServersColumn/>
    }
])

const ProtectedRoutes = () => {
    return <RouterProvider router={p}/>
}

const UnprotectedRoutes = () => {
    return <RouterProvider router={router}/>
}


const Router = () => {
    // const user = useSelector(authSelectors.user);
    // if (user) {
    //     return <ProtectedRoutes/>
    // }
    return <UnprotectedRoutes/>
}

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <Router/>
            </ThemeProvider>
        </Provider>
    )
}

export default App
