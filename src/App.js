import React from "react";

function App() {
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
              <a type="button" className="waves-effect waves-light btn">
                <i class="material-icons">arrow_downward</i>
              </a>
              <span className="time-length-text">5</span>
              <a type="button" className="waves-effect waves-light btn">
                <i class="material-icons">arrow_upward</i>
              </a>
            </div>
          </div>

          <div className="col s12 m6 l6 time-length flex">
            <h4>Session Length</h4>
            <div className="controls flex">
              <a type="button" className="waves-effect waves-light btn">
                <i class="material-icons">arrow_downward</i>
              </a>
              <span className="time-length-text">25</span>
              <a type="button" className="waves-effect waves-light btn">
                <i class="material-icons">arrow_upward</i>
              </a>
            </div>
          </div>

        </div>

        <div className="row timer-display-row flex">
          <div className="col s9 timer-display flex">
            <div>
              <h5 className="center-align">Break</h5>
              <h1 className="center-align">25:00</h1>
            </div>
          </div>
        </div>

        <div className="row flex">
          <div className="col s9 timer-controls flex">
            <a type="button" className="waves-effect waves-light btn btn-floating orange accent-3 pulse">
              <i class="material-icons">play_arrow</i>
            </a>
            <a type="button" className="waves-effect waves-light btn btn-floating red lighten-1">
              <i class="material-icons">replay</i>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
