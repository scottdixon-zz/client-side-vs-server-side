import React, { Component } from 'react';

class GroceryForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item: '',
      qty: 0,
      purchased: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }
  handleInputChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render () {
    return (
    <form onSubmit={this.handleSubmit}>

      <div className="field">
        <label htmlFor="grocery_item">Item</label>
        <input id="grocery_item" type="text" name="item" autoFocus value={this.state.item} onChange={this.handleInputChange} />
      </div>

      <div className="field">
        <label htmlFor="grocery_qty">Qty</label>
        <input id="grocery_qty" type="number" name="qty" value={this.state.qty} onChange={this.handleInputChange} />
      </div>

      <div className="field">
        <label htmlFor="grocery_purchased">Purchased</label>
        <input id="grocery_purchased" type="checkbox" value="1" name="purchased" checked={this.state.purchased} onChange={this.handleInputChange} />
      </div>

      <div className="actions">
        <input type="submit" name="commit" value="Create Grocery" />
      </div>
    </form>
    )
  }
}

export default GroceryForm;
