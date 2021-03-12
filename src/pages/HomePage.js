import React from 'react';
import Introduction from "../HomeComponents/Introduction";
import Step1 from "../HomeComponents/Step1";
import Step2 from "../HomeComponents/Step2";
import Step3 from "../HomeComponents/Step3";
import Step4 from "../HomeComponents/Step4";
import Step5 from "../HomeComponents/Step5";
import Resources from "../HomeComponents/Resources";
import AFewWords from "../HomeComponents/AFewWords";
import SingleCommunities from "../HomeComponents/SingleCommunities";
import Question from "../HomeComponents/Question";
import '../HomeComponents/HomePage.css'

export default function HomePage() {
  return (
    <div id="homepage">
      <Introduction />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Resources />
      <AFewWords />
      <SingleCommunities />
      <Question />
    </div>
  )
}
