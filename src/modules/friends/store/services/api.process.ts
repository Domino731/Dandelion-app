import {GetFriendsResponse} from "./api.types.ts";

const getFriends = (data: GetFriendsResponse) => {
    return data.map((el) => ({
        nick: el.friendNick,
        id: el.id,
        friendProfileId: el.friendProfileId
    }))
}

export const apiProcess = {
    getFriends
}