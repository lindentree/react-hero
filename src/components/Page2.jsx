import React from 'react';

function Page2(props) {

  if (props.currentPage !== 2) { // Prop: The current step
      return null
  } else {
    return(
      <div class = "question">
          Q3. Complete table below with each staff member that has interacted with the subject during the visit.
      </div>
    )
  }

}

export default Page2;