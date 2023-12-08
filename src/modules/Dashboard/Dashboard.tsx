import {Link} from "react-router-dom";
import {authApi} from "../../api/api.ts";

// TODO make this route protected
export const Dashboard = () => {
    return <div>
        <Link to="/register">register</Link><br/>
        <Link to="/login">login</Link>
        <button onClick={() => authApi.get('/user')}>test</button>
    </div>
}