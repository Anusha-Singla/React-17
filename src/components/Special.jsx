import React, { Component } from 'react'

export default class Special extends Component {
    constructor(props) {
        super(props);
        this.state = { showHiddenPassword: false }
        this.handleToggle = this.handleToggle.bind(this)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Prev state', prevState); // Before update
        console.log('New state', this.state); // After update 
    }
    handleToggle = () => this.setState({ showHiddenPassword: !this.state.showHiddenPassword });
    handleAction = (e) =>{
        //Synthetic events
        e.preventDefault();
        console.log("I am hit!", e)
    }
    
    render() {
        const { showHiddenPassword } = this.state;       
        return (
            <div>
                {console.log("propsprops", this.props)}
                The color of this sepcial component should be {this.props.favColor} because if this is a special component we will reuse it.
                Using this component I can learn lifecycle methods.
                <br />
                <input type={showHiddenPassword ? "text" : "password"} />
                <button onClick={this.handleToggle}>Toggle hidden password</button>
                {/* onclick is an event here, handleAction is an action */}
                <button onClick={this.handleAction.bind(this)}>Handle Action</button>
                <h4 className='event'>Wohoo!</h4>
            </div>
        )
    }
}

