import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      count:0,
      item:null
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
  showItem(id) {
    fetch('https://0zuvo81376.execute-api.us-west-2.amazonaws.com/dev/item?id='+id)
      .then(result=>{
        return result.json();
      })
      .then(result=>{
        console.log(JSON.stringify(result) );
        this.setState({item:result.Item})
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

        {this.state.item == null?
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
                          <td onClick={()=>this.showItem(item.id)}>{item.id}</td>
                          <td>{item.name}</td>
                          
                        </tr>
            })
          }
          
          </tbody>
        </Table>
        :
        <div>
          <h3><i class="fa fa-arrow-left"></i> Book Detail</h3>
          <strong>ID:</strong><p>{this.state.item.id}</p><br/>
          <strong>NAME:</strong><p>{this.state.item.name}</p><br/>
          <strong>DESCRIPTION:</strong><p>{this.state.item.description}</p><br/>
          <strong>AUTHOR:</strong><p>{this.state.item.author}</p><br/>
        </div>
        }
      </div>
    );
  }
}

export default App;
