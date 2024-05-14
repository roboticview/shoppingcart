import React, { Component } from 'react';
import Item from './itemComponent';

class ShoppingCart extends Component {
    render() { 
        return (
            <div>
                {this.props.items.map( item =>
                    <Item
                    key = {item.id}
                    title = {item.title}
                    value = {item.value}
                    itemObj = {item}
                    addProduct = {this.props.addProduct}
                    removeProduct = {this.props.removeProduct}
                    handleDelete = {this.props.handleDelete}
                    />
                )}
            </div>
    );
    }
}
 
export default ShoppingCart;