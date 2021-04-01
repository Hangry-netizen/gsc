import React from 'react';
import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <div id="resources" className="bg-beach text-align-center homepage-container-padding">
      <div className="color-blue semibold">Check out our resources to help you know<br />how to start, sustain or end your connection!</div>
      <Link>
        <button id="resources-btn" className="red-button">RESOURCES</button>
      </Link>
      <div className="color-red font-size-medium">*currently unavailable</div>
    </div>
  )
}
