import React from 'react';
import { parties } from '../shared/parties';
import { useState } from 'react';
import '../App.css';


function GetParties() {
    // state for the currently selected item
    const [curDate, setCurDate] = useState(randomSelect());
  
    function randomSelect() {
      // select one item at random (it is possible that the same image is selected more than once in a row)
      const selected = Math.floor(Math.random() * parties.length);
      return parties[selected];
    }
  
    return (
      <div className="party-results-container">
        {/* onClick update the state by creating a copy of the object to trigger a state update */}
       <div className="party-btn-cntr">
        <button className="party-date-btn" onClick={() => setCurDate({...randomSelect()})}>
         Generate Party Size
        </button>
        </div>
        {/* Render the currently selected item */}
        <div className ="party-name-cntr">
        <h3 className ="party-result-name"> IDEA:  <span className="span-txt">{curDate.name}</span> </h3>
        </div>
        <div className="party-res-img-cntr">
        <img src={curDate.image}  className="result-image"  height="550rem" width="550rem" />
        </div>
      </div>
    );
  }
export default GetParties;