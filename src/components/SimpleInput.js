import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
    setEnteredNameIsValid(true);
  };
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredName.trim().length === 0) {
      setEnteredNameIsValid(false);
      return;
    }
    props.onAdd(enteredName);
    setEnteredName('');
  }

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
        {!enteredNameIsValid && <p className="error-text">Please enter a name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
