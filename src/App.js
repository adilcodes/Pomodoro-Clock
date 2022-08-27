import React, { useEffect, useState } from "react";

function App() {

  const [displayTime, setDisplayTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timer, setTimer] = useState(false);
  const [breakStatus, setBreakStatus] = useState(false);

  // Functions/Handlers

  const formatTime = (time) => {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes)
      + ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  const changePeriod = (type, status) => {
    if(type == "break"){

      if(breakTime < 60 && status == "increment"){
        setBreakTime(breakTime + 1);
      }else if(breakTime > 1 && status == "decrement"){
        setBreakTime(breakTime - 1);
      };
      
    }
    else if(type == "session"){

      if(sessionTime < 60 && status == "increment"){
        setSessionTime(sessionTime + 1);
        setDisplayTime(displayTime + 60)
      }else if(sessionTime > 1 && status == "decrement"){
        setSessionTime(sessionTime - 1);
        setDisplayTime(displayTime - 60)
      };

    };
  };

  const timeOut = setTimeout(() => {
    if(displayTime && timer){
      setDisplayTime(displayTime - 1);
    }
  }, 1000);

  const playStopTimer = () => {
    clearTimeout(timeOut);
    setTimer(!timer);
  }

  const timerMode = () => {
    const audio = document.getElementById("beep");
    if(!displayTime && !breakStatus){
      setDisplayTime(breakTime * 60);
      setBreakStatus(true);
      audio.play();
    }

    if(!displayTime && breakStatus){
      setDisplayTime(sessionTime * 60);
      setBreakStatus(false);
      audio.play();
    }
  }

  useEffect(() => {
    if(timer){
      timerMode();
    }else{
      clearTimeout(timeOut);
    }
  });

  const resetTimer = () => {
    clearTimeout(timeOut);
    setTimer(false);
    setDisplayTime(1500);
    setSessionTime(25);
    setBreakTime(5);
    setBreakStatus(false);
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  }



  return (
    <>
      <div className="container">

        <div className="row">
          <div className="col s12 main-heading">
            <h2 className="center-align">Pomodoro Clock</h2>
            <p className="center-align">Also known as 25 + 5 Clock</p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 l6 time-length flex">
            <h4>Break Length</h4>
            <div className="controls flex">
              <a 
                disabled={timer}
                type="button"
                className="waves-effect waves-light btn"
                onClick={() => {changePeriod("break", "decrement")}}
              >
                <i className="material-icons">arrow_downward</i>
              </a>
              <span className="time-length-text">{breakTime}</span>
              <a 
                disabled={timer}
                type="button"
                className="waves-effect waves-light btn"
                onClick={() => {changePeriod("break", "increment")}}
              >
                <i className="material-icons">arrow_upward</i>
              </a>
            </div>
          </div>

          <div className="col s12 m6 l6 time-length flex">
            <h4>Session Length</h4>
            <div className="controls flex">
              <a 
                disabled={timer}
                type="button"
                className="waves-effect waves-light btn"
                onClick={() => {changePeriod("session", "decrement")}}
              >
                <i className="material-icons">arrow_downward</i>
              </a>
              <span className="time-length-text">{sessionTime}</span>
              <a 
                disabled={timer}
                type="button"
                className="waves-effect waves-light btn"
                onClick={() => {changePeriod("session", "increment")}}
              >
                <i className="material-icons">arrow_upward</i>
              </a>
            </div>
          </div>

        </div>

        <div className="row timer-display-row flex">
          <div className="col s9 timer-display flex">
            <div>
              <h5 className="center-align">{breakStatus ? "Break" : "Session"}</h5>
              <h1
                className={`center-align ${displayTime <= 60 ? "red-text text-darken-4" : ""}`}
              >{formatTime(displayTime)}</h1>
            </div>
          </div>
        </div>

        <div className="row flex">
          <div className="col s9 timer-controls flex">
            <a 
              type="button"
              className={`waves-effect waves-light btn btn-floating orange accent-3 ${!timer ? "pulse" : ""}`}
              onClick = {playStopTimer}
            >
              <i className="material-icons">{!timer ? "play_arrow" : "pause"}</i>
            </a>
            <a 
            type="button"
            className="waves-effect waves-light btn btn-floating red lighten-1"
            onClick={resetTimer}
            >
              <i className="material-icons">replay</i>
            </a>
          </div>
        </div>

        <audio 
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
      </div>
    </>
  );
}

export default App;
