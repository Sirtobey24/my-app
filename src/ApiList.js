import React, { Component } from "react";
import { render } from "react-dom";

export default class ApiList extends Component {
    constructor(props) {
        super(props)
        this.state = { employee: [] };

    }

    fetchData = () => {
        fetch("https://dummy.restapiexample.com/api/v1/employees")
            .then((response) => response.json())
            .then((result) => this.setState({ employee: result.data }))

    }

    render() {
        return (
            <>
                <button onClick={this.fetchData}>Fetch</button>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employee.map((data) => (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.employee_name}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </>
        )
    }
}

