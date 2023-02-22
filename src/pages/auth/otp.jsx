import React, { useEffect, useState } from "react";

const OTP = ()  => {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const sendOTP = () => {
    setMinutes(1);
    setSeconds(1);
  };


  const resendOTP = () => {
    setMinutes(1);
    setSeconds(1);
  };

  

  return (
    <div className="container">
      <div className="card">

        <input
          placeholder="Enter OTP"
          value={otp}
          onChange={({ target }) => {
            setOtp(target.value);
          }}
        />
        <button onClick={sendOTP}>Generate Otp </button>

        
        <div className="countdown-text">
          {seconds > 0 || minutes > 0 ? (
            <p>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          ) : (
            <p>Didn't recieve code?</p>
          )}

          <button
            disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630"
            }}
            onClick={resendOTP}
          >
            Resend OTP
          </button>
        </div>

        <button class Name = "submit">SUBMIT</button>
      </div>
    </div>
  );
}

export default OTP