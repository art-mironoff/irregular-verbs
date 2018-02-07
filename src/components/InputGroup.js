import React from 'react';
import {FormGroup, FormControl, Glyphicon, HelpBlock} from 'react-bootstrap';

export default (props) => {
  return (
    <FormGroup validationState={props.validationState}>
      {props.showHints ? <HelpBlock>Hint: {props.hint}</HelpBlock> : null}
      <FormControl
        autoFocus={props.autoFocus}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onKeyPress={props.onKeyPress}
        onChange={props.onChange}
      />
    </FormGroup>
  );
}