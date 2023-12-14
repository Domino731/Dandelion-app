import {useSelector} from "react-redux";
import {authSelectors} from "../../auth/store/selectors.ts";
import {PrivateRouteProps} from "./PrivateRoute.types.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../App/App.const.ts";

export const PrivateRoute = ({element}: PrivateRouteProps) => {
    const isLogged = useSelector(authSelectors.isLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogged) {
            navigate(ROUTES.authOptions)
        }
    }, [isLogged, navigate])

    if (isLogged) {
        return element;
    }
    return <></>
}