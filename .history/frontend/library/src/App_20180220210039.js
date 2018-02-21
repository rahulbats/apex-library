import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      count:0
    }
  }
  componentWillMount() {
    fetch('https://0zuvo81376.execute-api.us-west-2.amazonaws.com/dev/')
      .then(result=>{
        return result.json();
      })
      .then(result=>{
        console.log(JSON.stringify(result) );
        this.setState({items:result.Items, count:result.Count})
      })
      .catch(error=>{
        console.error(error);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Table  striped bordered condensed hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            
          </tr>
        </thead>
        <tbody>
          {
            this.state.items.map(item=>{
                return <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          
                        </tr>
            })
          }
          
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
