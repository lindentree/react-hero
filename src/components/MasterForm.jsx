import React from 'react';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';

export default class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      id: null,
      userExists: false,
      currentPage: 1, 
      formData: {
        "1": {},
        "2": {},
        "3": {}
      }
    }
    // Bind the submission to handleChange() 
    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  _next() {
    let currentPage = this.state.currentPage
    // If the current step is 1 or 2, then add one on "next" button click
    currentPage = currentPage >= 2? 3: currentPage + 1
    this.setState({
      currentPage: currentPage
    })
  }

  _prev() {
    let currentPage = this.state.currentPage
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentPage = currentPage <= 1? 1: currentPage - 1
    this.setState({
      currentPage: currentPage
    })
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
  
  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    //const { email, username, password } = this.state
    
  }
  
  render() {    
    return (
      <React.Fragment>
      <h1>A Wizard Form!</h1>
      <p>Step {this.state.currentPage} </p> 
    
     <form onSubmit={this.handleSubmit}>
  
      <Page1 
        currentPage={this.state.currentPage} 
        handleChange={this.handleChange}
        data={this.state.formData['1']}
      />
      <Page2 
        currentPage={this.state.currentPage} 
        handleChange={this.handleChange}
        data={this.state.formData['2']}
      />
           

  </form>
  </React.Fragment>
)
}
}