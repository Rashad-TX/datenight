import React from 'react';
import { style } from '../shared/style';
import { useState } from 'react';
import '../App.css';


function GetStyle() {
    // state for the currently selected item
    const [curDate, setCurDate] = useState(randomSelect());
  
    function randomSelect() {
      // select one item at random (it is possible that the same image is selected more than once in a row)
      const selected = Math.floor(Math.random() * style.length);
      return style[selected];
    }
  
    return (
      <div className="style-results-container">
        {/* onClick update the state by creating a copy of the object to trigger a state update */}
       <div className="style-btn-cntr">
        <button className="style-date-btn" onClick={() => setCurDate({...randomSelect()})}>
         Generate Party Size
        </button>
        </div>
        {/* Render the currently selected item */}
        <div className ="style-name-cntr">
        <h3 className ="style-result-name"> IDEA:  <span className="span-txt">{curDate.name}</span> </h3>
        </div>
        <div className="res-img-cntr">
        <img src={curDate.image}  className="result-image"  height="550rem" width="550rem" />
        </div>
      </div>
    );
  }
export default GetStyle;