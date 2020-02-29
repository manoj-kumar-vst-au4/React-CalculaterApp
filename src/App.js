import React from 'react';
import Input from "./component/input";
import Button from "./component/buttons";

class App extends React.Component{
  state={
    input1:"",
    input2:"",
    result:""
  }

  handleInput1=(e)=>{
    this.setState({
      input1:e
    })
  }

  handleInput2=(e)=>{
    this.setState({
      input2:e
    })
  }

  add =()=>{
    let num1 = parseFloat(this.state.input1);
    let num2 = parseFloat(this.state.input2);
    let sum = num1+num2;
    this.setState({
      result:sum,
      input1:"",
      input2:""
    })
  }

  sub =()=>{
    let num1 = parseFloat(this.state.input1);
    let num2 = parseFloat(this.state.input2);
    let diff = num1-num2;
    this.setState({
      result:diff,
      input1:"",
      input2:""
    })
  }

  mul =()=>{
    let num1 = parseFloat(this.state.input1);
    let num2 = parseFloat(this.state.input2);
    let mul = num1*num2;
    this.setState({
      result:mul,
      input1:"",
      input2:""
    })
  }

  dvd =()=>{
    let num1 = parseInt(this.state.input1);
    let num2 = parseInt(this.state.input2);
    let dvd = num1/num2;
    this.setState({
      result:dvd,
      input1:"",
      input2:""
    })
  }

  render(){
    return(
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4 offset-md-4 border border-dark rounded-lg bg-light pb-5">
            <Input
             handleInput1={this.handleInput1}
             handleInput2={this.handleInput2}
             input1={this.state.input1}
             input2={this.state.input2}
            />
            <Button
              add={this.add}
              sub={this.sub}
              mul={this.mul}
              dvd={this.dvd}
            />
            <div className="text-center mt-3">
            <button className="btn btn-dark border border-dark">Result:{this.state.result}</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default App;
