import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminPage() {
  useEffect(() => {
    /*get new gsc sign ups from spreadsheet*/
    axios.get ('https://spreadsheets.google.com/feeds/cells/1bKk--8EC78dNtf5xXlxtWfOjH9-7K_deTiacifYiKjM/ojsr6e2/public/basic?alt=json')
      .then((response) => {
        console.log(response.data.feed.entry)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  
  return (
    <div>
      <div>This is AdminPage</div>
    </div>
  )
}

