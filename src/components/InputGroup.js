import React, {useState} from 'react';
import {FormGroup, FormControl, FormText} from 'react-bootstrap';

function InputGroup(props) {
  const [isFocused, setIsFocused] = useState(false);
  const {showHints, hint, autoFocus, name, placeholder, isValid, value, onKeyPress, onChange} = props;

  return (
    <FormGroup>
      {showHints ? <FormText>Hint: {hint}</FormText> : null}
      <FormControl
        autoFocus={autoFocus}
        name={name}
        placeholder={placeholder}
        value={value}
        isValid={isValid}
        isInvalid={value && !isFocused && !isValid}
        onFocus={() => {setIsFocused(true)}}
        onBlur={() => {setIsFocused(false)}}
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
    </FormGroup>
  )
}

export default InputGroup;
