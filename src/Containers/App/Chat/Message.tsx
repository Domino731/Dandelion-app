import React from 'react'
import "./Message.css";
import PersonIcon from '@mui/icons-material/Person';

function Message() {
  return (
    <div className='message'>
      <PersonIcon />
      <div className="message__info">
        <h4>userName
          <span className="message__timestamp">this is a timestamp</span>
        </h4>

        <p>This is a message</p>
      </div>
    </div>
  )
}

export default Message