import React from "react";

class Input extends React.Component{
    render(){
        return(
            <div className="text-center mt-5">
                <input type="number" className="form-control mb-2 border border-dark" placeholder="Enter Number One..." value={this.props.input1} onChange={(e)=>this.props.handleInput1(e.target.value)}/>
                <input type="number" className="form-control border border-dark" placeholder="Enter Number Two..." value={this.props.input2} onChange={(e)=>this.props.handleInput2(e.target.value)} />
            </div>
        )
    }
}

export default Input;