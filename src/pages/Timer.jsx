import axios from "axios";
import React, { useState } from "react";

export default function Timer() {
  const [hour, sethour] = useState(0);
  const [min, setmin] = useState(0);
  const [sec, setsec] = useState(0);
  const [count, setcount] = useState(0);
  const [timer, settimer] = useState(false);
  const [show, setshow] = useState(false);

  const handleTimer = async (arg) => {
    const { data } = await axios.post("http://localhost:5000/user", arg);
  };

  const timerStart = () => {
    setshow(true);
    settimer(true);
    time();
  };
  const time = setTimeout(() => {
    if (timer == true) {
      setcount(count + 1);
      if (count == 100) {
        setsec(sec + 1);
        setcount(0);
      }
      if (sec == 60) {
        setmin(min + 1);
        setsec(0);
      }
      if (min == 60) {
        sethour(hour + 1);
        setmin(0);
      }
    }
  }, 10);

  return (
    <>
      <div class="card col-sm-6 offset-3 mt-2">
        <div class="card-header fw-bold text-center">Timer</div>
        <div class="card-body d-flex justify-content-around mx-4">
          <h2>{hour} : hr</h2>
          <h2>{min} : min</h2>
          <h2>{sec} : sec</h2>
        </div>
        <div class="card-footer d-flex ">
          <button
            onClick={(e) => {
              timerStart();
            }}
            className="btn btn-success mx-5"
          >
            Sart
          </button>
          <button
            onClick={(e) => settimer(false)}
            className="btn btn-success mx-5"
          >
            stop
          </button>
          <button
            onClick={(e) => setshow(false)}
            className="btn btn-success mx-5"
          >
            save
          </button>
        </div>
      </div>
      {show && (
        <div>
          <div class="container mt-5">
            <div class="row">
              <div class="col-sm-6 offset-sm-3">
                <div class="card">
                  <div class="card-header">task</div>
                  <div class="card-body">
                    <div>
                      <label for="task" class="form-label">
                        First task
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        onClick={(e) => handleTimer()}
                        id="task"
                        placeholder="Enter Your task"
                      />
                    </div>

                    <button type="button" class="btn btn-primary w-100 mt-3">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
