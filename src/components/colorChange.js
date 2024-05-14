import React, { Component } from 'react';

class ColorChange extends Component {
    constructor(){
        super()
        this.state = { 
            color : "red",
            text: "Click to Change Color"
         } 
         this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        const newColor = this.state.color === "red" ? "green" : "red"
        const newText= this.state.text === "Click to Change Color" ? "You've Clicked Me!" : "Click to Change Color"
        this.setState({
            color : newColor,
            text: newText 
        })
    }
    render() { 
        return (
            <div>
                <h1> Color Box </h1>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div style = {{
                            width :'100px',
                            height : '100px',
                            backgroundColor : this.state.color
                        }}>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <button onClick={this.handleClick}
                        type="button" className="btn btn-primary btn-lg">
                            {this.state.text} 
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ColorChange;