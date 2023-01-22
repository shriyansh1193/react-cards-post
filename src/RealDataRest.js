import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MyScroll } from './MyScroll';

const RealData = () => {
    let myScroll = MyScroll();
    const [tableContent, setTableContent] = useState([]);

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => setTableContent(json));
    }, []);

    const mystyle = {
        backgroundColor: "aqua",
        borderColor: "red",
        margin: "0px auto",
        padding: "10px"
    };
    return(
        <table style={mystyle} border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UserID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {tableContent.slice(0, myScroll).map(content => {
                    return(
                        <tr key={content.id}>
                            <td>{content.id}</td>
                            <td>{content.userId}</td>
                            <td>{content.title}</td>
                            <td>{content.completed}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default RealData;