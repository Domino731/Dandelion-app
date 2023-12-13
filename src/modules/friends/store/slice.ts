import {FriendsState} from "./types.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ACTION_STATUS} from "../../../redux/constants.ts";

const initialState: FriendsState = {
    friends: null,
    friendsStatus: ACTION_STATUS.IDLE,
    friendsError: null,

    invitationsAsSender: null,
    invitationsAsSenderStatus: ACTION_STATUS.IDLE,
    invitationsAsSenderError: null,

    invitationsAsReceiver: null,
    invitationsAsReceiverStatus: ACTION_STATUS.IDLE,
    invitationsAsReceiverError: null,

    sendInvitationStatus: ACTION_STATUS.IDLE,
    sendInvitationError: null,

    replyToInvitationStatus: ACTION_STATUS.IDLE,
    replyToInvitationError: null
}

export const FRIENDS_REDUCER_NAME = 'friends';

const authSlice = createSlice({
    initialState,
    name: FRIENDS_REDUCER_NAME,
    reducers: {
        setFriends: (state, action: PayloadAction<FriendsState['friends']>) => {
            state.friends = action.payload;
        },
        setFriendsStatus: (state, action: PayloadAction<FriendsState['friendsStatus']>) => {
            state.friendsStatus = action.payload;
        },
        setFriendsError: (state, action: PayloadAction<FriendsState['friendsError']>) => {
            state.friendsError = action.payload;
        },

        setInvitationsAsSender: (state, action: PayloadAction<FriendsState['invitationsAsSender']>) => {
            state.invitationsAsSender = action.payload;
        },
        setInvitationsAsSenderStatus: (state, action: PayloadAction<FriendsState['invitationsAsSenderStatus']>) => {
            state.invitationsAsSenderStatus = action.payload;
        },
        setInvitationsAsSenderError: (state, action: PayloadAction<FriendsState['invitationsAsSenderError']>) => {
            state.invitationsAsSenderError = action.payload;
        },

        setInvitationsAsReceiver: (state, action: PayloadAction<FriendsState['invitationsAsReceiver']>) => {
            state.invitationsAsReceiver = action.payload;
        },
        setInvitationsAsReceiverStatus: (state, action: PayloadAction<FriendsState['invitationsAsReceiverStatus']>) => {
            state.invitationsAsReceiverStatus = action.payload;
        },
        setInvitationsAsReceiverError: (state, action: PayloadAction<FriendsState['invitationsAsReceiverError']>) => {
            state.invitationsAsReceiverError = action.payload;
        },

        setSendInvitationStatus: (state, action: PayloadAction<FriendsState['sendInvitationStatus']>) => {
            state.sendInvitationStatus = action.payload;
        },
        setSendInvitationError: (state, action: PayloadAction<FriendsState['sendInvitationError']>) => {
            state.sendInvitationError = action.payload;
        },

        setReplyToInvitationStatus: (state, action: PayloadAction<FriendsState['replyToInvitationStatus']>) => {
            state.replyToInvitationStatus = action.payload;
        },
        setReplyToInvitationError: (state, action: PayloadAction<FriendsState['replyToInvitationError']>) => {
            state.replyToInvitationError = action.payload;
        }
    }
});

