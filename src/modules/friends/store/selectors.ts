import {RootState} from "../../../redux/store.ts";
import {FRIENDS_REDUCER_NAME} from "./slice.ts";

import {createSelector} from "@reduxjs/toolkit";

const root = (state: RootState) => state[FRIENDS_REDUCER_NAME];

const friends = createSelector(root, (state) => state.friends);
const friendsStatus = createSelector(root, (state) => state.friendsStatus);
const friendsError = createSelector(root, (state) => state.friendsError);
const invitationsAsSender = createSelector(root, (state) => state.invitationsAsSender);
const invitationsAsSenderStatus = createSelector(root, (state) => state.invitationsAsSenderStatus);
const invitationsAsSenderError = createSelector(root, (state) => state.invitationsAsSenderError);
const invitationsAsReceiver = createSelector(root, (state) => state.invitationsAsReceiver);
const invitationsAsReceiverStatus = createSelector(root, (state) => state.invitationsAsReceiverStatus);
const invitationsAsReceiverError = createSelector(root, (state) => state.invitationsAsReceiverError);
const sendInvitationStatus = createSelector(root, (state) => state.sendInvitationStatus);
const sendInvitationError = createSelector(root, (state) => state.sendInvitationError);
const replyToInvitationStatus = createSelector(root, (state) => state.replyToInvitationStatus);
const replyToInvitationError = createSelector(root, (state) => state.replyToInvitationError);

export const friendsSelectors = {
    friends,
    friendsStatus,
    friendsError,
    invitationsAsSender,
    invitationsAsSenderStatus,
    invitationsAsSenderError,
    invitationsAsReceiver,
    invitationsAsReceiverStatus,
    invitationsAsReceiverError,
    sendInvitationStatus,
    sendInvitationError,
    replyToInvitationStatus,
    replyToInvitationError
}