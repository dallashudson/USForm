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
import "./styles.css";
import { LexiaProps } from "./Lexia";
import DatePicker from 'react-date-picker';

type SignProps = {
  lexia: LexiaProps;
};
const Sign: FC<SignProps> = ({ lexia }) => {
  const [tester, setTester] = useState("");
  const [Station, setStation] = useState("");
  const [dateTested, setTestDate] = useState("");
  const [reportsNeeded, setReports] = useState("");
  const [saveLocation, setSaveLocation] = useState("");

  
  const [value, onChange] = useState(new Date());


  const validation = useFormValidation();

  const testerList = useMemo(
    () =>
      testers.map((tester) => (
        <option key={tester.code} value={tester.code}>
          {tester.name}
        </option>
      )),
    []
  );

  const changeHandler: ChangeEventHandler<
    HTMLInputElement | ExtendedHTMLSelectElement
  > = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "tester":
        setTester(value);
        break;
      case "station":
        setStation(value);
        break;
      case "date":
        setTestDate(value);
        break;
      case "report":
        setReports(value);
        break;
      case "location":
        setSaveLocation(value);
        break;
    }
  };

  const submitHandler: FormEventHandler<ExtendedHTMLFormElement> = (e) => {
    e.preventDefault();
    const { isValid } = validation();

    if (isValid) alert("Registration was succeeded!");
  };

  type TypeIsEqulPasswords = (password: string) => CustomValidator;

  const isEqulPasswords: TypeIsEqulPasswords = (password) => {
    return function (value, identity) {
      return {
        msg: "passwords didn't match",
        result: password === value
      };
    };
  };

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


        <div className="control-wrapper half">
          Date Tested

          <div>
            <DatePicker onChange={onChange} value={value} />
          </div>

          <div className="topping">
            <input type="checkbox" id="line_report" name="line_report" value="Petro Tite Line Report" />Petro Tite Line Report
          </div>
          <div className="topping">
            <input type="checkbox" id="line_report" name="line_report" value="Petro Tite Line Report" />ELLD/MLLD
          </div>
          <div className="topping">
            <input type="checkbox" id="line_report" name="line_report" value="Petro Tite Line Report" />Annual Dispensers
          </div>
          <div className="topping">
            <input type="checkbox" id="line_report" name="line_report" value="Petro Tite Line Report" />Annual STP
          </div>
          <div className="topping">
            <input type="checkbox" id="line_report" name="line_report" value="Petro Tite Line Report" />PV Valve
          </div>
          <div className="topping">
            <input type="checkbox" id="line_report" name="line_report" value="Petro Tite Line Report" />ATGProbe Annual Comp.
          </div>
          <div className="topping">
            <input type="checkbox" id="line_report" name="line_report" value="Petro Tite Line Report" />STP Sump Testing
          </div>
          <div className="topping">
            <input type="checkbox" id="line_report" name="line_report" value="Petro Tite Line Report" />Spill Bucket Testing
          </div>
          <div className="topping">
            <input type="checkbox" id="line_report" name="line_report" value="Petro Tite Line Report" />30 Day Spill Bucket
          </div>
          <div className="topping">
            <input type="checkbox" id="line_report" name="line_report" value="Petro Tite Line Report" />Monthly Inspection
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

export default Sign;