import React from 'react';

export default function FFProfileGSC({ GSCs, currentUser }) {

  return (
    <div> Profile Page {currentUser.email}
      {
        GSCs.map((GSC) => {
          if (GSC.ff_email === currentUser.email) {
            return <button>{GSC.name}</button>
          }
        })
      }
    </div>
  )
}