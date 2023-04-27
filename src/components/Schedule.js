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
                <table>
                    <tr>
                        <th>timeslot</th>
                        <th>class</th>
                    </tr>
                    <tr>
                        <td>9am - 12pm</td>
                        <td>
                            <div>
                                {schedule.schedule[0]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>13pm - 15pm</td>
                        <td>
                            <div onClick={() => {
                                handleButtonClick(schedule.schedule[1])
                            }}>
                                {schedule.schedule[1]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>15pm - 17pm</td>
                        <td>
                            <div>
                                {schedule.schedule[2]}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}