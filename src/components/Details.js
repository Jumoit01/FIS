export default function Details({ selectedClass, onStateChange}) {
    const handleButtonClick = () => {
        // Call the onStateChange function passed down from the parent component
        // with the updated state value as an argument
        onStateChange();
    };
    return (
        <div className="details">
            <h1>{selectedClass}</h1>
            <table>
                <tr>
                    <td>Lecturer:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Room:</td>
                    <td></td>
                </tr>
            </table>
            <button onClick={handleButtonClick}>Show me the way!</button>
        </div>
    )
}