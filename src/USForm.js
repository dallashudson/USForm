import React, {useState} from "react";
import USFormSelect from "./USFormSelect";
import usprop from "./USProps";
import testers from "./testers";
import stations from "./stations";
import "./styles.css";
import DatePicker from 'react-date-picker';




class USForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  
  



  
render(){
  return(
    <div className="box">
      <h2 className="heading">{usprop.heading}</h2>
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <div className="control-wrapper">
          Tester Name
          
          <select value={this.state.value} onChange={this.handleChange}>
            {testers.map((option) => (
              <option value={option.name}>{option.name} {option.code}</option>
            ))}
          </select>


        </div>


        <div className="control-wrapper">
          Station
          <select value={this.state.value} onChange={this.handleChange}>
            {stations.map((option) => (
              <option value={option.address}>{option.address} {option.name} {option.name}</option>
            ))}
          </select>
        </div>


        <div className="control-wrapper half">
          Date Tested

          <div>
            <DatePicker onChange={this.handleChange} value={this.value} />
          </div>

          <div className="topping">
            <input type="checkbox" id="petroline" name="petroline" value="yes" />Petro Tite Line Report
          </div>
          <div className="topping">
            <input type="checkbox" id="lld" name="lld" value="yes" />ELLD/MLLD
          </div>
          <div className="topping">
            <input type="checkbox" id="annualdisp" name="annualdisp" value="yes" />Annual Dispensers
          </div>
          <div className="topping">
            <input type="checkbox" id="annualstp" name="annualstp" value="yes" />Annual STP
          </div>
          <div className="topping">
            <input type="checkbox" id="pvvalve" name="pvvalve" value="yes" />PV Valve
          </div>
          <div className="topping">
            <input type="checkbox" id="atgprobe" name="atgprobe" value="yes" />ATGProbe Annual Comp.
          </div>
          <div className="topping">
            <input type="checkbox" id="stpsump" name="stpsump" value="yes" />STP Sump Testing
          </div>
          <div className="topping">
            <input type="checkbox" id="spillbucket" name="spillbucket" value="yes" />Spill Bucket Testing
          </div>
          <div className="topping">
            <input type="checkbox" id="thirtydayspill" name="thirtydayspill" value="yes" />30 Day Spill Bucket
          </div>
          <div className="topping">
            <input type="checkbox" id="monthly" name="monthly" value="yes" />Monthly Inspection
          </div>

          <div>
            Select Destination:
          </div>
            <input directory="" webkitdirectory="" type="file" />
          <div></div>
          
        </div>
        
        <div className="control-wrapper">
          <button className="btn btn-blue">{usprop.btn}</button>
        </div>
      </form>
    </div>
  )}
}
export default USForm;

