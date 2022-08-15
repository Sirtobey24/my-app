import React, { Component } from "react";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { menu: [], submenu: [] };

    }
    componentDidMount() {
        fetch("https://stream-restaurant-menu-svc.herokuapp.com/category")
            .then((response) => response.json())
            .then((result) => this.setState({ menu: result }));
    };
    FetchData = (short_name) => {
        fetch(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`)
            .then((response) => response.json())
            .then((result) => this.setState({ submenu: result }));
    };

    render() {
        return (
            <div id="menu">
                <h1>Menu Categories</h1>
                <ul>
                    {this.state.menu.map((data) => (
                        <li onClick={() => this.FetchData(data.short_name)}>{data.name} - ({data.short_name})</li>
                    ))}
                </ul>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.submenu.map((data) => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
