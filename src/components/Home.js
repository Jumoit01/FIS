import React, { useState } from 'react'

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

    const handleMajorChange = (event) => {
        setSelectedMajor(event.target.value);
    }
    const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
    }
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    }

    return(
        <div className='main' id='homeMain'>
            <h1>Faculty Information System</h1>
            <div className='filterOption'>
                <h2>Choose your schedule:</h2>
                <div className='filter' id='majorFilter'>
                    <h4>Major:</h4>
                    <select value={selectedMajor} onChange={handleMajorChange}>
                        <option value="default" selected disabled>Select Major</option>
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
                    <select value={selectedSemester} onChange={handleSemesterChange}>
                        <option value="default" selected disabled>Select Semester</option>
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
                    <DisplaySchedule selectedMajor={selectedMajor} selectedSemester={selectedSemester} selectedDate={selectedDate} />
                ) : (
                    null
                )
            }
        </div>
    )
}

function DisplaySchedule({ selectedMajor, selectedSemester, selectedDate }) {
    console.log("selectedMajor", selectedMajor)
    console.log("selectedSemester", selectedSemester)
    console.log("selectedDate", selectedDate)
    return (
        <div>
            <h1>Schedule</h1>
        </div>
    )
}