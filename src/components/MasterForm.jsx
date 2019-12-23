import React from 'react';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import axios from 'axios';


export default class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      userExists: false,
      currentPage: 1, 
      formData: {
        userid: '',
        "1.1": '',
        "1.2": '',
        "1.3": '',
        "2.1": '',
        "2.2": []
      }
    }
    // Bind the submission to handleChange() 
    this.handleUserID = this.handleUserID.bind(this)
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

  get previousButton(){
  let currentPage = this.state.currentPage;
  // If the current step is not 1, then render the "previous" button
  if(currentPage !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  // ...else return nothing
  return null;
}

get nextButton(){
  let currentPage = this.state.currentPage;
  // If the current step is not 3, then render the "next" button
  if(currentPage <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  // ...else render nothing
  return null;
}

  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target;
    const formData = {...this.state.formData};
    formData[name] = value;

    this.setState({
      formData
    }, () => console.log(formData))
        
  }
  
  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    //const { email, username, password } = this.state
    
  }

  handleUserID = async () => {
    const data = await axios.get(`http://127.0.0.1:5000/json/${this.state.formData.userid}`)
    console.log(data.data);
  }

  componentDidMount() {
    this.handleUserID();
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
        data={this.state.formData}
      />
      <Page2 
        currentPage={this.state.currentPage} 
        handleChange={this.handleChange}
        data={this.state.formData}
      />

      {this.previousButton}
      {this.nextButton}
           

  </form>
  </React.Fragment>
)
}
}