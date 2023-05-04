import React, { useState, useEffect } from 'react'


import './stylesheets/Schedule.css'

const testMessage = {
    "message":"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object] retrieved",
    "data":[
        {
            "lecture_name":"Statistics",
            "day_number":0,
            "time_slot":0
        },
        {
            "lecture_name":"Mathe 2",
            "day_number":0,
            "time_slot":2
        },
        {"lecture_name":"Electro Technology 2","day_number":1,"time_slot":0},{"lecture_name":"Programmieren 2","day_number":1,"time_slot":1},{"lecture_name":"Statistics","day_number":2,"time_slot":1},{"lecture_name":"Mathe 2","day_number":2,"time_slot":2},{"lecture_name":"Digital Technology 1","day_number":3,"time_slot":1},{"lecture_name":"Programmieren 2","day_number":3,"time_slot":2},{"lecture_name":"Digital Technology 1","day_number":4,"time_slot":1},{"lecture_name":"Electro Technology 2","day_number":4,"time_slot":2}]}




export default function Schedule({ selectedMajor, selectedSemester, data, setData, onStateChange }) {
    let multiArray = [];

    for(let i=0; i<3; i++) {
    multiArray[i] = [];

    for(let j=0; j<5; j++) {
        multiArray[i][j] = null;
    }
    }
    
    let url = `http://localhost:3001/get-schedule/${selectedMajor}/${selectedSemester}`

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
    const handleButtonClick = (selectedClass) => {
        // Call the onStateChange function passed down from the parent component
        // with the updated state value as an argument
        onStateChange(selectedClass);
    };

    return (
        <div className="schedule">
            <div>
                <h1>Schedule</h1>
                <h4>Selected Major: {selectedMajor}</h4>
                <h4>Selected Semester: {selectedSemester}</h4>
            </div>
            <div>
                <table className='calendar'>
                    <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                    <tr>
                        <th>9am - 12pm</th>
                        {
                            multiArray[0].map((item, key) => {
                                let obj = data?.data.find(item => item.day_number === key && item.time_slot === 0)

                                if(obj) {
                                    return (
                                        <td>
                                            <div onClick={() => {
                                                handleButtonClick(obj.lecture_name)
                                            }}>
                                                {obj.lecture_name}
                                            </div>
                                        </td>
                                    )
                                } else {
                                    return (
                                        <td></td>
                                    )
                                }
                            })
                        }
                    </tr>
                    <tr>
                        <th>13pm - 15pm</th>
                        {
                            multiArray[1].map((item, key) => {
                                let obj = data?.data.find(item => item.day_number === key && item.time_slot === 1)

                                if(obj) {
                                    return (
                                        <td>
                                            <div onClick={() => {
                                                handleButtonClick(obj.lecture_name)
                                            }}>
                                                {obj.lecture_name}
                                            </div>
                                        </td>
                                    )
                                } else {
                                    return (
                                        <td></td>
                                    )
                                }
                            })
                        }
                    </tr>
                    <tr>
                        <th>15pm - 17pm</th>
                        {
                            multiArray[2].map((item, key) => {
                                let obj = data?.data.find(item => item.day_number === key && item.time_slot === 2)

                                if(obj) {
                                    return (
                                        <td>
                                            <div onClick={() => {
                                                handleButtonClick(obj.lecture_name)
                                            }}>
                                                {obj.lecture_name}
                                            </div>
                                        </td>
                                    )
                                } else {
                                    return (
                                        <td></td>
                                    )
                                }
                            })
                        }
                    </tr>
                </table>
            </div>
        </div>
    )
}