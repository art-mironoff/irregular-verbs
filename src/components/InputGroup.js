import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormGroup, FormControl, FormText} from 'react-bootstrap';

class InputGroup extends Component {
  state = {
    isFocused: false
  };

  onFocus = () => {
    this.setState({ isFocused: true })
  };

  onBlur = () => {
    this.setState({ isFocused: false })
  };

  render() {
    const {showHints, hint, autoFocus, name, placeholder, isValid, value, onKeyPress, onChange} = this.props;
    const {isFocused} = this.state;

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
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
      </FormGroup>
    );
  }
}

InputGroup.propTypes = {
  autoFocus: PropTypes.bool,
  hint: PropTypes.string.isRequired,
  showHints: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isValid: PropTypes.bool,
  value: PropTypes.string,
  onKeyPress: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputGroup;