export default function Details({selectedClass}) {
    return (
        <div>
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
            <button>Show me the way!</button>
        </div>
    )
}