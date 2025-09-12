import React from 'react'
import "./JoinWaitListEmail.css";

export const JoinWaitListEmail = ({closePopup}) => {
  return (
    <div className="popupEmail">
      <div className="popup_inner">
        <form action="">
            <input type="text" placeholder='Enter Your Email' />
            <button className='popBtn'>Submit</button>
        </form>
        <div className='closeEmail' onClick={closePopup}>X</div>
      </div>
    </div>
  )
}
export default JoinWaitListEmail