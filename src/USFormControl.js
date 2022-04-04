import useState from "react";
import {Input} from "reactjs-forms";
import ErrorList from "./ErrorList";



const USFormControl = ({
        onBlur,
        onFocus,
        className,
        props
    }) => {

  const blurHandler = (e) => {
    setErrorList([]);
    if (onBlur) onBlur(e);
  };

  const focusHandler = (e) => {
    setErrorList([]);
    if (onFocus) onFocus(e);
  };

  return (
    <div className="control-wrapper">
      <Input
        {...props}
        onBlur={blurHandler}
        onFocus={focusHandler}
        className={className + (errorList.length > 0 ? ` error-element` : ``)}
      />
    </div>
  );
};

export default USFormControl;