import {useMemo, useState} from "react";
import {Box, Typography} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import {friendsSx} from "./FriendsColumn.styles.ts";
import {Button} from "../../../components/Button";
import {FriendsOnline} from "./Sections/FriendsOnline";
import {FriendsAll} from "./Sections/FriendsAll";
import {FriendsPending} from "./Sections/FriendsPending";
import {FriendsBlocked} from "./Sections/FriendsBlocked";
import {io} from "socket.io-client";
import {useSelector} from "react-redux";
import {authSelectors} from "../../auth/store/selectors.ts";

export const FriendsColumn = () => {
    const {accessToken} = useSelector(authSelectors.user) ?? {}

    const [sectionIndex, setSectionIndex] = useState<number>(1);
    const socket = io('http://localhost:3000/', {
        transportOptions: {
            polling: {
                extraHeaders: {
                    'authorization': `Bearer ${accessToken}`,
                },
            },
        },
    });

    const handleTestMessage = () => {
        socket.emit('message', {}, (data) => {
            console.log(data);
        });
    }

    const Section = useMemo(() => {
        switch (sectionIndex) {
            case 1:
                return <FriendsOnline/>
            case 2:
                return <FriendsAll/>
            case 3:
                return <FriendsPending/>
            case 4:
                return <FriendsBlocked/>
            default:
                return <>Error</>
        }
    }, [sectionIndex])

    return <>
        <Box sx={friendsSx.topBar}>
            <button onClick={handleTestMessage}>test</button>
            <Box sx={friendsSx.friendsTitleWrapper}>
                <PeopleIcon/>
                <Typography sx={friendsSx.friendsTitle}>Friends</Typography>
            </Box>
            <Box sx={friendsSx.sectionsSwitch}>
                <Button variant={sectionIndex === 1 ? "outlined" : undefined} text="Online"
                        onClick={() => setSectionIndex(1)}/>
                <Button variant={sectionIndex === 2 ? "outlined" : undefined} text="All"
                        onClick={() => setSectionIndex(2)}/>
                <Button variant={sectionIndex === 3 ? "outlined" : undefined} text="Pending"
                        onClick={() => setSectionIndex(3)}/>
                <Button variant={sectionIndex === 4 ? "outlined" : undefined} text="Blocked"
                        onClick={() => setSectionIndex(4)}/>
            </Box>
        </Box>

        <Box>
            {Section}
        </Box>
    </>
}