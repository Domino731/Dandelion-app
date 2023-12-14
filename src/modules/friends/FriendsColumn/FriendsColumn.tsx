import {useSelector} from "react-redux";
import {friendsSelectors} from "../store/selectors.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/store.ts";
import {friendsActions} from "../store/actions.ts";
import {List, ListItem} from "@mui/material";

export const FriendsColumn = () => {
    const dispatch = useAppDispatch();

    const friends = useSelector(friendsSelectors.friends);
    const friendsStatus = useSelector(friendsSelectors.friendsStatus);

    useEffect(() => {
        if (!friends && friendsStatus) {
            dispatch(friendsActions.fetchFriends());
        }
    }, [])

    if (!friends) {
        return 'loading...'
    }

    return <>
        <div>TOP BAR</div>
        <List>
            {friends.map(el => <ListItem>{el.nick}</ListItem>)}
        </List>
    </>
}