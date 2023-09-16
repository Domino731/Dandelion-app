import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/userSlice";
import db, { auth } from "../../../firebase";
import { addDoc, collection, doc, getDocs, onSnapshot } from 'firebase/firestore';


interface Channel {
  id: string;
  channel: {
    channelName: string; // Replace 'string' with the actual type of your channelName
    // Add other properties if necessary
  };
}


function Sidebar(props: Channel) {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState<Channel[]>([]);
  // useEffect(() => {
  //   onSnapshot(collection(db, "channels"), (snapshot) => {
  //     setChannels(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         channel: doc.data(),
  //       }))
  //     )

  //   })} []);

  let collectionDocs = collection(db, "channels");
  console.log(collectionDocs);

  useEffect(() => {
    onSnapshot(collectionDocs, (snapshot) => 
    setChannels(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        channel: {
          channelName: doc.data().channelName, // Make sure to access the correct property from your Firestore document
          // Add other properties if necessary
        },
      }))
    ))
}, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      addDoc(collectionDocs, {
        channelName: channelName
      })
    }
  };

  return (
    <div className="sidebar">
        <div className="sidebar__top">
          <h3>Clever programmer</h3>
          <ExpandMoreIcon />
        </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
        {channels.map(({ id, channel }) => (
          <SidebarChannel
            key={id} // Note: 'key' is used to uniquely identify elements in a list
            id={id}
            channelName={channel.channelName}
  />
))}
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon 
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo}/> {/* W awatarze mozesz dodać "src=" i dac zmienną w któej dasz url zdjęcia */}
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar