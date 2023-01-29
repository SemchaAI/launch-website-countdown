import React, { useEffect, useRef, useState } from "react";
import styles from "./countdownByMySelf.module.css";
import cn from "classnames";
import Countdown from "react-countdown";

export const CountdownByMySelf = () => {
  let animFlag = useRef(false);

  const onTick = (tick) => {
    if (tick.milliseconds < 500) {
      animFlag.current = false;
    } else {
      animFlag.current = true;
    }
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return alert("its over");
    } else {
      // Render a countdown
      return (
        <div className={styles.countdown2}>
          <div className={styles[`time-section2`]} id="days2">
            <div className={styles[`time-group2`]}>
              <div className={styles[`time-segment2`]}>
                <div className={styles[`segment-display2`]}>
                  <div className={styles[`segment-display__top2`]}>{days}</div>
                  <div className={styles[`segment-display__bottom2`]}>
                    {minutes === 59 && seconds === 59 && hours === 23
                      ? days + 1
                      : days}
                  </div>
                  <div
                    className={cn(styles[`segment-overlay2`], {
                      [styles[`flip`]]:
                        minutes === 59 && seconds === 59 && hours === 23,
                    })}
                  >
                    <div className={styles[`segment-overlay__top2`]}>
                      {minutes === 59 && seconds === 59 && hours === 23
                        ? days + 1
                        : days}
                    </div>
                    <div className={styles[`segment-overlay__bottom2`]}>
                      {days}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>Days</p>
          </div>
          <div className={styles[`time-section2`]} id="hours2">
            <div className={styles[`time-group2`]}>
              <div className={styles[`time-segment2`]}>
                <div className={styles[`segment-display2`]}>
                  <div className={styles[`segment-display__top2`]}>{hours}</div>
                  <div className={styles[`segment-display__bottom2`]}>
                    {minutes === 59 && seconds === 59
                      ? hours === 23
                        ? 0
                        : hours + 1
                      : hours}
                  </div>
                  <div
                    className={cn(styles[`segment-overlay2`], {
                      [styles[`flip`]]: minutes === 59 && seconds === 59,
                    })}
                  >
                    <div className={styles[`segment-overlay__top2`]}>
                      {minutes === 59 && seconds === 59
                        ? hours === 23
                          ? 0
                          : hours + 1
                        : hours}
                    </div>
                    <div className={styles[`segment-overlay__bottom2`]}>
                      {hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>Hours</p>
          </div>
          <div className={styles[`time-section2`]} id="minutes2">
            <div className={styles[`time-group2`]}>
              <div className={styles[`time-segment2`]}>
                <div className={styles[`segment-display2`]}>
                  <div className={styles[`segment-display__top2`]}>
                    {minutes}
                  </div>
                  <div className={styles[`segment-display__bottom2`]}>
                    {seconds === 59
                      ? minutes === 59
                        ? 0
                        : minutes + 1
                      : minutes}
                  </div>
                  <div
                    className={cn(styles[`segment-overlay2`], {
                      [styles[`flip`]]: seconds === 59,
                    })}
                  >
                    <div className={styles[`segment-overlay__top2`]}>
                      {seconds === 59
                        ? minutes === 59
                          ? 0
                          : minutes + 1
                        : minutes}
                    </div>
                    <div className={styles[`segment-overlay__bottom2`]}>
                      {minutes}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>Minutes</p>
          </div>
          <div className={styles[`time-section2`]} id="seconds2">
            <div className={styles[`time-group2`]}>
              <div className={styles[`time-segment2`]}>
                <div className={styles[`segment-display2`]}>
                  <div className={styles[`segment-display__top2`]}>
                    {seconds}
                  </div>
                  <div className={styles[`segment-display__bottom2`]}>
                    {animFlag.current === true
                      ? seconds === 59
                        ? 0
                        : seconds + 1
                      : seconds}
                  </div>
                  <div
                    className={cn(styles[`segment-overlay2`], {
                      [styles[`flip`]]: animFlag.current === true,
                    })}
                  >
                    <div className={styles[`segment-overlay__top2`]}>
                      {animFlag.current === true
                        ? seconds === 59
                          ? 0
                          : seconds + 1
                        : seconds}
                    </div>
                    <div className={styles[`segment-overlay__bottom2`]}>
                      {seconds}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>Seconds</p>
          </div>
        </div>
      );
    }
  };

  return (
    //86401000
    //89701000
    //90061000
    <Countdown
      date={Date.now() + 86403000}
      renderer={renderer}
      intervalDelay={0}
      precision={3}
      onTick={onTick}
    />
  );
};
