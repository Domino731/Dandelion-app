import {AppDispatch} from "../../../redux/store.ts";
import {friendsSliceActions} from "./slice.ts";
import {ACTION_STATUS} from "../../../redux/constants.ts";
import {friendsServices} from "./services/api.ts";

const fetchFriends = () => async (dispatch: AppDispatch) => {
    dispatch(friendsSliceActions.setFriendsStatus(ACTION_STATUS.PENDING));
    friendsServices.getFriends()
        .then(res => {
            dispatch(friendsSliceActions.setFriends(res));
            dispatch(friendsSliceActions.setFriendsStatus(ACTION_STATUS.SUCCESS));
        })
        .catch(() => {
            dispatch(friendsSliceActions.setFriendsStatus(ACTION_STATUS.ERROR));
        })
}

const fetchInvitationsAsSender = () => async (dispatch: AppDispatch) => {

}

const fetchInvitationsAsReceiver = () => async (dispatch: AppDispatch) => {

}

const sendInvitation = () => async (dispatch: AppDispatch) => {

}

const replyToInvitation = () => async (dispatch: AppDispatch) => {

}

const removeFriend = (friendProfileId: number) => async (dispatch: AppDispatch) => {

}
export const friendsActions = {
    fetchFriends,
    fetchInvitationsAsSender,
    fetchInvitationsAsReceiver,
    sendInvitation,
    replyToInvitation,
    removeFriend
}