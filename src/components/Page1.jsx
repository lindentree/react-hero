import React from 'react';

function Page1(props) {

  if (props.currentPage !== 1) { // Prop: The current step
      return null
  } else {
    return(
      <div>
        <div id = "subjectid" handleChange={props.handleChange}> 
          Subject ID: <input type="text" name="sid" value={props.userid}/> 
        </div>
        <div class = "question">  
          Q1. Date of subject arrival/registration at clinic: <input type="date" name="q1" min="2019-12-01" max="2022-12-31"/>  
        </div>
        
      </div>
    )
  }

  

}

export default Page1;