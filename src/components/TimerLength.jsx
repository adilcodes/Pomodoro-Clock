import React from 'react'

function TimerLength(props) {
  return (
    <>
        <div className="col s12 m6 l6 time-length flex">
          <h4 id={props.type == "break" ? "break-label" : "session-label"}>{props.title}</h4>
          <div className="controls flex">
            <a 
              disabled={props.btnDisabledStatus}
              type="button"
              id={props.type == "break" ? "break-decrement" : "session-decrement"}
              className="waves-effect waves-light btn"
              onClick={() => {props.clickHandler(props.type, "decrement")}}
            >
              <i className="material-icons">arrow_downward</i>
            </a>

            <span
              className="time-length-text"
              id={props.type == "break" ? "break-length" : "session-length"}
            >
              {props.periodTime}
            </span>
            
            <a 
              disabled={props.btnDisabledStatus}
              type="button"
              id={props.type == "break" ? "break-increment" : "session-increment"}
              className="waves-effect waves-light btn"
              onClick={() => {props.clickHandler(props.type, "increment")}}
            >
              <i className="material-icons">arrow_upward</i>
            </a>
          </div>
        </div>
    </>
  )
}

export default TimerLength
