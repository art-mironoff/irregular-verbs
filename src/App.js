import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import InputGroup from './components/InputGroup';
import db from './data.json';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: db.data.filter(row => row.enable),
      index: Number(localStorage.getItem('index')) || 0,
      infinitive: "",
      pastSimple: "",
      pastParticiple: "",
      ru: "",
      showHints: false
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onHelpClick = this.onHelpClick.bind(this);
    this.nextBtnDisabled = this.nextBtnDisabled.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onKeyPress(target) {
    if(target.charCode === 13){
      this.onNextClick();
    }
  }

  validation(name) {
    const {data, index} = this.state;
    const row = data[index];
    const value = this.state[name].toLowerCase();
    const rowValue = row[name].toLowerCase();
    if (value === '') {
      return null;
    } else if (value === rowValue) {
      return 'success'
    } else if (rowValue.indexOf(value) === 0) {
      return 'warning';
    }
    return 'error';
  }

  onHelpClick() {
    this.setState({
      showHints: !this.state.showHints
    });
  }

  nextBtnDisabled() {
    const {infinitive, pastSimple, pastParticiple, data, index} = this.state;
    const row = data[index];
    return (data.length === index + 1) ||
      row.infinitive.toLowerCase() !== infinitive.toLowerCase() ||
      row.pastSimple.toLowerCase() !== pastSimple.toLowerCase() ||
      row.pastParticiple.toLowerCase() !== pastParticiple.toLowerCase();
  }

  onNextClick() {
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
  }

  render() {
    const {data, index, infinitive, pastSimple, pastParticiple, showHints} = this.state;
    const row = data[index];
    return (
      <Grid>
        <Row>
          <Col xs={12} xsOffset={0} sm={6} smOffset={3} md={4} mdOffset={4}>
            <form>
              <h3>{row.ru}</h3>
              <InputGroup
                autoFocus
                name="infinitive"
                placeholder="Infinitive"
                showHints={showHints}
                value={infinitive}
                hint={row.infinitive}
                validationState={this.validation('infinitive')}
                onKeyPress={this.onKeyPress}
                onChange={this.onChange}
                />
              <InputGroup
                name="pastSimple"
                placeholder="Past Simple"
                showHints={showHints}
                value={pastSimple}
                hint={row.pastSimple}
                validationState={this.validation('pastSimple')}
                onKeyPress={this.onKeyPress}
                onChange={this.onChange}
                />
              <InputGroup
                name="pastParticiple"
                placeholder="Past Participle"
                showHints={showHints}
                value={pastParticiple}
                hint={row.pastParticiple}
                validationState={this.validation('pastParticiple')}
                onKeyPress={this.onKeyPress}
                onChange={this.onChange}
                />
              <div className="buttons">
                <Button className="pull-left" onClick={this.onHelpClick}>
                  {!showHints ? 'Show hints' : 'Hide hints'}
                </Button>
                {index + 1} of {data.length}
                <Button className="btn-success pull-right" disabled={this.nextBtnDisabled()} onClick={this.onNextClick}>
                  Next
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
