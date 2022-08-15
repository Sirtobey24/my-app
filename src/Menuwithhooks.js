import React, { useEffect, useState } from "react";

export default function Menuwithhooks() {


    const [menu, setMenu] = useState([]);
    const [submenu, setsubMenu] = useState([]);

    useEffect(() => {
        fetch("https://stream-restaurant-menu-svc.herokuapp.com/category")
            .then((response) => response.json())
            .then((result) => setMenu(result));
    }, [])

    // useEffect((short_name) => {
    //     axios
    //         .get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`)
    //         .then((response) => { setsubMenu(response.data) });
    // }, [])

    const FetchData = (short_name) => {
        fetch(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`)
            .then((response) => response.json())
            .then((result) => setsubMenu(result));
    };
    return (
        <div id="menu">
            <h1>Menu Categories</h1>
            <ul>
                {menu.map((data) => (
                    <li onClick={() => FetchData(data.short_name)}>{data.name} - ({data.short_name})</li>
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
                    {submenu.map((data) => (
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