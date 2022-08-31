import Button from './Button';
import React, { Component } from 'react';
class Calci extends Component {
    constructor(props) {
        super(props);

        this.state = { val: 0 }
    }
    inpuVal = event => {
        this.setState({ val: event.target.value });
    }
    dotflag = 0;
    //    prevoperator={"+":true,"-":true,"*":true,"/":true,"%":true};
    operatorflag = 0;
    counter = 0
    add = event => {
        let digit = event.target.innerText;
        if (this.counter === 0 || this.state.val[0]==='0') {
            if (digit === '+' || digit === '-' || digit === '*' || digit === '/' || digit === '%') {
                return false;
            } else {
                this.setState({ val: digit })

                this.counter = this.counter + 1;
                return false;
            }

        }


        if (digit === '.') {
            if (this.dotflag > 0)
                return false;
            this.dotflag = this.dotflag + 1

        }
        if (digit === '+' || digit === '-' || digit === '*' || digit === '/' || digit === '%') {
            this.dotflag = 0;

            if (this.operatorflag > 0)
                return false;

            this.operatorflag = this.operatorflag + 1
        }
        else {
            this.operatorflag = 0
        }
        this.setState({ val: this.state.val + digit })

    }
    cleared = event => {
        this.setState({ val: 0 })

    }
    resulter = event => {
        let digit=this.state.val.charAt(this.state.val.length - 1);
        
        if (digit === '+' || digit === '-' || digit === '*' || digit === '/' || digit === '%') {
            this.state.val=this.state.val.slice(0, -1);
        console.log(digit+" :  "+this.state.val)
        }
        let y = eval(this.state.val)
        console.log(y)
        this.setState({ val: y })
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="calcu" id="calcu">
                        <div className="bar upper" ><div id="divbtn"><button className="sqbtn" id="navbtn1"></button> <button className="sqbtn" id="navbtn2"></button> <button className="sqbtn" id="navbtn3"></button></div>
                            <div>
                                <label className="switch">
                                    {/* <input type="checkbox" onClick={this.inpuVal} value={this.state.value} checked /> */}
{/* qwe */}
                                    {/* <input type="checkbox" checked /> */}
                                    <span className="slider round"></span>
                                </label></div>
                        </div>
                        <table>
                            <thead id="x1">
                                <tr>
                                    <td colSpan="4">
                                        <input id="deep" className="upper input" type="text" onChange={this.inpuVal} value={this.state.val} disabled />
                                    </td>
                                </tr>
                            </thead>
                            <tbody id="tbody">
                                <tr>
                                    <Button fun={this.cleared} cls="sqbtn reset sp1" txt="C" />
                                    <Button fun={this.copyr} cls="sqbtn btn sp1" txt="&copy;" />
                                    <Button fun={this.add} cls="sqbtn btn sp1" txt="%" />
                                    <Button fun={this.add} cls="sqbtn btn sp1" txt="/" />
                                </tr>
                                <tr>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="7" id="sp">7</Button>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="8" id="sp">8</Button>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="9" id="sp">9</Button>
                                    <Button fun={this.add} cls="sqbtn btn sp1" txt="*">&times;</Button>
                                </tr>
                                <tr>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="4" id="sp">4</Button>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="5" id="sp">5</Button>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="6" id="sp">6</Button>
                                    <Button fun={this.add} cls="sqbtn btn sp1" txt="-">-</Button>
                                </tr>
                                <tr>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="1" id="sp">1</Button>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="2" id="sp">2</Button>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="3" id="sp">3</Button>
                                    <Button fun={this.add} cls="sqbtn btn sp1" txt="+">+</Button>
                                </tr>
                                <tr>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="0" id="sp">0</Button>
                                    <Button fun={this.add} cls="sqbtn btn sp" txt="." id="sp">.</Button>

                                    <Button cls="sqbtn power sp" id="sp" fun={this.square} txt="Sq">Sq</Button>
                                    <Button cls="sqbtn result bgButton" fun={this.resulter} txt="=" style={{ backgroundColor: "rgb(0, 204, 143)", color: "white" }}>=</Button>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default Calci;