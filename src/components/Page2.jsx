import React from 'react';

function Page2(props) {

  if (props.currentPage !== 2) { // Prop: The current step
      return null
  } else {
    return(
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          onChange={props.handleChange} // Prop: Puts data into state
        />
      </div>
    )
  }

}

export default Page2;