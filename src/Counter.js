import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

   
    handleChange =() => {
    this.props.changeName(this.state.name)
    }

    render() {
        return (
            <>
                <p>Count: {this.props.newCounter}</p>
                <p>hello, {this.props.user}</p>
                <input type="text" value={this.props.name} onChange={this.handleChange}></input>
                <input type="submit" value="Submit" />
                <button onClick={this.props.incrementValue}>IncCount</button>
                <button onClick={this.props.decrementValue}>DecCount</button>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementValue: function () {
            dispatch({ type: "INCREMENT_VALUE" })
        },
        decrementValue: function () {
            dispatch({ type: "DECREMENT_VALUE" })
        },
        changeName: function (name) {
            dispatch({ type: "CHANGE_NAME", payload: name })
        }
    }
}

const mapStatetoProps = (store) => ({
    user: store.name,
    newCounter: store.newCounter,
});

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);