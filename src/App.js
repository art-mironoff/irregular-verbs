import React, { useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import InputGroup from './components/InputGroup';
import {data} from './data.json';
import './App.css';

function App() {
  const [index, setIndex] = useState(Number(localStorage.getItem('index')) || 0);
  const [values, setValues] = useState({
    infinitive: "",
    pastSimple: "",
    pastParticiple: ""
  });
  const [showHints, setShowHints] = useState(false);

  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onKeyPress = target => {
    if (target.charCode === 13){
      onNextClick();
    }
  };

  const isValid = (name) => {
    const row = data[index];
    const value = values[name].toLowerCase();
    const rowValue = row[name].toLowerCase();
    return value === rowValue;
  };

  const onHelpClick = () => {
    setShowHints(!showHints);
  };

  const nextBtnDisabled = () => {
    const row = data[index];
    return (data.length === index + 1) ||
      row.infinitive.toLowerCase() !== values.infinitive.toLowerCase() ||
      row.pastSimple.toLowerCase() !== values.pastSimple.toLowerCase() ||
      row.pastParticiple.toLowerCase() !== values.pastParticiple.toLowerCase();
  };

  const onNextClick = () => {
    if (!nextBtnDisabled()) {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setValues({
        infinitive: "",
        pastSimple: "",
        pastParticiple: ""
      });
      setShowHints(false);
      localStorage.setItem('index', nextIndex.toString());
    }
  };

  const row = data[index];

  return (
    <Container>
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={9} md={7} lg={5} xl={4}>
          <form>
            <h3>{row.ru}</h3>
            <InputGroup
              autoFocus
              name="infinitive"
              placeholder="Infinitive"
              showHints={showHints}
              value={values.infinitive}
              hint={row.infinitive}
              isValid={isValid('infinitive')}
              onKeyPress={onKeyPress}
              onChange={onChange}
            />
            <InputGroup
              name="pastSimple"
              placeholder="Past Simple"
              showHints={showHints}
              value={values.pastSimple}
              hint={row.pastSimple}
              isValid={isValid('pastSimple')}
              onKeyPress={onKeyPress}
              onChange={onChange}
            />
            <InputGroup
              name="pastParticiple"
              placeholder="Past Participle"
              showHints={showHints}
              value={values.pastParticiple}
              hint={row.pastParticiple}
              isValid={isValid('pastParticiple')}
              onKeyPress={onKeyPress}
              onChange={onChange}
            />
            <div className="buttons">
              <Button className="pull-left" onClick={onHelpClick}>
                {!showHints ? 'Show hints' : 'Hide hints'}
              </Button>
              <span>{index + 1} of {data.length}</span>
              <Button className="btn-success pull-right" disabled={nextBtnDisabled()} onClick={onNextClick}>
                Next
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
