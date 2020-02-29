import React from "react";

class Button extends React.Component{
    render(){
        return(
            <div className="text-center mt-3">
                <button className="btn btn-info border border-dark mr-1" onClick={this.props.add}>Add</button>
                <button className="btn btn-info border border-dark mr-1" onClick={this.props.sub}>Subtract</button>
                <button className="btn btn-info border border-dark mr-1" onClick={this.props.mul}>Multiply</button>
                <button className="btn btn-info border border-dark" onClick={this.props.dvd}>Divide</button>
            </div>
        )
    }
}

export default Button;