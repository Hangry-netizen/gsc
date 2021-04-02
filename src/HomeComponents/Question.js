import React from 'react'

export default function Question() {
  return (
    <div id="question" className="bg-blue text-align-center homepage-container-padding-font">
      <h2 id="have-a-question" className="color-red">Have a question for us?</h2>
      <span className="text-align-center">
        <a href="mailto:matchesup@gmail.com">
          <button id="send-us-an-email-btn" className="bold color-blue">SEND US AN EMAIL</button>
        </a>
        <p className="color-beach">MatchesUp runs on volunteer basis, so please be patient with our response time yea?</p>
      </span>
    </div>
  )
}
