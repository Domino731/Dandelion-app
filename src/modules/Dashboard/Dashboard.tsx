import {Link} from "react-router-dom";

// TODO make this route protected
export const Dashboard = () => {
    return <div>
        <Link to="/register">register</Link><br/>
        <Link to="/login">login</Link>
    </div>
}