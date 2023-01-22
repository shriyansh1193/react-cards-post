import React , { Component } from 'react';

class MyTestComp extends Component {

state = {
    isActive: false,
    isRaining: false
}

handleClick = () => {
    this.setState ( { isActive: !this.state.isActive })
}

checkRain = () => {
    this.setState ( { isRaining: !this.state.isRaining })
}

    render() {
        return (
            <div className="MyTestComp">
                <button onClick = { this.handleClick }>
                    {this.props.show ? "Hide" : "Show"}
                </button>
                <button onClick = { this.checkRain }>
                    {this.props.show ? "Raining" : "Not Raining"}
                </button>
            </div>
        );
    }
}

export default MyTestComp;