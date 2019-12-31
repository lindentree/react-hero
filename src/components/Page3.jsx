import React from 'react';

function Page3(props) {

  if (props.currentPage !== 3) { // Prop: The current step
      return null
  } else {
    return(
      <div>
        <div className = "question">
          Q4. Complete table below with each staff member that has interacted with the subject during the visit.
        </div>

        <button className="btn btn-success btn-block">Sign up</button>
      </div>
    )
  }

}

export default Page3;