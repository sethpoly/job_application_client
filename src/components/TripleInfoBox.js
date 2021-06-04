import React from 'react';
import './TripleInfoBox.css';
import InfoBox from './InfoBox';
import add_icon from '../Images/icon-add.svg';
import filter_icon from '../Images/icon-filter.svg';
import checkmark_icon from '../Images/icon-checkmark.svg';

function TripleInfoBox() {
  return (
    <div>
        <div className="container">
            <InfoBox icon={add_icon} title={"Application Tracking"} description=
              {"Track all jobs you've applied to. Stay organized."}/>
            <InfoBox icon={filter_icon} title={"Metrics"} description=
              {"View graphs and metrics based on personal application data."}/>
            <InfoBox icon={checkmark_icon} title={"Backlogs"} description=
              {"Clear your backlog by marking off games you've beaten."}/>
        </div>
    </div>
  );
}

export default TripleInfoBox;
