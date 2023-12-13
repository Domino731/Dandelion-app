import {ActionTypeUnion, StateError} from "../../../redux/constants.ts";

export type FriendsState = {
    friends: null;
    friendsStatus: ActionTypeUnion;
    friendsError: StateError;

    invitationsAsSender: null;
    invitationsAsSenderStatus: ActionTypeUnion;
    invitationsAsSenderError: StateError;

    invitationsAsReceiver: null;
    invitationsAsReceiverStatus: ActionTypeUnion;
    invitationsAsReceiverError: StateError;

    sendInvitationStatus: ActionTypeUnion,
    sendInvitationError: StateError,

    replyToInvitationStatus: ActionTypeUnion,
    replyToInvitationError: StateError,
}