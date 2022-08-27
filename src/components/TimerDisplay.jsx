import React from 'react'

function TimerDisplay(props) {
  return (
    <>
        <div className="col s9 timer-display flex">
          <div>
            <h5 id="timer-label" className="center-align">{props.breakStatus ? "Break" : "Session"}</h5>
            <h1
              id="time-left"
              className={`center-align ${props.timeInSec <= 60 ? "red-text text-darken-4" : ""}`}
            >{props.formattedTime}</h1>
          </div>
        </div>
    </>
  )
}

export default TimerDisplay
