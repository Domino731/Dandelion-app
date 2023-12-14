import {Link} from "react-router-dom";
import {ROUTES} from "../../App/App.const.ts";

export const AuthOptions = () => {
    return <>
        <Link to={ROUTES.login}>LOGIN</Link><br/>
        <Link to={ROUTES.register}>REGISTER</Link>
    </>
}