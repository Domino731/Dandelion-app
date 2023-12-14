import {FriendsColumn} from "../friends/FriendsColumn";

// TODO make this route protected
export const Dashboard = () => {
    return <div style={{width: '100%', height: '100%'}}>
        <FriendsColumn/>
    </div>
}