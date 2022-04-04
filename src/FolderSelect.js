import * as React from "react";
import { FormProps } from "reactjs-forms/types";

class ImportForm extends React.Component{
  folderInput= React.useRef(null);
  return (
    <>
               <div className="form-group row">
                  <div className="col-lg-6">
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="file"  
                      directory=""
                      webkitdirectory=""                
                      className="form-control"
                      ref={folderInput}
                    />
                  </div>
                </div>
    </>)
    };

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    directory?: string;        // remember to make these attributes optional....
    webkitdirectory?: string;
  }
}
export default ImportForm;