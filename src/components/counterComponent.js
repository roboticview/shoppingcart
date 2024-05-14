import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            tags : ["Good product", "On sale", "Free delivery"]
        };
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    handleIncrement() {
        this.setState({count : this.state.count + 1})
    }
    getBadge(){
        let bootClass = "badge m-2 "
        bootClass += this.state.count === 0 ? "text-bg-warning" : "text-bg-success"
        return bootClass
    }
    formatCount(){
        const {count} = this.state 
        return this.state.count === 0 ? "ZERO" : count
    }
    renderTags(){
        if (this.state.tags.length === 0){
            return <h3>No tags for this product</h3>;
        } else{
            return (
                <ul>
                    {this.state.tags.map(item =>(
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )
        }
    }
    render() { 
        return (
            <div>
                <span className={this.getBadge()}>
                {this.formatCount()}
                </span>
                <button onClick =  {this.handleIncrement}
                type="button" className="btn btn-info btn-sm">Increment</button>
                <div>
                    <h3>Product tags:</h3>
                    <div>{this.renderTags()}</div>
                </div>
            </div>
        );
    }
}
 
export default Counter;