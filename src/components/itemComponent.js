import React, { Component } from 'react';

class Item extends Component {
    state = {  } 
    render() { 
        const {title, value, itemObj, addProduct, removeProduct, handleDelete } = this.props
        return (
            <div className='container'>
                <div className='row align-items-start m-2'>
                    <div className='col'>
                        <div>
                            <h3>{title}</h3>
                            <h5>{value}</h5>
                        </div>
                    </div>
                    <div className='col'>
                        <button onClick={ () => removeProduct(itemObj)} 
                        className='btn btn-warning m-2'>Remove</button>
                        <button onClick={ () => addProduct(itemObj)}
                        className='btn btn-success m-2'>Add</button>
                        <button onClick={ () => handleDelete(itemObj.id)}
                        className='btn btn-danger m-2'>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Item;
// hey