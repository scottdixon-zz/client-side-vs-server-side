import React, { Component } from 'react';
import GroceryItem from './components/GroceryItem';
import GroceryForm from './components/GroceryForm';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showGroceryForm: false,
      groceries: []
    };
    this.toggleGroceryForm = this.toggleGroceryForm.bind(this);
    this.handleGrocerySubmit = this.handleGrocerySubmit.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleUpdatePurchased = this.handleUpdatePurchased.bind(this);
  }
  componentDidMount () {
    axios.get('http://localhost:3001/groceries.json')
      .then(res => {
        let groceries = res.data
        this.setState({ groceries });
      });
  }
  toggleGroceryForm () {
    this.setState({ showGroceryForm: !this.state.showGroceryForm })
  }
  handleGrocerySubmit (item) {
    this.toggleGroceryForm()
    axios.post('http://localhost:3001/groceries.json', item)
      .then(res => {
        let groceries = [...this.state.groceries, res.data]
        this.setState({ groceries });
      });
  }
  handleDestroy (id) {
    let groceries = this.state.groceries.filter(item => item.id !== id)
    axios.delete(`http://localhost:3001/groceries/${id}.json`)
      .then(res => {
        this.setState({ groceries });
      });
  }
  handleUpdatePurchased (id) {
    let groceries = [...this.state.groceries]
    let itemIndex = groceries.findIndex(item => item.id === id)
    groceries[itemIndex].purchased = !groceries[itemIndex].purchased
    this.setState({ groceries })
    axios.put(`http://localhost:3001/groceries/${id}.json`, groceries[itemIndex])
  }
  render () {
    return (
      <div className="App">
        <h1>Groceries</h1>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Purchased</th>
              <th colSpan="3"></th>
            </tr>
          </thead>

          <tbody>
            {this.state.groceries.map((listValue) => {
              return <GroceryItem key={listValue.id} handleUpdatePurchased={this.handleUpdatePurchased} handleDestroy={this.handleDestroy} {...listValue} />;
            })}
          </tbody>
        </table>

        <br/>

        <a onClick={this.toggleGroceryForm}>New Grocery</a>
        <br />
        { this.state.showGroceryForm ? (<GroceryForm onSubmit={this.handleGrocerySubmit}/>) : ('') }

      </div>
    );
  }
}

export default App;
