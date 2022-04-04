import {useState } from "react";
import { Select } from "reactjs-forms";

const USFormSelect = ({
        children,
        onBlur,
        onFocus,
        className,
        props
        }) => {

        const [errorList, setErrorList] = useState<ValidationResult>([]);

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
            <Select
                {...props}
                onBlur={blurHandler}
                onFocus={focusHandler}
                className={className + (errorList.length > 0 ? ` error-element` : ``)}
            >
                {children}
            </Select>
            </div>
            );
        };

export default USFormSelect;
