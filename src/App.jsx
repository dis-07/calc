import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'


class App extends React.Component {

  state = {
    prevValue: 0, 
    value: 0
  }

    handleClick = (value) => {
      this.setState({value})
    }

    handleChange = (event) => {
      this.setState({value: event.target.value})
    }

  render = () => (
    <div className="App">
        <div className="calc">
          <div className="top">
            <div className="nav">
              <button className="nav__button nav__button--red"></button>
              <button className="nav__button nav__button--yellow"></button>
              <button className="nav__button nav__button--green"></button>
            </div>
            <div className="field">
              <input type="number" value={this.state.value} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="bottom">
          <Button onClick={this.handleClick} index={1} value="AC">
            AC
          </Button>
          <Button onClick={this.handleClick} index={2} value="+/-">
            +/-
          </Button>
          <Button onClick={this.handleClick} index={3} value="%">
            %
          </Button>
          <Button onClick={this.handleClick} index={4} orange value="/">
            /
          </Button>
          <Button onClick={this.handleClick} index={5} value="7">
            7
          </Button>
          <Button onClick={this.handleClick} index={6} value="8">
            8
          </Button>
          <Button onClick={this.handleClick} index={7} value="9">
            9
          </Button>
          <Button onClick={this.handleClick} index={8} orange value="*">
            *
          </Button>
          <Button onClick={this.handleClick} index={9} value="4">
            4
          </Button>
          <Button onClick={this.handleClick} index={10} value="5">
            5
          </Button>
          <Button onClick={this.handleClick} index={11} value="6">
            6
          </Button>
          <Button onClick={this.handleClick} index={12} orange value="-">
            -
          </Button>
          <Button onClick={this.handleClick} index={13} value="1">
            1
          </Button>
          <Button onClick={this.handleClick} index={14} value="2">
            2
          </Button>
          <Button onClick={this.handleClick} index={15} value="3">
            3
          </Button>
          <Button onClick={this.handleClick} index={16} orange value="+">
            +
          </Button>
          <Button onClick={this.handleClick} index={17} value="0">
            0
          </Button>
          <Button onClick={this.handleClick} index={18} value=",">
            ,
          </Button>
          <Button onClick={this.handleClick} index={19} orange value="=">
            =
          </Button>
          </div>
        </div>
    </div>
  )
}


export default App;
