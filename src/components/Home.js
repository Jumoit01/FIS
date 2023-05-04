import React, { useState, useEffect } from 'react'

import useSWR from 'swr';

import Schedule from "./Schedule"
import Details from './Details';
import Router from './Router';

import "./stylesheets/Home.css"

const options = [
    {
        major: "SWB",
        semester: [1, 2, 3, 4, 6]
    },
    {
        major: "TIB",
        semester: [1, 2, 3, 4, 6]
    },
    {
        major: "WKB",
        semester: [1, 2, 3, 4, 6]
    }
]

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



export default function Home() {
    const [selectedMajor, setSelectedMajor] = useState('default');
    const [selectedSemester, setSelectedSemester] = useState('default');
    const [selectedClass, setSelectedClass] = useState(null);
    const [showPath, setShowPath] = useState(false);
    
    const [data, setData] = useState(null);
    const [classData, setClassData] = useState(null);

    const handleMajorChange = (event) => {
        setSelectedMajor(event.target.value);
    }
    const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
    }
    const handleStateChange = (updatedValue) => {
        setSelectedClass(updatedValue);
    }
    const handleShowPathChange = () => {
        setShowPath(!showPath);
    }
    const exitShowPathChange = () => {
        setShowPath(false);
        setSelectedClass(null)
    }

    return(
        <div className='main' id='homeMain'>
            <div className='title'>
                <h1>Faculty Information System</h1>
            </div>
            <div className='filterOption'>
                <h2>Choose your schedule:</h2>
                <div className='filter' id='majorFilter'>
                    <h4>Major:</h4>
                    <select value={selectedMajor} defaultValue="default" onChange={handleMajorChange}>
                        <option value="default" disabled>Select Major</option>
                        {
                            options.map((major, key) => {
                                return (
                                    <option value={major.major}>{major.major}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='filter' id='semesterFilter'>
                    <h4>Semester:</h4>
                    <select value={selectedSemester} defaultValue="default" onChange={handleSemesterChange}>
                        <option value="default" disabled>Select Semester</option>
                        {
                            selectedMajor !== "default" ? (
                                options.map((major) => {
                                    if(major.major === selectedMajor) {
                                        return major.semester.map((semester) => {
                                            return (
                                                <option value={semester}>{semester}</option>
                                            )
                                        })
                                    } else {
                                        return null
                                    }
                                })
                            ) : (
                                null
                            )
                        }
                    </select>
                </div>
            </div>
            {
                selectedMajor !== "default" && selectedSemester !== "default" ? (
                    <Schedule selectedMajor={selectedMajor} selectedSemester={selectedSemester} data={data} setData={setData} onStateChange={handleStateChange}/>
                ) : (
                    null
                )
            }
            {
                selectedClass !== null ? (<Details selectedClass={selectedClass} data={classData} setData={setClassData} onStateChange={handleShowPathChange} />) : null 
            }
            {
                showPath === true ? (<Router exit={exitShowPathChange} roomNumber={classData.data[0].roomNumber} />) : null
            }
            
        </div>
    )
}