import React from 'react';
import { Link } from 'react-router-dom';

export default function Introduction() {
  return (
    <div id="introduction" className="bg-beach text-align-justify homepage-container-padding">
      <div className="Essays1743 color-blue">Finally! A matchmaking site where community matters...</div>
      <br />
      <h1 id="what-is-matches-up-title" className="color-blue bold">What is MatchesUp?</h1>
      <p className="color-red padding-left">
      MatchesUp (/Match-us-up/) is a Christian matchmaking site, based in South East Asia, with a uniquely Asian approach. We believe in the value of community input, of friends helping friends find a suitable match. It can be intimidating and vulnerable to put your personal data on a generic public dating site, and even harder to sift through the masses to find a good quality partner. But what if your friends could help you not only create an anonymous profile (identified not by name or picture but simply by your bio data), and also recommend suitable matches for you, make recommendations and encourage you in your matchmaking journey? And what if this site had three high-priority filters:
      </p>
      <p id="for-people" className="color-red padding-left">
        <div className="padding-left">1) Good Single Christian’s (GSC’s) welcomed by friend referral only (peer to peer filter!)</div>
        <br/>
        <div className="padding-left">2) Only for those who acknowledge that their spiritual walk with Jesus is very important to them (not optional or just for show!)</div>
        <br/>
        <div className="padding-left">3) Designed for those who are serious about pursuing a genuine friendship in hopes that it might result in a lasting committed romantic relationship (this is not a casual hook-up site!)</div>
      </p>
      <br />
      <p className="color-red padding-left">We hope this inspires you to say, “Match us up!” </p>
      <br />
      <p className="color-blue padding-left">
        To cover our cost of running this service, we ask for a small donation of a minimum of RM5/SGD3/PHP50 for each GSC profile created. <Link to="/donation-info" id="donation-info-link">See donation info.</Link> Thank you for helping us maintain this service for the body of Christ!
      </p>
      <div id="donation-waived-stamp" className=" text-align-center color-red bold">
        waived for the first batch
      </div>
    </div>
  )
}
