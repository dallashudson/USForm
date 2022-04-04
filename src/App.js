import { FC, MouseEventHandler, useState } from "react";
import USForm from "./USForm";
import Header from "./Header";
import FormValidation from "reactjs-forms";
import lexia from "./Lexia";

class USForm extends React.Component {
  return (
    <FormValidation
      config={{
        customMessages: lexia[lan].validation
      }}
    >
      <USForm lexia={lexia[lan]} />
    </FormValidation>
  );


export default App;
