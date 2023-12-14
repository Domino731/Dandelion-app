import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {FriendMenuProps} from "./FriendMenu.types.ts";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useCallback} from "react";
import {useAppDispatch} from "../../../../../redux/store.ts";
import {friendsActions} from "../../../store/actions.ts";

export const FriendMenu = ({friendProfileId}: FriendMenuProps) => {
    const dispatch = useAppDispatch();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRemoveFriend = useCallback(() => {
        dispatch(friendsActions.removeFriend(friendProfileId));
    }, [dispatch, friendProfileId])

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleRemoveFriend}>Remove</MenuItem>
            </Menu>
        </div>
    );
}