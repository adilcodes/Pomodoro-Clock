import React from 'react'

function TimerControls(props) {
  return (
    <>
        <div className="col s9 timer-controls flex">
          <a 
            id="start_stop"
            type="button"
            className={`waves-effect waves-light btn btn-floating orange accent-3 ${!props.timer ? "pulse" : ""}`}
            onClick = {props.playStopHandler}
          >
            <i className="material-icons">{!props.timer ? "play_arrow" : "pause"}</i>
          </a>

          <a 
            id="reset"
            type="button"
            className="waves-effect waves-light btn btn-floating red lighten-1"
            onClick={props.resetClickHandler}
          >
            <i className="material-icons">replay</i>
          </a>
        </div>
    </>
  )
}

export default TimerControls
