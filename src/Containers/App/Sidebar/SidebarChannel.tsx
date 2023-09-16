// import React from 'react'
import "./SidebarChannel.css"

interface Channel {
  id: string;
  channelName: any; // Replace 'any' with the actual type of your channel data
}

function SidebarChannel( props: Channel) {
  return (
    <div className="sidebarChannel">
      <h4><span className="sidebarChannel_hash">#</span>{props.channelName}</h4>
    </div>
  );
}

export default SidebarChannel