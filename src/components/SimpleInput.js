import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInputHandler
  } = useInput( value => value.trim() !== '');
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInputHandler
  } = useInput( value => value.includes("@"));

  

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    resetNameInputHandler();
    resetEmailInputHandler();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <Input
        inputClasses={nameInputClasses}
        inputChangeHandler={nameChangedHandler}
        inputBlurHandler={nameInputBlurHandler}
        value={enteredName}
        label="Your Name"
        invalid={nameInputHasError}
        invalidText="Please enter a name"
      />
      <Input
        inputClasses={emailInputClasses}
        inputChangeHandler={emailChangedHandler}
        inputBlurHandler={emailInputBlurHandler}
        value={enteredEmail}
        label="Your Email"
        invalid={emailInputHasError}
        invalidText="Please enter a correct email"
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

const Input = (props) => {
  return (
    <div className={props.inputClasses}>
      <label htmlFor={props.label.replace(/\s+/g, "")}>{props.label}</label>
      <input
        type="text"
        id={props.label.replace(/\s+/g, "")}
        onChange={props.inputChangeHandler}
        onBlur={props.inputBlurHandler}
        value={props.value}
      />
      {props.invalid && <p className="error-text">{props.invalidText}</p>}
    </div>
  );
};
