import React, { Component } from 'react';
import ShoppingCart from './shoppingCart';

class Layout extends Component {
    constructor(){
        super();
        this.state = {
            items : [
                { id:1, value:4, title: "Product One"},
                { id:2, value:5, title: "Product Two"},
                { id:3, value:1, title: "Product Three"},
                { id:4, value:0, title: "Product Four"},
            ]
          };
        this.addProduct = this.addProduct.bind(this)
        this.removeProduct = this.removeProduct.bind(this) 
        this.handleDelete = this.handleDelete.bind(this)
    }
    addProduct(itemObj){
        console.log(itemObj)
        const items = [...this.state.items];
        const index = items.indexOf(itemObj);
        console.log(index);
        items[index].value++;
        this.setState({items : items})
    }
    removeProduct(itemObj) {
        console.log(itemObj)
        const items = [...this.state.items];
        const index = items.indexOf(itemObj);
        console.log(index);
        if (items[index].value > 0){
            items[index].value--;
            this.setState({items : items})
        }
    }
    handleDelete(itemID){
        console.log(itemID);
        if (window.confirm("Are you sure you want to delete this product?")){
            const newItems = this.state.items.filter((i) => i.id !==itemID);
            this.setState({items:newItems})
        }else{
            console.log("Deletion canceld")
        }
    }
    render() { 
        return (
            <div>
                <ShoppingCart 
                    items = {this.state.items}
                    addProduct = {this.addProduct}
                    removeProduct = {this.removeProduct}
                    handleDelete = {this.handleDelete}
                />
            </div>
    );
    }
}
 
export default Layout;