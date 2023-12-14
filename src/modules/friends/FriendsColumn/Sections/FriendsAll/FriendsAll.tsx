import {useEffect} from "react";
import {friendsActions} from "../../../store/actions.ts";
import {useSelector} from "react-redux";
import {friendsSelectors} from "../../../store/selectors.ts";
import {useAppDispatch} from "../../../../../redux/store.ts";

export const FriendsAll = () => {
    const dispatch = useAppDispatch();

    const friends = useSelector(friendsSelectors.friends);
    const friendsStatus = useSelector(friendsSelectors.friendsStatus);

    useEffect(() => {
        if (!friends && friendsStatus) {
            dispatch(friendsActions.fetchFriends());
        }
    }, [])

    if (!friends) {
        // TODO add loader
        return "loading..."
    }
    return <>Friends all</>
}