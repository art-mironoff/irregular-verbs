import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import InputGroup from './components/InputGroup';
import db from './data.json';
import './App.css';

class App extends Component {
  state = {
    data: db.data.filter(row => row.enable),
    index: Number(localStorage.getItem('index')) || 0,
    infinitive: "",
    pastSimple: "",
    pastParticiple: "",
    ru: "",
    showHints: false
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  onKeyPress = target => {
    if(target.charCode === 13){
      this.onNextClick();
    }
  };

  isValid(name) {
    const {data, index} = this.state;
    const row = data[index];
    const value = this.state[name].toLowerCase();
    const rowValue = row[name].toLowerCase();
    return value === rowValue;
  }

  onHelpClick = () => {
    this.setState({
      showHints: !this.state.showHints
    });
  };

  nextBtnDisabled = () => {
    const {infinitive, pastSimple, pastParticiple, data, index} = this.state;
    const row = data[index];
    return (data.length === index + 1) ||
      row.infinitive.toLowerCase() !== infinitive.toLowerCase() ||
      row.pastSimple.toLowerCase() !== pastSimple.toLowerCase() ||
      row.pastParticiple.toLowerCase() !== pastParticiple.toLowerCase();
  };

  onNextClick = () => {
    if (!this.nextBtnDisabled()) {
      const nextIndex = this.state.index + 1;
      this.setState({
        index: nextIndex,
        infinitive: "",
        pastSimple: "",
        pastParticiple: "",
        ru: "",
        showHints: false
      });
      localStorage.setItem('index', nextIndex.toString());
    }
  };

  render() {
    const {data, index, infinitive, pastSimple, pastParticiple, showHints} = this.state;
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
                value={infinitive}
                hint={row.infinitive}
                isValid={this.isValid('infinitive')}
                onKeyPress={this.onKeyPress}
                onChange={this.onChange}
                />
              <InputGroup
                name="pastSimple"
                placeholder="Past Simple"
                showHints={showHints}
                value={pastSimple}
                hint={row.pastSimple}
                isValid={this.isValid('pastSimple')}
                onKeyPress={this.onKeyPress}
                onChange={this.onChange}
                />
              <InputGroup
                name="pastParticiple"
                placeholder="Past Participle"
                showHints={showHints}
                value={pastParticiple}
                hint={row.pastParticiple}
                isValid={this.isValid('pastParticiple')}
                onKeyPress={this.onKeyPress}
                onChange={this.onChange}
                />
              <div className="buttons">
                <Button className="pull-left" onClick={this.onHelpClick}>
                  {!showHints ? 'Show hints' : 'Hide hints'}
                </Button>
                <span>{index + 1} of {data.length}</span>
                <Button className="btn-success pull-right" disabled={this.nextBtnDisabled()} onClick={this.onNextClick}>
                  Next
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
