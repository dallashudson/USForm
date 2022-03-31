import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useMemo,
  useState
} from "react";
import { Form, useFormValidation } from "reactjs-forms";
import MyFormControl from "./MyFormControl";
import MyFormSelect from "./MyFormSelect";
import {
  CustomValidator,
  ExtendedHTMLFormElement,
  ExtendedHTMLSelectElement
} from "reactjs-forms/types";
import countries from "./countries";
import "./styles.css";
import { LexiaProps } from "./Lexia";

type SignProps = {
  lexia: LexiaProps;
};
const Sign: FC<SignProps> = ({ lexia }) => {
  const [testerName, setTester] = useState("");
  const [Station, setStation] = useState("");
  const [dateTested, setTestDate] = useState("");
  const [reportsNeeded, setReports] = useState("");
  const [saveLocation, setSaveLocation] = useState("");


  const validation = useFormValidation();

  const countryList = useMemo(
    () =>
      countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      )),
    []
  );

  const changeHandler: ChangeEventHandler<
    HTMLInputElement | ExtendedHTMLSelectElement
  > = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "setTester":
        setTester(value);
        break;
      case "setStation":
        setStation(value);
        break;
      case "testDate":
        setTestDate(value);
        break;
      case "reportsNeeded":
        setReports(value);
        break;
      case "saveLocation":
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
            identity="testerName"
            id="testerName"
            onChange={changeHandler}
            value={testerName}
            validation={{
              required: true
            }}
          >
            <option value="">{lexia.placeholders["testerName"]}</option>
            {countryList}
          </MyFormSelect>
        </div>
        <div className="control-wrapper half">
          <MyFormControl
            type="text"
            className="control"
            placeholder={lexia.placeholders["fistName"]}
            identity="firstname"
            id="firstname"
            onChange={changeHandler}
            value={"bruh"}
            validation={{
              required: true,
              isName: true
            }}
          />
          <MyFormControl
            type="text"
            className="control"
            placeholder={lexia.placeholders["lastName"]}
            identity="lastname"
            id="lastname"
            onChange={changeHandler}
            value={"bruh"}
            validation={{
              required: true,
              isName: true
            }}
          />
        </div>
        <div className="control-wrapper half">
          <MyFormControl
            type="password"
            id="password"
            className="control"
            placeholder={lexia.placeholders["password"]}
            identity="password"
            onChange={changeHandler}
            value={"bruh"}
            validation={{
              required: true,
              isAlphaNumeric: true,
              minLen: 8
            }}
          />
          <MyFormControl
            type="password"
            className="control"
            placeholder={lexia.placeholders["passwordRepeat"]}
            identity="passwordRepeat"
            id="passwordRepeat"
            onChange={changeHandler}
            value={"bruh"}
            customValidation={{
              isEqulPasswords: isEqulPasswords("bruh")
            }}
          />
        </div>
        
        <div className="control-wrapper">
          <button className="btn btn-blue">{lexia.btn}</button>
        </div>
      </Form>
    </div>
  );
};

export default Sign;