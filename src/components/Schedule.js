import './stylesheets/Schedule.css'


const schedule = {
    date: new Date().toISOString().substring(0, 10),
    major: "SWB",
    semester: 6,
    schedule: [
        null,
        "Software Engineering",
        "IT Security"
    ]
}

export default function Schedule({ selectedMajor, selectedSemester, selectedDate, onStateChange }) {
    console.log("selectedMajor", selectedMajor)
    console.log("selectedSemester", selectedSemester)
    console.log("selectedDate", selectedDate)
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
                <h4>Selected Date: {selectedDate}</h4>
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
                        <td>
                            <div>
                                {schedule.schedule[0]}
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>13pm - 15pm</th>
                        <td>
                            <div onClick={() => {
                                handleButtonClick(schedule.schedule[1])
                            }}>
                                {schedule.schedule[1]}
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>15pm - 17pm</th>
                        <td>
                            <div>
                                {schedule.schedule[2]}
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}