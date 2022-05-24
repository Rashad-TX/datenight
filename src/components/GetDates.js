import React from 'react';
import { dates } from '../shared/dates';
import { useState } from 'react';
import '../App.css';


function GetDates() {
    // state for the currently selected item
    const [curDate, setCurDate] = useState(randomSelect());
  
    function randomSelect() {
      // select one item at random (it is possible that the same image is selected more than once in a row)
      const selected = Math.floor(Math.random() * dates.length);
      return dates[selected];
    }
  
    return (
      <div className="results-container">
        {/* onClick update the state by creating a copy of the object to trigger a state update */}
       <div className="btn-cntr">
        <button className="date-btn" onClick={() => setCurDate({...randomSelect()})}>
         Generate Date
        </button>
        </div>
        {/* Render the currently selected item */}
        <div className ="name-cntr">
        <h3 className ="result-name"> IDEA:  <span className="span-txt">{curDate.name}</span> </h3>
        </div>
        <div className="res-img-cntr">
        <img src={curDate.image}  className="result-image"  height="550rem" width="550rem" />
        </div>
      </div>
    );
  }
export default GetDates;