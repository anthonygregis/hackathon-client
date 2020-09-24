import React from 'react'

const Message = ( props ) => (
  <div aria-live="polite" aria-atomic="true" style={{display: 'none'}}>
    {props.text}
  </div>
);

export default Message