import React from "react";
import Special from "./Special";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteColor: "white",
            showModal: "" 
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favouriteColor: "turquoise" })
        }, 1000)
    }
    render() {
        return (
            <> 
            {console.log("WflrkgmlCKWHEUFV", this.props)}
                New - {this.state.favouriteColor}
                <Special favColor="Wine" />
                <button onClick={this.updateColor}>Update Me</button>
                <button>Open Modal</button>
            </>
        )
    }
}