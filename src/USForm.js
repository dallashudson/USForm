import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useMemo,
  useState,
} from "react";

import InputForm from "./FolderSelect";

import { Form, useFormValidation } from "reactjs-forms";
import MyFormControl from "./MyFormControl";
import MyFormSelect from "./MyFormSelect";
import {
  CustomValidator,
  ExtendedHTMLFormElement,
  ExtendedHTMLSelectElement
} from "reactjs-forms/types";
import testers from "./testers";
import stations from "./stations";
import "./styles.css";
import { LexiaProps } from "./Lexia";
import DatePicker from 'react-date-picker';

SignProps = new LexiaProps;

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

  testerList = useMemo(
    () =>
      testers.map((tester) => (
        <option key={tester.code} value={tester.code}>
          {tester.name}
        </option>
      )),
    []
  );

  locationList = useMemo(
    () =>
      stations.map((station) => (
        <option key={station.name} value={station.name}>
          {station.address} {station.fac} {station.name}
        </option>
      )),
    []
  );





    if (document.querySelector('[name="petroline"]:checked')) {
      alert("FUCK");
      $.ajax({
                type: 'POST',
                url: "pdfPopulation/line_report/lineReportParser.py",
                data: JSON.stringify( {  facNumber:fac, tester:tester, date:date});
                 //passing some input here
                dataType: "text",
                success: function(response){
                  const output = response;
                  alert(output);
                }
        }).done(function(data){
            console.log(data);
            alert(data);
        });

    }
  


 

  

  return (
    <div className="box">
      <h2 className="heading">{lexia.heading}</h2>
      <Form onSubmit={submitHandler} autoComplete="off">
        <div className="control-wrapper">
          Tester Name
          <MyFormSelect
            className="control"
            identity="tester"
            id="tester"
            onChange={changeHandler}
            value={tester}
            validation={{
              required: true
            }}
            >
            <option value="">{lexia.placeholders["tester"]}</option>
            {testerList}
          </MyFormSelect>
        </div>
        <div className="control-wrapper">
          Station
          <MyFormSelect
            className="control"
            identity="station"
            id="station"
            onChange={changeHandler}
            value={station}
            validation={{
              required: true
            }}
            >
            <option value="">{lexia.placeholders["station"]}</option>
            {locationList}
          </MyFormSelect>
        </div>


        <div className="control-wrapper half">
          Date Tested

          <div>
            <DatePicker onChange={onChange} value={value} />
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
          <InputForm></InputForm>
          <div></div>
          
        </div>
        
        <div className="control-wrapper">
          <button className="btn btn-blue">{lexia.btn}</button>
        </div>
      </Form>
    </div>
  );
};

export default USForm;