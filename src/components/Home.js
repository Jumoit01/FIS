import React, { useState } from 'react'

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



export default function Home() {
    const [selectedMajor, setSelectedMajor] = useState('default');
    const [selectedSemester, setSelectedSemester] = useState('default');
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10));
    const [selectedClass, setSelectedClass] = useState(null);
    const [showPath, setShowPath] = useState(false);

    const handleMajorChange = (event) => {
        setSelectedMajor(event.target.value);
    }
    const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
    }
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    }
    const handleStateChange = (updatedValue) => {
        setSelectedClass(updatedValue);
    }
    const handleShowPathChange = () => {
        setShowPath(!showPath);
    }
    const exitShowPathChange = () => {
        setShowPath(false);
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
                <div className='filter' id='dateFilter'>
                    <h4>Date:</h4>
                    <input type="date" value={selectedDate} onChange={handleDateChange} />
                </div>
            </div>
            {
                selectedMajor !== "default" && selectedSemester !== "default" ? (
                    <Schedule selectedMajor={selectedMajor} selectedSemester={selectedSemester} selectedDate={selectedDate} onStateChange={handleStateChange}/>
                ) : (
                    null
                )
            }
            {
                selectedClass !== null ? (<Details selectedClass={selectedClass} onStateChange={handleShowPathChange} />) : null 
            }
            {
                showPath === true ? (<Router exit={exitShowPathChange}  />) : null
            }
            
        </div>
    )
}