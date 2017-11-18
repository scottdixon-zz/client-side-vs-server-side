import React, { Component } from 'react';

class GroceryItem extends Component {
  constructor(props) {
    super(props)
    this.handleDestroy = this.handleDestroy.bind(this)
    this.handleUpdatePurchased = this.handleUpdatePurchased.bind(this)
  }
  handleDestroy () {
    this.props.handleDestroy(this.props.id)
  }
  handleUpdatePurchased () {
    this.props.handleUpdatePurchased(this.props.id)
  }
  render () {
    return (
      <tr>
        <td>{this.props.item}</td>
        <td>{this.props.qty}</td>
        <td><input type="checkbox" name="purchased" checked={this.props.purchased} onChange={this.handleUpdatePurchased} /></td>
        <td><a onClick={this.handleDestroy}>Destroy</a></td>
      </tr>
    )
  }
}

export default GroceryItem;
