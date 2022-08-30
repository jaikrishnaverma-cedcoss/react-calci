import React, { Component } from 'react';
class Button extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( 
            <>
            <td><button onClick={this.props.fun} className={this.props.cls} >{this.props.txt}</button></td>
            </>
         );
    }
}
 
export default Button;