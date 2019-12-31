import React from 'react';

function Page1(props) {

  if (props.currentPage !== 1) { // Prop: The current step
      return null
  } else {
    return(
      <div>
        <div id = "subjectid" > 
          Subject ID: <input type="text" name="userid" defaultValue={props.data.userid} onClick={props.checkUserID} /> 
            
        </div>
        <div className = "question">  
          Q1. Date of subject arrival/registration at clinic: <input type="date" name="1.1" min="2019-12-01" max="2022-12-31" defaultValue={props.data['1.1']} onChange={props.handleChange}/>  
        </div>

      </div>
    )
  }

  

}

export default Page1;