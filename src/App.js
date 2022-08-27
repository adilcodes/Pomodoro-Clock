import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TimerLength from "./components/TimerLength";
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";

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
          <Header heading = "Pomodoro Clock" subHeading = "Also known as 25 + 5 Clock" />
        </div>

        <div className="row">
          <TimerLength
            title = "Break Length"
            btnDisabledStatus = {timer}
            clickHandler = {changePeriod}
            type = "break"
            periodTime = {breakTime}
          />

          <TimerLength
            title = "Session Length"
            btnDisabledStatus = {timer}
            clickHandler = {changePeriod}
            type = "session"
            periodTime = {sessionTime}
          />
        </div>

        <div className="row timer-display-row flex">
          <TimerDisplay
            breakStatus = {breakStatus}
            timeInSec = {displayTime} 
            formattedTime = {formatTime(displayTime)} 
          />
        </div>

        <div className="row flex">
          <TimerControls 
            timer = {timer}
            playStopHandler = {playStopTimer}
            resetClickHandler = {resetTimer}
          />
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
