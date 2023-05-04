import React, { useState, useEffect } from 'react'

import "./stylesheets/Details.css"
const messageStatistics = {
    "message":"Statistics retrieved",
    "data":[
        {
            "name":"Prof. Bruce Wayne","roomNumber":"208"
        },{
            "name":"Prof. Bruce Wayne","roomNumber":"013"
        },{
            "name":"Prof. Bruce Wayne","roomNumber":"210"
        },{
            "name":"Prof. Bruce Wayne","roomNumber":"013"
        }]
    }

export default function Details({ selectedClass, data, setData, onStateChange}) {
    const handleButtonClick = () => {
        // Call the onStateChange function passed down from the parent component
        // with the updated state value as an argument
        onStateChange();
    };

    let url = `http://localhost:3001/get-lecture-info/${selectedClass}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            mode: 'cors', // Add this option
          })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
            .catch(error => console.error(error))
    }, [])
    
        /*if(data === null) {
            setData(testMessage)
        }*/

    console.log(data?.data)

    return (
        <div className="details">
            <h1>{selectedClass}</h1>
            <table>
                <tr>
                    <td>Lecturer:</td>
                    <td>{data?.data[0].name}</td>
                </tr>
                <tr>
                    <td>Room:</td>
                    <td>{data?.data[0].roomNumber}</td>
                </tr>
            </table>
            <button onClick={handleButtonClick}>Show me the way!</button>
        </div>
    )
}