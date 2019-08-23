import React, { useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import InputGroup from './components/InputGroup';
import {data} from './data.json';
import './App.css';

interface IValue {
  infinitive: string,
  pastSimple: string,
  pastParticiple: string,
}

interface IDataRow extends IValue{
  ru: string,
  enable: boolean,
}

function App(): JSX.Element {
  const [index, setIndex] = useState<number>(Number(localStorage.getItem('index')) || 0);
  const [values, setValues] = useState<IValue>({
    infinitive: "",
    pastSimple: "",
    pastParticiple: ""
  });
  const [showHints, setShowHints] = useState<boolean>(false);

  const onChange = (event: any):void => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onKeyPress = (event: React.KeyboardEvent):void => {
    if (event.charCode === 13){
      onNextClick();
    }
  };

  const isValid = (name:keyof IValue):boolean => {
    const row:IDataRow = data[index];
    const value:string = values[name].toLowerCase();
    const rowValue:string = row[name].toLowerCase();
    return value === rowValue;
  };

  const nextBtnDisabled = ():boolean => {
    const row:IDataRow = data[index];
    return (data.length === index + 1) ||
      row.infinitive.toLowerCase() !== values.infinitive.toLowerCase() ||
      row.pastSimple.toLowerCase() !== values.pastSimple.toLowerCase() ||
      row.pastParticiple.toLowerCase() !== values.pastParticiple.toLowerCase();
  };

  const onNextClick = ():void => {
    if (!nextBtnDisabled()) {
      const nextIndex:number = index + 1;
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

  const row:IDataRow = data[index];

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
              <Button className="pull-left" onClick={() => {setShowHints(!showHints)}}>
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
