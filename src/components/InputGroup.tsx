import React, {useState} from 'react';
import {FormGroup, FormControl, FormText} from 'react-bootstrap';

interface IProps {
  showHints: boolean,
  hint: string,
  autoFocus?: boolean,
  name: string,
  placeholder: string,
  isValid: boolean,
  value: string,
  onKeyPress: (event: React.KeyboardEvent) => void,
  onChange: (event: any) => void
}

function InputGroup(props: IProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
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
        isInvalid={!!value && !isFocused && !isValid}
        onFocus={() => {setIsFocused(true)}}
        onBlur={() => {setIsFocused(false)}}
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
    </FormGroup>
  )
}

export default InputGroup;
