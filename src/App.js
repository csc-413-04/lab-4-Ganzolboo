import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      banner: 'hello',
      isOpen: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);

    console.log(this.props)
    
  }
  onChange = () => {
    this.setState({ color: 'grey' });
  }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    })
  }

  render() {
    let myVariable = <h2>Ganzolboo Ayurzana</h2>;
    let myBanner;
    if (this.state.isOpen) {
      myBanner = <Header banner={this.state.banner}/>;
    }
    return (
      <div onClick={this.buttonHandler} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {myVariable}
          </p>
          {myBanner}
          {
            this.state.isOpen && 
            <Header banner={this.state.banner}/>
          }
          <input value={this.state.banner} onChange={this.textHandler}/>
          <button  onClick={this.buttonHandler} >Click Me</button>
          <button style={{ backgroundColor: this.state.color }} onClick={this.onChange}> <p>Click to change the color of button</p></button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
