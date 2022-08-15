import React from "react";

// const Bulb = (props) => {
//     const changeBulb = () => {
//         props.on = false;
//     };
//     return (
//         <div>
//             <div className={props.on ? 'bulb on' : "bulb off"}>Bulb</div>
//             <button onClick={changeBulb}>On/Off</button>
//         </div>
//     );
// };


class Bulb extends React.Component {
    constructor(props) {
        super(props);

        this.state = { on: true, count: 0 };
    }

    onBtnClick = () => {
       const newCount = this.state.count++;
       let updatedOn = !this.state.on;

       this.setState({count: newCount, on: updatedOn});

    }


    render() {
        return (
            <div>
                <div className={this.state.on ? 'bulb on' : "bulb off"}>Bulb</div>
                <button onClick={this.onBtnClick}>On/Off</button>
                {/* <span>count={this.state.count}</span> */}
            </div>
        );
    }
}

export default Bulb;