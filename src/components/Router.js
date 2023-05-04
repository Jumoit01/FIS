import ShowRoutes from "./ShowRoutes";

import "./stylesheets/Router.css"


export default function Router({exit, roomNumber}) {
    let roomNumberInt = parseInt(roomNumber)
    const handleExit = () => {
        exit();
    }
    let displayRoutes;
    switch(true) {
        case roomNumberInt >= 200:
            displayRoutes = () => {
                return(
                    <div>
                        <ShowRoutes roomnumber={100} />
                        <ShowRoutes roomnumber={-1} />
                        <ShowRoutes roomnumber={roomNumberInt} />
                    </div>
                )
            }
            break;
        case roomNumberInt >= 100:
            displayRoutes = () => {
                return(
                    <div>
                        <ShowRoutes roomnumber={100} />
                        <ShowRoutes roomnumber={roomNumberInt} />
                    </div>
                )
            }
            break;
        default:
            displayRoutes = () => {
                return(
                    <div>
                        <ShowRoutes roomnumber={roomNumberInt} />
                    </div>
                )
            }
            break;
    }
    return (
        <div className="router">
            <div className="exit" onClick={handleExit}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
            <div className="routesContainer">
                {
                    displayRoutes()
                }
            </div>
        </div>
    )
}